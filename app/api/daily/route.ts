import { NextResponse } from 'next/server';
import { getDailyCacheKey } from '../../../lib/daily/cache';
import {
  buildDailyResponse,
  type DailySlot,
  type DailyTheme,
} from '../../../lib/daily/selector';
import { supabaseServer } from '../../../lib/supabase/server';

const PLACEHOLDER_ALBUMS = [
  {
    artist: 'The Beatles',
    title: 'Abbey Road',
    year: 1969,
    country: 'UK',
  },
  {
    artist: 'Nirvana',
    title: 'Nevermind',
    year: 1991,
    country: 'US',
  },
  {
    artist: 'Radiohead',
    title: 'OK Computer',
    year: 1997,
    country: 'UK',
  },
  {
    artist: 'Beyoncé',
    title: 'Lemonade',
    year: 2016,
    country: 'US',
  },
  {
    artist: 'David Bowie',
    title: '"Heroes"',
    year: 1977,
    country: 'UK',
  },
];

async function ensureDailyTheme(date: string) {
  const { data, error } = await supabaseServer
    .from('daily_themes')
    .upsert(
      {
        date,
        theme_name: 'Stage 1 Test Theme',
        theme_type: 'test',
      },
      { onConflict: 'date' }
    )
    .select('date, theme_name, theme_type')
    .single();

  if (error) {
    throw error;
  }

  return data;
}

async function fetchDailyAlbums(date: string) {
  const { data, error } = await supabaseServer
    .from('daily_albums')
    .select(
      'slot,difficulty,obscuration,album:albums(id,artist,title,year,country,cover_url)'
    )
    .eq('date', date)
    .order('slot');

  if (error) {
    throw error;
  }

  return data ?? [];
}

async function createMissingDailyAlbums(date: string, missingSlots: number[]) {
  const albumsToInsert = missingSlots.map((slot) => {
    const placeholder = PLACEHOLDER_ALBUMS[slot - 1];
    return {
      source: 'placeholder',
      artist: placeholder.artist,
      title: placeholder.title,
      year: placeholder.year,
      country: placeholder.country,
      cover_url: null,
    };
  });

  const { data: insertedAlbums, error: insertError } = await supabaseServer
    .from('albums')
    .insert(albumsToInsert)
    .select('id');

  if (insertError) {
    throw insertError;
  }

  const dailyAlbumsToInsert = insertedAlbums.map((album, index) => {
    const slot = missingSlots[index];
    return {
      date,
      slot,
      album_id: album.id,
      difficulty: slot,
      obscuration: {},
    };
  });

  const { error: dailyError } = await supabaseServer
    .from('daily_albums')
    .insert(dailyAlbumsToInsert);

  if (dailyError) {
    throw dailyError;
  }
}

export async function GET() {
  const date = getDailyCacheKey();

  const themeRow = await ensureDailyTheme(date);
  const theme: DailyTheme = {
    name: themeRow.theme_name,
    type: themeRow.theme_type,
  };

  let dailyAlbums = await fetchDailyAlbums(date);
  const existingSlots = new Set(dailyAlbums.map((album) => album.slot));
  const missingSlots = [1, 2, 3, 4, 5].filter((slot) => !existingSlots.has(slot));

  if (missingSlots.length > 0) {
    await createMissingDailyAlbums(date, missingSlots);
    dailyAlbums = await fetchDailyAlbums(date);
  }

  const slots: DailySlot[] = dailyAlbums.map((entry) => ({
    slot: entry.slot,
    difficulty: entry.difficulty,
    obscuration: entry.obscuration ?? {},
    album: {
      id: entry.album.id,
      artist: entry.album.artist,
      title: entry.album.title,
      year: entry.album.year ?? null,
      country: entry.album.country ?? null,
      cover_url: entry.album.cover_url ?? null,
    },
  }));

  return NextResponse.json(buildDailyResponse(date, theme, slots));
}
