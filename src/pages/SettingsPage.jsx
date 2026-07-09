import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useProfile } from "../hooks/useProfile";
import {
    User, Bell, Lock, Trash2, Camera, Check,
    Minus, Plus as PlusIcon, LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {
    const profile = useProfile();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [savingProfile, setSavingProfile] = useState(false);
    const [profileSaved, setProfileSaved] = useState(false);

    const [lessonGoal, setLessonGoal] = useState(1);
    const [wordGoal, setWordGoal] = useState(3);
    const [notifications, setNotifications] = useState(true);
    const [savingPrefs, setSavingPrefs] = useState(false);
    const [prefsSaved, setPrefsSaved] = useState(false);

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [savingPassword, setSavingPassword] = useState(false);
    const [passwordSaved, setPasswordSaved] = useState(false);

    const [avatarUploading, setAvatarUploading] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

    useEffect(() => {
        if (profile) {
            setUsername(profile.username || "");
            setLessonGoal(profile.daily_lesson_goal ?? 1);
            setWordGoal(profile.daily_word_goal ?? 3);
            setNotifications(profile.notifications_enabled ?? true);
        }
    }, [profile]);

    async function handleAvatarUpload(e) {
        const file = e.target.files?.[0];
        if (!file || !profile) return;

        setAvatarUploading(true);
        const ext = file.name.split(".").pop();
        const path = `${profile.id}/avatar.${ext}`;

        const { error: uploadError } = await supabase.storage
            .from("avatars")
            .upload(path, file, { upsert: true });

        if (!uploadError) {
            const { data: publicUrlData } = supabase.storage.from("avatars").getPublicUrl(path);
            await supabase
                .from("profiles")
                .update({ avatar_url: publicUrlData.publicUrl })
                .eq("id", profile.id);
        }
        setAvatarUploading(false);
    }

    async function handleSaveProfile() {
        if (!profile) return;
        setSavingProfile(true);

        const { error } = await supabase
            .from("profiles")
            .update({ username })
            .eq("id", profile.id);

        setSavingProfile(false);
        if (!error) {
            setProfileSaved(true);
            setTimeout(() => setProfileSaved(false), 2000);
        }
    }

    async function handleSavePrefs() {
        if (!profile) return;
        setSavingPrefs(true);

        const { error } = await supabase
            .from("profiles")
            .update({
                daily_lesson_goal: lessonGoal,
                daily_word_goal: wordGoal,
                notifications_enabled: notifications,
            })
            .eq("id", profile.id);

        setSavingPrefs(false);
        if (!error) {
            setPrefsSaved(true);
            setTimeout(() => setPrefsSaved(false), 2000);
        }
    }

    async function handleChangePassword() {
        setPasswordError("");

        if (newPassword.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            return;
        }
        if (newPassword !== confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }

        setSavingPassword(true);
        const { error } = await supabase.auth.updateUser({ password: newPassword });
        setSavingPassword(false);

        if (error) {
            setPasswordError(error.message);
        } else {
            setPasswordSaved(true);
            setNewPassword("");
            setConfirmPassword("");
            setTimeout(() => setPasswordSaved(false), 2000);
        }
    }

    async function handleLogout() {
        await supabase.auth.signOut();
        navigate("/login");
    }

    async function handleDeleteAccount() {
        // удаление аккаунта требует service_role — обычно делается через Edge Function
        console.warn("Account deletion should be handled via a secure server-side function");
        setDeleteConfirmOpen(false);
    }

    if (!profile) {
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

                <main className="px-4 sm:px-6 lg:px-10 pb-4 max-w-3xl mx-auto">
                    <p className="text-3xl sm:text-5xl py-2 font-bold text-gray-900">Settings</p>
                    <p className="text-gray-500 pt-1 pb-8">
                        Manage your profile, learning preferences and account.
                    </p>

                    {/* Profile */}
                    <SettingsSection icon={<User size={16} className="text-[#6658f3]" />} title="Profile">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-violet-100 overflow-hidden flex items-center justify-center">
                                    {profile.avatar_url ? (
                                        <img src={profile.avatar_url} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-xl font-bold text-[#6658f3]">
                                            {username.charAt(0).toUpperCase()}
                                        </span>
                                    )}
                                </div>
                                <label className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#6658f3] flex items-center justify-center cursor-pointer hover:bg-[#5747e8] transition-colors">
                                    <Camera size={12} className="text-white" />
                                    <input type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
                                </label>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">
                                    {avatarUploading ? "Uploading..." : "Profile picture"}
                                </p>
                                <p className="text-xs text-gray-400">JPG or PNG, up to 2MB</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div>
                                <label className="text-sm text-gray-500 mb-1.5 block">Username</label>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#6658f3]"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500 mb-1.5 block">Email</label>
                                <input
                                    value={profile.email || ""}
                                    disabled
                                    className="w-full rounded-xl border border-gray-100 px-4 py-2.5 text-sm bg-gray-50 text-gray-400"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleSaveProfile}
                            disabled={savingProfile}
                            className="flex items-center gap-1.5 bg-[#6658f3] hover:bg-[#5747e8] disabled:opacity-60 text-white rounded-xl px-5 py-2.5 text-sm font-medium mt-4 transition-colors"
                        >
                            {profileSaved ? <><Check size={14} /> Saved</> : "Save changes"}
                        </button>
                    </SettingsSection>

                    {/* Learning preferences */}
                    <SettingsSection icon={<Bell size={16} className="text-amber-500" />} title="Learning preferences">
                        <div className="flex flex-col gap-5">
                            <StepperRow
                                label="Daily lesson goal"
                                hint="Lessons you want to complete per day"
                                value={lessonGoal}
                                min={1}
                                max={10}
                                onChange={setLessonGoal}
                            />
                            <StepperRow
                                label="Daily word goal"
                                hint="Words you want to master per day"
                                value={wordGoal}
                                min={1}
                                max={20}
                                onChange={setWordGoal}
                            />

                            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Reminders</p>
                                    <p className="text-xs text-gray-400">Get notified about your daily goal</p>
                                </div>
                                <ToggleSwitch checked={notifications} onChange={setNotifications} />
                            </div>
                        </div>

                        <button
                            onClick={handleSavePrefs}
                            disabled={savingPrefs}
                            className="flex items-center gap-1.5 bg-[#6658f3] hover:bg-[#5747e8] disabled:opacity-60 text-white rounded-xl px-5 py-2.5 text-sm font-medium mt-5 transition-colors"
                        >
                            {prefsSaved ? <><Check size={14} /> Saved</> : "Save preferences"}
                        </button>
                    </SettingsSection>

                    {/* Password */}
                    <SettingsSection icon={<Lock size={16} className="text-blue-500" />} title="Password">
                        <div className="flex flex-col gap-3">
                            <div>
                                <label className="text-sm text-gray-500 mb-1.5 block">New password</label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="At least 6 characters"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#6658f3]"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500 mb-1.5 block">Confirm password</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#6658f3]"
                                />
                            </div>
                            {passwordError && (
                                <p className="text-sm text-red-500">{passwordError}</p>
                            )}
                        </div>

                        <button
                            onClick={handleChangePassword}
                            disabled={savingPassword || !newPassword}
                            className="flex items-center gap-1.5 bg-[#6658f3] hover:bg-[#5747e8] disabled:opacity-60 text-white rounded-xl px-5 py-2.5 text-sm font-medium mt-4 transition-colors"
                        >
                            {passwordSaved ? <><Check size={14} /> Updated</> : "Update password"}
                        </button>
                    </SettingsSection>

                    {/* Account */}
                    <SettingsSection icon={<Trash2 size={16} className="text-red-500" />} title="Account" danger>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                                <p className="text-sm font-medium text-gray-900">Log out</p>
                                <p className="text-xs text-gray-400">Sign out of your account on this device</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="flex items-center justify-center gap-1.5 border-2 border-gray-200 text-gray-600 rounded-xl px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors shrink-0"
                            >
                                <LogOut size={14} /> Log out
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-gray-100 pt-4 mt-4">
                            <div>
                                <p className="text-sm font-medium text-red-600">Delete account</p>
                                <p className="text-xs text-gray-400">Permanently delete your account and all data</p>
                            </div>
                            <button
                                onClick={() => setDeleteConfirmOpen(true)}
                                className="flex items-center justify-center gap-1.5 border-2 border-red-200 text-red-500 rounded-xl px-4 py-2 text-sm font-medium hover:bg-red-50 transition-colors shrink-0"
                            >
                                <Trash2 size={14} /> Delete
                            </button>
                        </div>
                    </SettingsSection>
                </main>
            </div>

            {deleteConfirmOpen && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-2xl w-full max-w-sm p-6">
                        <p className="font-semibold text-gray-900 mb-2">Delete your account?</p>
                        <p className="text-sm text-gray-500 mb-5">
                            This action is permanent. All your progress, words, and stats will be lost.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteConfirmOpen(false)}
                                className="flex-1 border-2 border-gray-200 text-gray-600 font-medium rounded-xl py-2.5 hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteAccount}
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl py-2.5 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function SettingsSection({ icon, title, children, danger }) {
    return (
        <div className={`border-2 rounded-2xl px-4 sm:px-6 py-6 bg-white mb-5 ${danger ? "border-red-100" : "border-gray-100"}`}>
            <div className="flex items-center gap-2 mb-5">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${danger ? "bg-red-50" : "bg-violet-50"}`}>
                    {icon}
                </div>
                <p className="font-semibold text-gray-900">{title}</p>
            </div>
            {children}
        </div>
    );
}

function StepperRow({ label, hint, value, min, max, onChange }) {
    return (
        <div className="flex items-center justify-between gap-3">
            <div>
                <p className="text-sm font-medium text-gray-900">{label}</p>
                <p className="text-xs text-gray-400">{hint}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
                <button
                    onClick={() => onChange(Math.max(min, value - 1))}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                >
                    <Minus size={14} />
                </button>
                <span className="w-6 text-center font-semibold text-gray-900">{value}</span>
                <button
                    onClick={() => onChange(Math.min(max, value + 1))}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                >
                    <PlusIcon size={14} />
                </button>
            </div>
        </div>
    );
}

function ToggleSwitch({ checked, onChange }) {
    return (
        <button
            onClick={() => onChange(!checked)}
            className={`w-11 h-6 rounded-full relative transition-colors shrink-0 ${checked ? "bg-[#6658f3]" : "bg-gray-200"}`}
        >
            <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                    checked ? "translate-x-5" : "translate-x-0"
                }`}
            />
        </button>
    );
}