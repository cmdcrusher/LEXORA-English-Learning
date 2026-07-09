// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const ThemeContext = createContext(null);

export function ThemeProvider({ children, userId }) {
    const [themeColors, setThemeColors] = useState({
        primary: "#6658f3", secondary: "#f8f7fc", accent: "#786cf1", bg: "#fafafc",
    });

    useEffect(() => {
        if (!userId) return;

        async function loadTheme() {
            const { data } = await supabase
                .from("user_equipped")
                .select("shop_items(theme_colors)")
                .eq("user_id", userId)
                .eq("slot", "theme")
                .maybeSingle();

            const colors = data?.shop_items?.theme_colors;
            if (colors) setThemeColors(colors);
        }
        loadTheme();
    }, [userId]);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--color-primary", themeColors.primary);
        root.style.setProperty("--color-secondary", themeColors.secondary);
        root.style.setProperty("--color-accent", themeColors.accent);
        root.style.setProperty("--color-bg", themeColors.bg);
    }, [themeColors]);

    return (
        <ThemeContext.Provider value={{ themeColors, setThemeColors }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}