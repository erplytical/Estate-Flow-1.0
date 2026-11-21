
import { createClient } from '@supabase/supabase-js';

/**
 * Supabase Connection Credentials
 * Project: vkyfgxrwgrzcernmhbyk
 */
const supabaseUrl = 'https://uayvdbzijpbmgpxliovz.supabase.co';
const supabaseAnonKey = 'sb_publishable_XdZw3H_xwv9wmAhuFuGBbg_6QcSR3wz';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// A separate client that does not store a session. Used by admins to create
// accounts for teammates without logging themselves out.
export const createIsolatedClient = () =>
  createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false, storageKey: 'ef-provision' },
  });
