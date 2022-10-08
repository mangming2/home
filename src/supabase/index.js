import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rnningjigplqydivritt.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJubmluZ2ppZ3BscXlkaXZyaXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUyMzI4OTcsImV4cCI6MTk4MDgwODg5N30.FXGLOA_LMsM2Res-qP1EQ7cPBGjXtSekeXdLt6zgMM4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
