import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useEquippedItems(userId) {
    const [equipped, setEquipped] = useState({});

    useEffect(() => {
        if (!userId) return;

        async function fetch() {
            const { data, error } = await supabase
                .from("user_equipped")
                .select("slot, shop_items(item_key, name, icon_url, position, theme_colors)")
                .eq("user_id", userId);

            if (!error && data) {
                const map = {};
                data.forEach((row) => { map[row.slot] = row.shop_items; });
                setEquipped(map);
            }
        }
        fetch();
    }, [userId]);

    return equipped;
}