import { NextResponse } from 'next/server';
import { getDailyCacheKey } from '../../../lib/daily/cache';
import {
  buildDailyResponse,
  type DailyAlbum,
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

type DailyAlbumRow = {
  slot: number;
  difficulty: number;
  obscuration: Record<string, unknown> | null;
  album: DailyAlbum | DailyAlbum[] | null;
};

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
      'slot,difficulty,obscuration,album:albums!inner(id,artist,title,year,country,cover_url)'
    )
    .eq('date', date)
    .order('slot');

  if (error) {
    throw error;
  }

  return (data ?? []) as DailyAlbumRow[];
}

async function createDailyAlbums(date: string) {
  const albumsToInsert = PLACEHOLDER_ALBUMS.map((placeholder) => {
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
    const slot = index + 1;
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

  let themeRow = await getDailyTheme(date);

  if (!themeRow) {
    themeRow = await createDailyTheme(date);
    await createDailyAlbums(date);
  }

  const theme: DailyTheme = {
    name: themeRow.theme_name,
    type: themeRow.theme_type,
  };

  const dailyAlbums = await fetchDailyAlbums(date);

  const slots: DailySlot[] = dailyAlbums.map((entry) => {
    const album = Array.isArray(entry.album) ? entry.album[0] : entry.album;

    if (!album) {
      throw new Error(`Missing album for daily slot ${entry.slot}`);
    }

    return {
      slot: entry.slot,
      difficulty: entry.difficulty,
      obscuration: entry.obscuration ?? {},
      album: {
        id: album.id,
        artist: album.artist,
        title: album.title,
        year: album.year ?? null,
        country: album.country ?? null,
        cover_url: album.cover_url ?? null,
      },
    };
  });

  return NextResponse.json(buildDailyResponse(date, theme, slots));
}
