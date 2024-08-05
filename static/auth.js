// static/auth.js
document.addEventListener("DOMContentLoaded", async () => {
  const { createClient } = require("@supabase/supabase-js");

  const supabaseUrl = "https://your-supabase-url";
  const supabaseAnonKey = "your-supabase-anon-key";

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const signInButton = document.getElementById("sign-in-button");
  const signOutButton = document.getElementById("sign-out-button");

  signInButton.addEventListener("click", async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
    if (error) {
      console.error("Error signing in:", error.message);
    } else {
      console.log("Signed in as:", user.email);
    }
  });

  signOutButton.addEventListener("click", async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      console.log("Signed out");
    }
  });

  supabase.auth.onAuthStateChange((event, session) => {
    if (session) {
      console.log("Logged in as:", session.user.email);
    } else {
      console.log("Not logged in");
    }
  });
});
