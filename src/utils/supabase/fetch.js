import { supabase } from "../../supabaseClient";

export const fetchData = async () => {
  try {
    let { data, error } = await supabase.from("profile").select("*");

    if (error) {
      throw error;
    }

    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
