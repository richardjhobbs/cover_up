import { NextResponse } from 'next/server';
import { getUtcDateString } from '../../../lib/daily/cache';
import { mapDailyAlbums, selectDailyWall } from '../../../lib/daily/selector';
import { supabaseServer } from '../../../lib/supabase/server';

const PLACEHOLDER_THEME = {
  theme_name: 'Stage 1 Test Theme',
  theme_type: 'test',
};

const PLACEHOLDER_ALBUMS = Array.from({ length: 5 }, (_, index) => ({
  source: 'placeholder',
  artist: `Stage 1 Test Artist ${index + 1}`,
  title: `Stage 1 Test Album ${index + 1}`,
  year: 2000 + index,
  country: 'US',
  cover_url: null,
}));

export async function GET() {
  const supabase = supabaseServer();
  const date = getUtcDateString(new Date());

  try {
    let { theme, slots } = await selectDailyWall(supabase, date);

    if (!theme) {
      const { data: createdTheme, error: themeError } = await supabase
        .from('daily_themes')
        .upsert(
          {
            date,
            ...PLACEHOLDER_THEME,
          },
          { onConflict: 'date' }
        )
        .select('date, theme_name, theme_type')
        .single();

      if (themeError) {
        return NextResponse.json({ error: themeError.message }, { status: 500 });
      }

      theme = createdTheme;
    }

    if (slots.length === 0) {
      const { data: albums, error: albumError } = await supabase
        .from('albums')
        .insert(PLACEHOLDER_ALBUMS)
        .select('id, artist, title, year, country, cover_url');

      if (albumError) {
        return NextResponse.json({ error: albumError.message }, { status: 500 });
      }

      const dailyAlbumsPayload =
        albums?.map((album, index) => ({
          date,
          slot: index + 1,
          album_id: album.id,
          difficulty: index + 1,
          obscuration: {},
        })) ?? [];

      const { error: dailyAlbumError } = await supabase
        .from('daily_albums')
        .upsert(dailyAlbumsPayload, { onConflict: 'date,slot' });

      if (dailyAlbumError) {
        return NextResponse.json(
          { error: dailyAlbumError.message },
          { status: 500 }
        );
      }

      const { data: dailyAlbums, error: reloadError } = await supabase
        .from('daily_albums')
        .select(
          'slot, difficulty, obscuration, albums(id, artist, title, year, country, cover_url)'
        )
        .eq('date', date)
        .order('slot', { ascending: true });

      if (reloadError) {
        return NextResponse.json(
          { error: reloadError.message },
          { status: 500 }
        );
      }

      slots = mapDailyAlbums(dailyAlbums ?? []);
    }

    return NextResponse.json({
      date,
      theme: theme
        ? {
            name: theme.theme_name,
            type: theme.theme_type,
          }
        : null,
      slots,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
