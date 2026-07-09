import { Flame, Gem, Check, ArrowUp, Menu } from "lucide-react";
import { useProfile } from "../hooks/useProfile";
import { useEquippedItems } from "../hooks/useEquippedItems";
import { useSidebar } from "../context/SidebarContext";
import AvatarWithAccessory from "./AvatarWithAccessory";

export default function Header() {
    const profile = useProfile();
    const equipped = useEquippedItems(profile?.id);
    const { setIsOpen } = useSidebar();

    const hasFrame = !!equipped.achievement_frame;
    const hasLevelUp = !!equipped.level_up_effect;
    const hasBadge = !!equipped.profile_badge;
    const hasNameHighlight = !!equipped.name_highlight;
    const customStatus = equipped.custom_status?.status_text;

    return (
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between lg:justify-end px-4 lg:px-8 gap-3 lg:gap-6 sticky top-0 z-30">

            {/* гамбургер — только на мобиле */}
            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700 shrink-0"
            >
                <Menu size={24} />
            </button>

            <div className="flex items-center gap-3 lg:gap-6">
                <div className="flex items-center gap-1.5">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold text-gray-900 text-sm lg:text-base">{profile?.streak ?? 0}</span>
                </div>

                <div className="flex items-center gap-1.5">
                    <Gem className="w-5 h-5 text-[#6658f3]" />
                    <span className="font-semibold text-gray-900 text-sm lg:text-base">{profile?.coins ?? 0}</span>
                </div>

                {/* имя + подсветка + кастомный статус — скрываем на совсем маленьких экранах, чтобы не толкать аватар */}
                {(profile?.username || customStatus) && (
                    <div className="hidden sm:flex flex-col items-end leading-tight">
                        {profile?.username && (
                            <span
                                className={
                                    hasNameHighlight
                                        ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6658f3] via-fuchsia-500 to-orange-400 animate-[pulse_2s_ease-in-out_infinite]"
                                        : "font-semibold text-gray-900"
                                }
                            >
                                {profile.username}
                            </span>
                        )}
                        {customStatus && (
                            <span className="text-xs text-gray-400">{customStatus}</span>
                        )}
                    </div>
                )}

                <div className="relative shrink-0">
                    {hasLevelUp && (
                        <span className="absolute inset-0 rounded-full ring-2 ring-[#6658f3] animate-ping" />
                    )}

                    <div
                        className={
                            hasFrame
                                ? "rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-[#6658f3]"
                                : ""
                        }
                    >
                        <AvatarWithAccessory
                            avatarUrl={profile?.avatar_url}
                            accessory={equipped.accessory}
                            size={40}
                        />
                    </div>

                    {hasBadge && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#6658f3] border-2 border-white flex items-center justify-center">
                            <Check size={11} className="text-white" />
                        </div>
                    )}

                    {hasLevelUp && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                            <ArrowUp size={11} className="text-white" />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}