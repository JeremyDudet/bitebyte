import { useEffect } from "react";
import { useStore } from "./store";
import AppRouter from "./routes/AppRouter";
import { supabase } from "./lib/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

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
  }, [setSession]);

  if (loading) {
    return null;
  }

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#4F46E5",
                    brandAccent: "#4338CA",
                  },
                },
              },
              className: {
                container: "login-container",
                button: "login-button",
                input: "login-input",
                label: "login-label",
              },
            }}
            providers={["google"]}
            socialLayout="horizontal"
          />
        </div>
      </div>
    );
  }

  return <AppRouter />;
}

export default App;
