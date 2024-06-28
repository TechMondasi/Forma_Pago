import { supabase } from "./supabaseconfig";

export const signIn = async (email, password) => {
    const {user, error} = await supabase.auth.signInWithPassword({email, password});
    if(error) throw error;
    console.log("error tipo: " +  error)
    return user;
}