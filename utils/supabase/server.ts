import { auth } from "@clerk/nextjs/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

function requiredEnvironment(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function createClient() {
  const supabaseUrl = requiredEnvironment("NEXT_PUBLIC_SUPABASE_URL");
  const supabasePublishableKey = requiredEnvironment(
    "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  );

  return createSupabaseClient(supabaseUrl, supabasePublishableKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
    async accessToken() {
      const { getToken } = await auth();
      return getToken();
    },
  });
}
