import { NextResponse } from 'next/server';
import { getDailyCacheKey } from '../../../lib/daily/cache';
import {
  buildDailyResponse,
  type DailySlot,
  type DailyTheme,
} from '../../../lib/daily/selector';
import { searchReleases } from '../../../lib/musicbrainz';
import { supabaseServer } from '../../../lib/supabase/server';

const DAILY_RELEASE_QUERIES = ['rock', 'pop', 'hip-hop', 'electronic', 'jazz'];

async function getDailyTheme(date: string) {
  const { data, error } = await supabaseServer
    .from('daily_themes')
    .select('date, theme_name, theme_type')
    .eq('date', date)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data ?? null;
}

async function createDailyTheme(date: string) {
  const { data, error } = await supabaseServer
    .from('daily_themes')
    .insert({
      date,
      theme_name: 'Stage 1 Test Theme',
      theme_type: 'test',
    })
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

async function createDailyAlbums(date: string) {
  const dateValue = new Date(`${date}T00:00:00Z`);
  const weekdayIndex = dateValue.getUTCDay();
  const query = DAILY_RELEASE_QUERIES[weekdayIndex % DAILY_RELEASE_QUERIES.length];
  const offsetSeed = Number(date.replace(/-/g, ''));
  const offset = offsetSeed % 50;

  const releases = await searchReleases({ query, limit: 5, offset });

  const albumsToUpsert = releases.map((release) => {
    const releaseDate = typeof release.date === 'string' ? release.date : null;
    const year = releaseDate ? Number.parseInt(releaseDate.slice(0, 4), 10) : null;
    const artistName = release['artist-credit']?.[0]?.name ?? 'Unknown Artist';

    return {
      source: 'musicbrainz',
      mbid: release.id,
      artist: artistName,
      title: release.title ?? 'Untitled',
      year: Number.isNaN(year ?? Number.NaN) ? null : year,
      country: release.country ?? null,
      cover_url: null,
    };
  });

  const { data: upsertedAlbums, error: upsertError } = await supabaseServer
    .from('albums')
    .upsert(albumsToUpsert, { onConflict: 'mbid' })
    .select('id, mbid');

  if (upsertError) {
    throw upsertError;
  }

  const albumIdByMbid = new Map(
    upsertedAlbums.map((album) => [album.mbid, album.id])
  );

  const dailyAlbumsToInsert = albumsToUpsert.map((album, index) => {
    const slot = index + 1;
    const albumId = albumIdByMbid.get(album.mbid);

    if (!albumId) {
      throw new Error(`Missing album id for ${album.mbid ?? 'unknown mbid'}`);
    }

    return {
      date,
      slot,
      album_id: albumId,
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

  let themeRow = await getDailyTheme(date);

  if (!themeRow) {
    themeRow = await createDailyTheme(date);
  }

  const theme: DailyTheme = {
    name: themeRow.theme_name,
    type: themeRow.theme_type,
  };

  let dailyAlbums = await fetchDailyAlbums(date);

  if (dailyAlbums.length === 0) {
    await createDailyAlbums(date);
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
