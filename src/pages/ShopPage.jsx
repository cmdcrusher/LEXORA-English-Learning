import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AvatarWithAccessory from "../components/AvatarWithAccessory";
import { useState, useEffect, useMemo } from "react";
import { supabase } from "../lib/supabase";
import { useProfile } from "../hooks/useProfile";
import { Gem, Check, ShoppingBag, Sparkles } from "lucide-react";

const TABS = [
    { key: "all", label: "All" },
    { key: "accessory", label: "Accessories" },
    { key: "theme", label: "Themes" },
    { key: "other", label: "Other" },
];

// фоллбек-эмодзи для "other", пока нет icon_url
const OTHER_ICONS = {
    name_highlight: "🖍️",
    profile_badge: "✅",
    level_up_effect: "⬆️",
    chat_bubble: "💬",
    frame: "🖼️",
    custom_status: "📝",
};

const SINGLE_EQUIP_CATEGORIES = new Set(["accessory", "other"]);

export default function ShopPage() {
    const profile = useProfile();
    const [items, setItems] = useState([]);
    const [ownedIds, setOwnedIds] = useState(new Set());
    const [equippedBySlot, setEquippedBySlot] = useState({});
    const [activeTab, setActiveTab] = useState("all");
    const [loading, setLoading] = useState(true);
    const [pendingId, setPendingId] = useState(null);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        if (profile) fetchAll();
    }, [profile?.id]);

    async function fetchAll({ silent = false } = {}) {
        if (!silent) setLoading(true);

        const [{ data: itemsData }, { data: purchases }, { data: equipped }] = await Promise.all([
            supabase.from("shop_items").select("*").order("category").order("price"),
            supabase.from("user_purchases").select("item_id").eq("user_id", profile.id),
            supabase.from("user_equipped").select("slot, item_id").eq("user_id", profile.id),
        ]);

        setItems(itemsData ?? []);
        setOwnedIds(new Set((purchases ?? []).map((p) => p.item_id)));
        const eqMap = {};
        (equipped ?? []).forEach((e) => { eqMap[e.slot] = e.item_id; });
        setEquippedBySlot(eqMap);

        if (!silent) setLoading(false);
    }

    function showToast(text) {
        setToast(text);
        setTimeout(() => setToast(null), 2200);
    }

    const itemsById = useMemo(() => {
        const map = {};
        items.forEach((i) => { map[i.id] = i; });
        return map;
    }, [items]);

    async function handleItemClick(item) {
        const owned = item.is_default || ownedIds.has(item.id);
        const equipped = equippedBySlot[item.slot] === item.id;

        setPendingId(item.id);

        if (!owned) {
            if ((profile.coins ?? 0) < item.price) {
                showToast("Not enough gems 💎");
                setPendingId(null);
                return;
            }

            const { data, error } = await supabase.rpc("purchase_item", { p_item_id: item.id });
            if (error || !data?.[0]?.success) {
                showToast(data?.[0]?.message ?? "Purchase failed");
                setPendingId(null);
                return;
            }
            setOwnedIds((prev) => new Set(prev).add(item.id));
            showToast(`${item.name} purchased! 🎉`);
        }

        if (!equipped) {
            if (SINGLE_EQUIP_CATEGORIES.has(item.category)) {
                const slotsToClear = Object.entries(equippedBySlot)
                    .filter(([slot, itemId]) => {
                        if (slot === item.slot) return false;
                        const equippedItem = itemsById[itemId];
                        return equippedItem?.category === item.category;
                    })
                    .map(([slot]) => slot);

                if (slotsToClear.length > 0) {
                    await Promise.all(
                        slotsToClear.map((slot) => supabase.rpc("unequip_slot", { p_slot: slot }))
                    );
                }
            }

            const { error } = await supabase.rpc("equip_item", { p_item_id: item.id });
            if (!error) {
                setEquippedBySlot((prev) => {
                    const next = { ...prev };
                    if (SINGLE_EQUIP_CATEGORIES.has(item.category)) {
                        Object.entries(next).forEach(([slot, itemId]) => {
                            if (itemsById[itemId]?.category === item.category) delete next[slot];
                        });
                    }
                    next[item.slot] = item.id;
                    return next;
                });
            }
        } else {
            await supabase.rpc("unequip_slot", { p_slot: item.slot });
            setEquippedBySlot((prev) => {
                const next = { ...prev };
                delete next[item.slot];
                return next;
            });
        }

        await fetchAll({ silent: true });
        setPendingId(null);
    }

    const grouped = useMemo(() => {
        const filtered = activeTab === "all" ? items : items.filter((i) => i.category === activeTab);
        const groups = { accessory: [], theme: [], other: [] };
        filtered.forEach((i) => groups[i.category]?.push(i));
        return groups;
    }, [items, activeTab]);

    if (!profile || loading) {
        return (
            <div className="flex min-h-screen bg-[#fafafc]">
                <Sidebar />
                <div className="lg:pl-64 w-full flex items-center justify-center">
                    <p className="text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-[#fafafc]">
            <Sidebar />

            <div className="lg:pl-64 w-full">
                <Header />

                <main className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8 max-w-6xl mx-auto relative">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
                                Shop <ShoppingBag size={24} className="text-[#6658f3]" />
                            </p>
                            <p className="text-gray-500 pt-1">Spend your gems and customize your avatar</p>
                        </div>

                        <div className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-xl px-4 py-2.5">
                            <Gem size={16} className="text-[#6658f3]" />
                            <span className="font-bold text-gray-900">{profile.coins ?? 0}</span>
                        </div>
                    </div>

                    <div className="flex gap-1 mt-6 mb-6 overflow-x-auto">
                        {TABS.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                    activeTab === tab.key
                                        ? "bg-violet-50 text-[#6658f3]"
                                        : "text-gray-500 hover:bg-gray-50"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {grouped.accessory.length > 0 && (
                        <ShopSection title="Accessories">
                            {grouped.accessory.map((item) => (
                                <AccessoryCard
                                    key={item.id}
                                    item={item}
                                    owned={ownedIds.has(item.id)}
                                    equipped={equippedBySlot[item.slot] === item.id}
                                    pending={pendingId === item.id}
                                    onClick={() => handleItemClick(item)}
                                    avatarUrl={profile.avatar_url}
                                />
                            ))}
                        </ShopSection>
                    )}

                    {grouped.theme.length > 0 && (
                        <ShopSection title="Themes">
                            {grouped.theme.map((item) => (
                                <ThemeCard
                                    key={item.id}
                                    item={item}
                                    owned={item.is_default || ownedIds.has(item.id)}
                                    equipped={equippedBySlot[item.slot] === item.id}
                                    pending={pendingId === item.id}
                                    onClick={() => handleItemClick(item)}
                                />
                            ))}
                        </ShopSection>
                    )}

                    {grouped.other.length > 0 && (
                        <ShopSection title="Other">
                            {grouped.other.map((item) => (
                                <OtherCard
                                    key={item.id}
                                    item={item}
                                    owned={ownedIds.has(item.id)}
                                    equipped={equippedBySlot[item.slot] === item.id}
                                    pending={pendingId === item.id}
                                    onClick={() => handleItemClick(item)}
                                />
                            ))}
                        </ShopSection>
                    )}

                    <div className="flex items-center justify-center gap-2 mt-4 bg-violet-50/50 border border-violet-100 rounded-xl py-3 text-sm text-[#6658f3] text-center px-3">
                        <Sparkles size={15} className="shrink-0" /> New items are added regularly. Stay tuned!
                    </div>

                    {toast && (
                        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-5 py-3 rounded-xl shadow-lg whitespace-nowrap">
                            {toast}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

function ShopSection({ title, children }) {
    return (
        <div className="mb-8">
            <p className="font-bold text-lg text-gray-900 pb-3">{title}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {children}
            </div>
        </div>
    );
}

function AccessoryCard({ item, owned, equipped, pending, onClick, avatarUrl }) {
    return (
        <button
            onClick={onClick}
            disabled={pending}
            className={`relative flex flex-col items-center bg-white rounded-2xl border-2 px-4 py-5 transition-colors ${
                equipped ? "border-[#6658f3]" : "border-gray-100 hover:border-gray-200"
            }`}
        >
            {equipped && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#6658f3] flex items-center justify-center">
                    <Check size={12} className="text-white" />
                </div>
            )}

            <div className="w-20 h-20 mb-3">
                <AvatarWithAccessory avatarUrl={avatarUrl} accessory={item} size={80} />
            </div>

            <p className="text-sm font-semibold text-gray-900 text-center">{item.name}</p>
            <div className="flex items-center gap-1 mt-1">
                <Gem size={12} className="text-[#6658f3]" />
                <span className="text-xs font-medium text-gray-500">{owned ? "Owned" : item.price}</span>
            </div>
        </button>
    );
}

function ThemeCard({ item, owned, equipped, pending, onClick }) {
    const colors = item.theme_colors ?? {};
    return (
        <button
            onClick={onClick}
            disabled={pending}
            className={`relative flex flex-col items-center bg-white rounded-2xl border-2 px-4 py-4 transition-colors ${
                equipped ? "border-[#6658f3]" : "border-gray-100 hover:border-gray-200"
            }`}
        >
            {equipped && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#6658f3] flex items-center justify-center">
                    <Check size={12} className="text-white" />
                </div>
            )}

            <div
                className="w-full h-16 rounded-lg mb-3 overflow-hidden border border-gray-100"
                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` }}
            >
                <div className="w-full h-4" style={{ backgroundColor: colors.secondary }} />
            </div>

            <p className="text-sm font-semibold text-gray-900">{item.name}</p>

            <div className="flex items-center gap-1.5 mt-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.primary }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.accent }} />
                <span className="w-3 h-3 rounded-full bg-gray-200" />
            </div>

            <div className="flex items-center gap-1 mt-2">
                <Gem size={12} className="text-[#6658f3]" />
                <span className="text-xs font-medium text-gray-500">
                    {owned ? "Owned" : item.price}
                </span>
            </div>
        </button>
    );
}

function OtherCard({ item, owned, equipped, pending, onClick }) {
    const iconUrl = item.icon_url ?? null;

    return (
        <button
            onClick={onClick}
            disabled={pending}
            className={`relative flex items-center gap-3 bg-white rounded-2xl border-2 px-4 py-4 text-left transition-colors ${
                equipped ? "border-[#6658f3]" : "border-gray-100 hover:border-gray-200"
            }`}
        >
            <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center text-xl shrink-0 overflow-hidden">
                {iconUrl ? (
                    <img src={iconUrl} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                    OTHER_ICONS[item.slot] ?? "✨"
                )}
            </div>
            <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
                <div className="flex items-center gap-1 mt-1">
                    <Gem size={12} className="text-[#6658f3]" />
                    <span className="text-xs font-medium text-gray-500">{owned ? "Owned" : item.price}</span>
                </div>
            </div>

            {equipped && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#6658f3] flex items-center justify-center">
                    <Check size={12} className="text-white" />
                </div>
            )}
        </button>
    );
}