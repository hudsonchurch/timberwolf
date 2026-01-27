import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://swkeahvyhihtvhwfkrfo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3a2VhaHZ5aGlodHZod2ZrcmZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4NTI4NTAsImV4cCI6MjA3OTQyODg1MH0.zzNIyv-9wABuirHZlQq67a-EAjlHx1q8zHJnMKCYqKk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import the supabase client like this:
// For React:
// import { supabase } from "@/integrations/supabase/client";
// For React Native:
// import { supabase } from "@/src/integrations/supabase/client";
