type MusicBrainzRelease = {
  id: string;
  title: string;
  date?: string;
  country?: string;
  'artist-credit'?: Array<{
    name?: string;
    artist?: {
      name?: string;
    };
  }>;
};

type ReleaseSearchResponse = {
  releases?: MusicBrainzRelease[];
};

type SearchReleasesParams = {
  query: string;
  limit?: number;
  offset?: number;
};

type CacheEntry = {
  expiresAt: number;
  data: MusicBrainzRelease[];
};

const BASE_URL = 'https://musicbrainz.org/ws/2';
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const cache = new Map<string, CacheEntry>();

let lastRequestTime = 0;
let pendingRequest: Promise<void> = Promise.resolve();

async function rateLimit() {
  const now = Date.now();
  const waitMs = Math.max(0, 1000 - (now - lastRequestTime));

  if (waitMs > 0) {
    await new Promise((resolve) => {
      setTimeout(resolve, waitMs);
    });
  }

  lastRequestTime = Date.now();
}

async function scheduleRequest() {
  pendingRequest = pendingRequest.then(rateLimit);
  await pendingRequest;
}

function buildCacheKey(params: SearchReleasesParams) {
  return JSON.stringify({
    query: params.query,
    limit: params.limit ?? 5,
    offset: params.offset ?? 0,
  });
}

export async function searchReleases({
  query,
  limit = 5,
  offset = 0,
}: SearchReleasesParams): Promise<MusicBrainzRelease[]> {
  const cacheKey = buildCacheKey({ query, limit, offset });
  const cached = cache.get(cacheKey);

  if (cached && cached.expiresAt > Date.now()) {
    return cached.data;
  }

  await scheduleRequest();

  const url = new URL(`${BASE_URL}/release`);
  url.searchParams.set('query', query);
  url.searchParams.set('limit', String(limit));
  url.searchParams.set('offset', String(offset));
  url.searchParams.set('fmt', 'json');

  const response = await fetch(url.toString(), {
    headers: {
      'User-Agent': 'CoverUpDemo/0.1 (contact@getvia.xyz)',
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`MusicBrainz request failed: ${response.status}`);
  }

  const data = (await response.json()) as ReleaseSearchResponse;
  const releases = data.releases ?? [];

  cache.set(cacheKey, {
    expiresAt: Date.now() + CACHE_TTL_MS,
    data: releases,
  });

  return releases;
}
