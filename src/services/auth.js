import { supabase } from "../lib/supabase";

export async function register({
    username,
    email,
    password
}) {

    //1. Creating an account

    const {data, error} =
        await supabase.auth.signUp({

            email,
            password

        });

    if (error)
        throw error;


    //2. Creating a profile

    const user = data.user;

    const {error: profileError} = 
        await supabase
            .from('profiles')
            .insert({

                id: user.id,

                username,

                avatar_url:null,

                xp: 0,

                coins: 0,

                level: 1

            });

    if (profileError)
        throw profileError;

    return user;
}