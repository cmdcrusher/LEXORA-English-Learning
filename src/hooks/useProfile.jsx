import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useProfile() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        async function getProfile() {

            const { data: authData , error: authError} = await supabase.auth.getUser();

            const { data: profileData , error: profileError } = await supabase.from('profiles').select('*').eq('id', authData.user.id).single();

            return profileData
        };

        async function load() {

            const data = await getProfile();

            setProfile(data);
        };

        load();
    }, [])

    return profile;
}