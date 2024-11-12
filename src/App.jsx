import { useEffect } from "react";
import { useStore } from "./store";
import AppRouter from "./routes/AppRouter";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_PROJECT_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const { session, setSession, loading } = useStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  });

  if (loading) {
    return null;
  }

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  }

  return <AppRouter />;
}

export default App;
