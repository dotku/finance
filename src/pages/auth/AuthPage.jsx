// src/components/AuthComponent.js
import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import Layout from "@theme/Layout";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { fetchData } from "../../utils/supabase/fetch";

const AuthComponent = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      console.log("session data", data);

      if (error) {
        console.error("Error fetching session:", error);
      } else {
        console.log("profiles", await fetchData());
        setSession(data.session);
      }

      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <Layout description="Description will go into a meta tag in <head />">
        <div>Loading....</div>
      </Layout>
    );
  }

  if (!session) {
    return (
      <Layout description="Description will go into a meta tag in <head />">
        <div>
          <div className="w-96 mx-auto my-8">
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={[]}
            />
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <div>
      <h1>Welcome, User!</h1>
      <p>You are logged in.</p>
    </div>
  );
};

export default AuthComponent;
