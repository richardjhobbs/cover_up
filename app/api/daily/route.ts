import { NextResponse } from 'next/server';
import { getDailyCacheKey } from '../../../lib/daily/cache';
import {
  buildDailyResponse,
  type DailySlot,
  type DailyTheme,
} from '../../../lib/daily/selector';
import { supabaseServer } from '../../../lib/supabase/server';
import { selectDailyAlbums, getWeeklyThemeName } from '../../../lib/musicbrainz/selector';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// HELPER: Transforms database rows into the standard DailySlot format
function transformToSlot(entry: any): DailySlot {
  const albumData = entry.album as any;
  const data = Array.isArray(albumData) ? albumData[0] : albumData;

  return {
    slot: entry.slot,
    difficulty: entry.difficulty,
    obscuration: entry.obscuration ?? {},
    album: {
      id: Number(data.id),
      artist: data.artist,
      title: data.title,
      year: data.year ?? null,
      country: data.country ?? null,
      cover_url: data.cover_url ?? null,
    },
  };
}

async function getDailyTheme(date: string) {
  const { data, error } = await supabaseServer
    .from('daily_themes')
    .select('id, date, theme_name, theme_type')
    .eq('date', date)
    .maybeSingle();

  if (error) throw error;
  return data ?? null;
}

async function createDailyTheme(date: string, themeName: string) {
  const { data, error } = await supabaseServer
    .from('daily_themes')
    .insert({
      date,
      theme_name: themeName,
      theme_type: 'automated',
    })
    .select('id, date, theme_name, theme_type')
    .single();

  if (error) throw error;
  return data;
}

async function fetchDailyAlbums(date: string) {
  const { data, error } = await supabaseServer
    .from('daily_albums')
    .select(
      'slot, difficulty, obscuration, album:albums(id, artist, title, year, country, cover_url, genres)'
    )
    .eq('date', date)
    .order('slot');

  if (error) throw error;
  return data ?? [];
}

async function createDailyAlbums(date: string) {
  const dateObj = new Date(date);
  const selectedAlbums = await selectDailyAlbums(dateObj);
  
  if (selectedAlbums.length === 0) {
    throw new Error('No albums returned from selector');
  }
  
  const albumsToInsert = selectedAlbums.map(album => ({
    source: 'musicbrainz',
    mbid: album.mbid,
    artist: album.artist,
    title: album.title,
    year: album.year,
    country: album.country,
    cover_url: album.coverUrl,
    genres: album.genres,
  }));

  const { data: insertedAlbums, error: insertError } = await supabaseServer
    .from('albums')
    .upsert(albumsToInsert, { onConflict: 'mbid' })
    .select('id, mbid');

  if (insertError) throw insertError;

  const dailyAlbumsToInsert = insertedAlbums.map((album, index) => {
    const slot = index + 1;
    return {
      date,
      slot,
      album_id: album.id,
      difficulty: slot,
      obscuration: {
        type: slot <= 2 ? 'blur' : 'crop',
        intensity: slot * 20,
      },
    };
  });

  const { error: dailyError } = await supabaseServer
    .from('daily_albums')
    .insert(dailyAlbumsToInsert);

  if (dailyError) throw dailyError;
  return insertedAlbums.length;
}

export async function GET() {
  const date = getDailyCacheKey();
  const dateObj = new Date(date);

  let themeRow = await getDailyTheme(date);

  // 1. Initial Creation: If no theme exists, create the theme AND the albums
  if (!themeRow) {
    const themeName = getWeeklyThemeName(dateObj);
    themeRow = await createDailyTheme(date, themeName);
    
    try {
      await createDailyAlbums(date);
    } catch (error) {
      console.error('Failed to create daily albums during initialization:', error);
    }
  }

  // 2. Recovery Logic: If theme exists but no albums are found, try generating them again
  let dailyAlbums = await fetchDailyAlbums(date);

  if (dailyAlbums.length === 0 && themeRow) {
    console.log("Recovery mode: Theme exists but slots are empty. Generating now...");
    try {
      await createDailyAlbums(date);
      dailyAlbums = await fetchDailyAlbums(date); // Re-fetch after generation
    } catch (error) {
      console.error('Recovery failed:', error);
    }
  }

  const theme: DailyTheme = {
    name: themeRow.theme_name,
    type: themeRow.theme_type,
  };

  const slots: DailySlot[] = dailyAlbums.map(transformToSlot);

  return NextResponse.json(buildDailyResponse(date, theme, slots));
}