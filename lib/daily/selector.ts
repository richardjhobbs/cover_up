export type DailyAlbum = {
  id: number;
  artist: string;
  title: string;
  year: number | null;
  country: string | null;
  cover_url: string | null;
};

export type DailySlot = {
  slot: number;
  difficulty: number;
  obscuration: Record<string, unknown>;
  album: DailyAlbum;
};

export type DailyTheme = {
  name: string;
  type: string;
};

export type DailyResponse = {
  date: string;
  theme: DailyTheme;
  slots: DailySlot[];
};

export function selectDailyWall(slots: DailySlot[]) {
  return [...slots].sort((a, b) => a.slot - b.slot);
}

export function buildDailyResponse(
  date: string,
  theme: DailyTheme,
  slots: DailySlot[]
): DailyResponse {
  return {
    date,
    theme,
    slots: selectDailyWall(slots),
  };
}
