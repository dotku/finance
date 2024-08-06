// src/components/LoginButton.js
import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

const LoginButton = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      console.log("session data", data);

      if (error) {
        console.error("Error fetching session:", error);
      } else {
        setSession(data.session);
      }
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

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn();
    if (error) {
      console.error("Error logging in:", error);
    } else {
      console.log("User logged in:", user);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      {session ? (
        <div>
          <span>Welcome, {session.user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginButton;
