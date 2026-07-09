import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkUser() {

            const { data } = await supabase.auth.getUser();

            setUser(data.user);
            setLoading(false);
        }

        checkUser();
    }, []);

    if (loading) return null;

    if (!user) {
        return <Navigate to='/' replace />
    }

    return children;
}