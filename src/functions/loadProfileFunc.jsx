async function loadProfile() {

    const {
        data: authData,
        error: authError,
    } = await supabase.auth.getUser();

    console.log("AUTH:", authData);
    console.log("USER:", authData.user);
    console.log("USER ID:", authData.user?.id);

    

    if (authError || !authData.user) {
        return;
    }

    const {
        data: profileData,
        error: profileError
    } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", authData.user.id)
        .single();

    if (profileError) {
        console.error(profileError);
        return;
    }
    console.log("PROFILE:", profileData);
    console.log("ERROR:", profileError);

    setUsername(profileData.username);

}