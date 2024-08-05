import Layout from "@theme/Layout";
import { HomepageHeader } from "../..";

export default function SignUpPage() {
  console.log("process.env", process.env.REACT_APP_SUPABASE_AONE_KEY);
  return (
    <>
      <Layout description="Description will go into a meta tag in <head />">
        <div className="h-full">
          Sign up page: {process.env.REACT_APP_SUPABASE_URL}{" "}
          REACT_APP_SUPABASE_AONE_KEY: {process.env.REACT_APP_SUPABASE_AONE_KEY}
        </div>
      </Layout>
    </>
  );
}
