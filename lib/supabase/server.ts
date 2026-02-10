import { createClient } from '@supabase/supabase-js';

export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

function getCookieValue(cookieHeader: string | null, key: string) {
  if (!cookieHeader) {
    return null;
  }

  const match = cookieHeader
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${key}=`));

  if (!match) {
    return null;
  }

  return decodeURIComponent(match.slice(key.length + 1));
}

export function getAccessTokenFromRequest(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice(7);
  }

  const cookieHeader = request.headers.get('cookie');
  const cookieToken = getCookieValue(cookieHeader, 'sb-access-token');
  if (cookieToken) {
    return cookieToken;
  }

  const supabaseAuthToken = getCookieValue(cookieHeader, 'supabase-auth-token');
  if (supabaseAuthToken) {
    try {
      const parsed = JSON.parse(supabaseAuthToken);
      if (Array.isArray(parsed) && typeof parsed[0] === 'string') {
        return parsed[0];
      }
    } catch {
      return null;
    }
  }

  return null;
}

export async function getUserFromRequest(request: Request) {
  const accessToken = getAccessTokenFromRequest(request);
  if (!accessToken) {
    return null;
  }

  const { data, error } = await supabaseServer.auth.getUser(accessToken);
  if (error) {
    return null;
  }

  return data.user;
}
