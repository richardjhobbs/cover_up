import type { SupabaseClient } from '@supabase/supabase-js';

export type DailyTheme = {
  date: string;
  theme_name: string;
  theme_type: string;
};

export type DailySlot = {
  slot: number;
  difficulty: number;
  obscuration: Record<string, unknown>;
  album_id: number;
  artist: string;
  title: string;
  year: number | null;
  country: string | null;
  cover_url: string | null;
};

type DailyAlbumRow = {
  slot: number;
  difficulty: number;
  obscuration: Record<string, unknown>;
  albums: {
    id: number;
    artist: string;
    title: string;
    year: number | null;
    country: string | null;
    cover_url: string | null;
  } | null;
};

export function mapDailyAlbums(rows: DailyAlbumRow[] = []): DailySlot[] {
  return rows.map((row) => ({
    slot: row.slot,
    difficulty: row.difficulty,
    obscuration: row.obscuration,
    album_id: row.albums?.id ?? 0,
    artist: row.albums?.artist ?? '',
    title: row.albums?.title ?? '',
    year: row.albums?.year ?? null,
    country: row.albums?.country ?? null,
    cover_url: row.albums?.cover_url ?? null,
  }));
}

export async function selectDailyWall(client: SupabaseClient, date: string) {
  const { data: theme, error: themeError } = await client
    .from('daily_themes')
    .select('date, theme_name, theme_type')
    .eq('date', date)
    .maybeSingle();

  if (themeError) {
    throw themeError;
  }

  const { data: dailyAlbums, error: albumsError } = await client
    .from('daily_albums')
    .select(
      'slot, difficulty, obscuration, albums(id, artist, title, year, country, cover_url)'
    )
    .eq('date', date)
    .order('slot', { ascending: true });

  if (albumsError) {
    throw albumsError;
  }

  return {
    theme,
    slots: mapDailyAlbums(dailyAlbums ?? []),
  };
}
