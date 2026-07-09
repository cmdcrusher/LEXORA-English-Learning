import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState, useEffect, useMemo } from "react";
import { supabase } from "../lib/supabase";
import {
    BookOpen, Star, Clock, AlertCircle, Search, Volume2,
    MoreVertical, Plus, ChevronLeft, ChevronRight, X, Pencil,
    Trash2, RotateCcw, Check, XIcon
} from "lucide-react";
import { useLocation } from "react-router-dom";

const STATUS_STYLES = {
    mastered: { label: "Mastered", bg: "bg-green-100", text: "text-green-700" },
    in_progress: { label: "In Progress", bg: "bg-amber-100", text: "text-amber-700" },
    need_review: { label: "Need Review", bg: "bg-red-100", text: "text-red-700" },
};

const TABS = [
    { key: "all", label: "All Words" },
    { key: "in_progress", label: "In Progress" },
    { key: "mastered", label: "Mastered" },
    { key: "need_review", label: "Need Review" },
];

const WORDS_PER_PAGE = 10;

export default function VocabularyPage() {
    const location = useLocation();

    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("all");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [openMenuId, setOpenMenuId] = useState(null);

    const [form, setForm] = useState({ word: "", meaning: "", example: "", part_of_speech: "" });
    const [submitting, setSubmitting] = useState(false);

    const [editingWord, setEditingWord] = useState(null);
    const [reviewOpen, setReviewOpen] = useState(false);

    useEffect(() => {
        fetchWords();
    }, []);

    async function fetchWords() {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) { setLoading(false); return; }

        const { data, error } = await supabase
            .from("vocabulary_words")
            .select("*")
            .eq("user_id", user.id)
            .order("created_at", { ascending: false });

        if (!error && data) setWords(data);
        setLoading(false);
    }

    async function handleAddWord(e) {
        e.preventDefault();
        if (!form.word.trim() || !form.meaning.trim()) return;

        setSubmitting(true);
        const { data: { user } } = await supabase.auth.getUser();

        const { data, error } = await supabase
            .from("vocabulary_words")
            .insert({
                user_id: user.id,
                word: form.word.trim(),
                meaning: form.meaning.trim(),
                example: form.example.trim() || null,
                part_of_speech: form.part_of_speech || null,
            })
            .select()
            .single();

        if (!error && data) {
            setWords((prev) => [data, ...prev]);
            setForm({ word: "", meaning: "", example: "", part_of_speech: "" });
        }
        setSubmitting(false);
    }

    async function handleEditSave(updated) {
        const { error } = await supabase
            .from("vocabulary_words")
            .update({
                word: updated.word,
                meaning: updated.meaning,
                example: updated.example || null,
                part_of_speech: updated.part_of_speech || null,
            })
            .eq("id", updated.id);

        if (!error) {
            setWords((prev) => prev.map((w) => (w.id === updated.id ? { ...w, ...updated } : w)));
            setEditingWord(null);
        }
    }

    async function deleteWord(id) {
        setOpenMenuId(null);
        const { error } = await supabase.from("vocabulary_words").delete().eq("id", id);
        if (!error) setWords((prev) => prev.filter((w) => w.id !== id));
    }

    async function resetProgress(id) {
        setOpenMenuId(null);
        const { error } = await supabase
            .from("vocabulary_words")
            .update({ status: "in_progress", correct_streak: 0, times_reviewed: 0 })
            .eq("id", id);

        if (!error) {
            setWords((prev) =>
                prev.map((w) => (w.id === id ? { ...w, status: "in_progress", correct_streak: 0, times_reviewed: 0 } : w))
            );
        }
    }

    function speak(word) {
        if (!("speechSynthesis" in window)) return;
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = "en-US";
        window.speechSynthesis.speak(utterance);
    }

    const stats = useMemo(() => {
        const total = words.length;
        const mastered = words.filter((w) => w.status === "mastered").length;
        const inProgress = words.filter((w) => w.status === "in_progress").length;
        const needReview = words.filter((w) => w.status === "need_review").length;
        return { total, mastered, inProgress, needReview };
    }, [words]);

    const filteredWords = useMemo(() => {
        let result = words;
        if (activeTab !== "all") result = result.filter((w) => w.status === activeTab);
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (w) => w.word.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q)
            );
        }
        return result;
    }, [words, activeTab, search]);

    const totalPages = Math.max(1, Math.ceil(filteredWords.length / WORDS_PER_PAGE));
    const paginatedWords = filteredWords.slice(
        (page - 1) * WORDS_PER_PAGE,
        page * WORDS_PER_PAGE
    );

    function formatDate(dateStr) {
        const diffMs = Date.now() - new Date(dateStr).getTime();
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        if (days === 0) return "Today";
        if (days === 1) return "1 day ago";
        if (days < 7) return `${days} days ago`;
        const weeks = Math.floor(days / 7);
        return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
    }

    // слова для тренировки: всё, что ещё не Mastered
    const wordsToReview = words.filter((w) => w.status !== "mastered");

    useEffect(() => {
        if (location.state?.autoReview && wordsToReview.length > 0) {
            setReviewOpen(true);
        }
    }, [location.state, wordsToReview.length]);

    return (
        <div className="bg-[#fafafc] min-h-screen">
            <Sidebar />

            <div className="lg:pl-64">
                <Header />

                <main className="px-4 sm:px-6 lg:px-8 py-6 w-full">
                    <p className="text-3xl sm:text-5xl font-bold text-gray-900">Vocabulary</p>
                    <p className="text-gray-500 pt-1 pb-6">
                        Add new words, learn their meanings and track your progress.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                        <StatCard
                            icon={<BookOpen size={20} className="text-[#6658f3]" />}
                            iconBg="bg-violet-100"
                            label="All Words"
                            value={stats.total}
                            sub={<span className="text-green-500">{stats.mastered} mastered</span>}
                        />
                        <StatCard
                            icon={<Star size={20} className="text-amber-500" />}
                            iconBg="bg-amber-100"
                            label="Mastered"
                            value={stats.mastered}
                            sub={`${stats.total ? Math.round((stats.mastered / stats.total) * 100) : 0}% of total`}
                        />
                        <StatCard
                            icon={<Clock size={20} className="text-green-600" />}
                            iconBg="bg-green-100"
                            label="In Progress"
                            value={stats.inProgress}
                            sub={`${stats.total ? Math.round((stats.inProgress / stats.total) * 100) : 0}% of total`}
                        />
                        <StatCard
                            icon={<AlertCircle size={20} className="text-red-500" />}
                            iconBg="bg-red-100"
                            label="Need Review"
                            value={stats.needReview}
                            sub={`${stats.total ? Math.round((stats.needReview / stats.total) * 100) : 0}% of total`}
                        />
                    </div>

                    {/* Add word form */}
                    <div className="bg-violet-50/60 border border-violet-100 rounded-2xl p-4 sm:p-5 mb-6">
                        <p className="font-semibold text-[#4b3fc2] pb-1">Add a new word</p>
                        <p className="text-sm text-gray-500 pb-4">
                            Expand your vocabulary by adding new words you want to learn.
                        </p>

                        <form onSubmit={handleAddWord} className="grid grid-cols-1 md:grid-cols-5 gap-3">
                            <input
                                value={form.word}
                                onChange={(e) => setForm({ ...form, word: e.target.value })}
                                placeholder="Enter a word"
                                className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#6658f3] bg-white"
                            />
                            <input
                                value={form.meaning}
                                onChange={(e) => setForm({ ...form, meaning: e.target.value })}
                                placeholder="Enter the meaning"
                                className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#6658f3] bg-white"
                            />
                            <input
                                value={form.example}
                                onChange={(e) => setForm({ ...form, example: e.target.value })}
                                placeholder="Example (optional)"
                                className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#6658f3] bg-white"
                            />
                            <select
                                value={form.part_of_speech}
                                onChange={(e) => setForm({ ...form, part_of_speech: e.target.value })}
                                className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#6658f3] bg-white text-gray-500"
                            >
                                <option value="">Part of speech</option>
                                <option value="noun">Noun</option>
                                <option value="verb">Verb</option>
                                <option value="adjective">Adjective</option>
                                <option value="adverb">Adverb</option>
                            </select>
                            <button
                                type="submit"
                                disabled={submitting}
                                className="flex items-center justify-center gap-1.5 bg-[#6658f3] hover:bg-[#5747e8] disabled:opacity-60 text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
                            >
                                Add Word <Plus size={16} />
                            </button>
                        </form>
                    </div>

                    {/* Tabs + search + review button */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                        <div className="flex gap-1 overflow-x-auto">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => { setActiveTab(tab.key); setPage(1); }}
                                    className={`shrink-0 px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
                                        activeTab === tab.key
                                            ? "text-[#6658f3] border-[#6658f3]"
                                            : "text-gray-400 border-transparent hover:text-gray-600"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <div className="relative">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    value={search}
                                    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                                    placeholder="Search words..."
                                    className="pl-9 pr-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#6658f3] w-full sm:w-64"
                                />
                            </div>

                            <button
                                onClick={() => setReviewOpen(true)}
                                disabled={wordsToReview.length === 0}
                                className="flex items-center justify-center gap-1.5 bg-[#6658f3] hover:bg-[#5747e8] disabled:opacity-40 text-white rounded-xl px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                            >
                                Review Words <RotateCcw size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Table — на мобиле скроллится по горизонтали, а не ломает вёрстку */}
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-x-auto">
                        {loading ? (
                            <p className="text-gray-400 text-center py-10">Loading...</p>
                        ) : paginatedWords.length === 0 ? (
                            <p className="text-gray-400 text-center py-10">No words found.</p>
                        ) : (
                            <table className="w-full text-sm min-w-[720px]">
                                <thead>
                                    <tr className="border-b border-gray-100 text-left text-gray-400">
                                        <th className="py-3 px-4 font-medium">Word</th>
                                        <th className="py-3 px-4 font-medium">Meaning</th>
                                        <th className="py-3 px-4 font-medium">Example</th>
                                        <th className="py-3 px-4 font-medium">Added</th>
                                        <th className="py-3 px-4 font-medium">Status</th>
                                        <th className="py-3 px-4 font-medium"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedWords.map((w) => {
                                        const style = STATUS_STYLES[w.status];
                                        return (
                                            <tr key={w.id} className="border-b border-gray-50 last:border-0">
                                                <td className="py-3 px-4">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => speak(w.word)}
                                                            className="w-8 h-8 rounded-full bg-violet-50 flex items-center justify-center text-[#6658f3] hover:bg-violet-100 transition-colors shrink-0"
                                                        >
                                                            <Volume2 size={14} />
                                                        </button>
                                                        <div>
                                                            <p className="font-semibold text-gray-900">{w.word}</p>
                                                            {w.part_of_speech && (
                                                                <p className="text-xs text-gray-400">{w.part_of_speech}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4 text-gray-600 max-w-xs">{w.meaning}</td>
                                                <td className="py-3 px-4 text-gray-500 max-w-xs">{w.example || "—"}</td>
                                                <td className="py-3 px-4 text-gray-400">{formatDate(w.created_at)}</td>
                                                <td className="py-3 px-4">
                                                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${style.bg} ${style.text}`}>
                                                        {style.label}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 relative">
                                                    <button
                                                        onClick={() => setOpenMenuId(openMenuId === w.id ? null : w.id)}
                                                        className="text-gray-400 hover:text-gray-600"
                                                    >
                                                        <MoreVertical size={16} />
                                                    </button>

                                                    {openMenuId === w.id && (
                                                        <div className="absolute right-4 top-10 z-10 bg-white border border-gray-100 rounded-xl shadow-lg py-1 w-40">
                                                            <button
                                                                onClick={() => { setEditingWord(w); setOpenMenuId(null); }}
                                                                className="w-full flex items-center gap-2 text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700"
                                                            >
                                                                <Pencil size={14} /> Edit
                                                            </button>
                                                            <button
                                                                onClick={() => resetProgress(w.id)}
                                                                className="w-full flex items-center gap-2 text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700"
                                                            >
                                                                <RotateCcw size={14} /> Reset progress
                                                            </button>
                                                            <button
                                                                onClick={() => deleteWord(w.id)}
                                                                className="w-full flex items-center gap-2 text-left px-4 py-2 text-sm hover:bg-red-50 text-red-500"
                                                            >
                                                                <Trash2 size={14} /> Delete
                                                            </button>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Pagination */}
                    {filteredWords.length > 0 && (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
                            <p className="text-sm text-gray-400">
                                {filteredWords.length} words total
                            </p>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 disabled:opacity-40 hover:bg-gray-50"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1)
                                    .slice(0, 5)
                                    .map((p) => (
                                        <button
                                            key={p}
                                            onClick={() => setPage(p)}
                                            className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                                                page === p
                                                    ? "bg-[#6658f3] text-white"
                                                    : "text-gray-500 hover:bg-gray-50 border border-gray-200"
                                            }`}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                <button
                                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                    disabled={page === totalPages}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 disabled:opacity-40 hover:bg-gray-50"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    )}
                </main>
            </div>

            {editingWord && (
                <EditWordModal
                    word={editingWord}
                    onClose={() => setEditingWord(null)}
                    onSave={handleEditSave}
                />
            )}

            {reviewOpen && (
                <ReviewModal
                    words={wordsToReview}
                    onClose={() => setReviewOpen(false)}
                    onWordUpdated={(id, status, streak) => {
                        setWords((prev) =>
                            prev.map((w) => (w.id === id ? { ...w, status, correct_streak: streak } : w))
                        );
                    }}
                />
            )}
        </div>
    );
}

function StatCard({ icon, iconBg, label, value, sub }) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 px-4 sm:px-5 py-4 flex items-center gap-3">
            <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
                {icon}
            </div>
            <div className="min-w-0">
                <p className="text-sm text-gray-400">{label}</p>
                <p className="text-xl font-bold text-gray-900">{value}</p>
                {sub && <p className="text-xs text-gray-400 truncate">{sub}</p>}
            </div>
        </div>
    );
}

function EditWordModal({ word, onClose, onSave }) {
    const [form, setForm] = useState({ ...word });

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="font-semibold text-gray-900">Edit word</p>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={18} />
                    </button>
                </div>

                <div className="flex flex-col gap-3">
                    <input
                        value={form.word}
                        onChange={(e) => setForm({ ...form, word: e.target.value })}
                        className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#6658f3]"
                        placeholder="Word"
                    />
                    <input
                        value={form.meaning}
                        onChange={(e) => setForm({ ...form, meaning: e.target.value })}
                        className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#6658f3]"
                        placeholder="Meaning"
                    />
                    <input
                        value={form.example || ""}
                        onChange={(e) => setForm({ ...form, example: e.target.value })}
                        className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#6658f3]"
                        placeholder="Example"
                    />
                    <select
                        value={form.part_of_speech || ""}
                        onChange={(e) => setForm({ ...form, part_of_speech: e.target.value })}
                        className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#6658f3] text-gray-600"
                    >
                        <option value="">Part of speech</option>
                        <option value="noun">Noun</option>
                        <option value="verb">Verb</option>
                        <option value="adjective">Adjective</option>
                        <option value="adverb">Adverb</option>
                    </select>
                </div>

                <div className="flex gap-3 mt-5">
                    <button
                        onClick={onClose}
                        className="flex-1 border-2 border-gray-200 text-gray-600 font-medium rounded-xl py-2.5 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(form)}
                        className="flex-1 bg-[#6658f3] hover:bg-[#5747e8] text-white font-medium rounded-xl py-2.5 transition-colors"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

function ReviewModal({ words, onClose, onWordUpdated }) {
    const [index, setIndex] = useState(0);
    const [revealed, setRevealed] = useState(false);
    const [sessionDone, setSessionDone] = useState(false);

    const current = words[index];

    async function handleAnswer(correct) {
        const { data, error } = await supabase.rpc('review_word', {
            p_word_id: current.id,
            p_correct: correct,
        });

        if (!error && data) {
            const result = data[0];
            onWordUpdated(current.id, result.new_status, result.new_streak);
        }

        setRevealed(false);
        if (index < words.length - 1) {
            setIndex((i) => i + 1);
        } else {
            setSessionDone(true);
        }
    }

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 min-h-[320px] flex flex-col">
                <div className="flex items-center justify-between b-6">
                    <p className="font-semibold text-gray-900">
                        {sessionDone ? "Review complete" : `Word ${index + 1} of ${words.length}`}
                    </p>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={18} />
                    </button>
                </div>

                {sessionDone ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <p className="text-2xl font-bold text-gray-900 pb-2">Nice work! 🎉</p>
                        <p className="text-gray-500 pb-6">You've reviewed all due words.</p>
                        <button
                            onClick={onClose}
                            className="bg-[#6658f3] hover:bg-[#5747e8] text-white font-medium rounded-xl px-6 py-2.5 transition-colors"
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <div
                        onClick={() => setRevealed(true)}
                        className="flex-1 flex flex-col items-center justify-center text-center cursor-pointer"
                    >
                        <p className="text-3xl font-bold text-gray-900 pb-3">{current.word}</p>
                        {revealed ? (
                            <>
                                <p className="text-gray-600 pb-1">{current.meaning}</p>
                                {current.example && (
                                    <p className="text-sm text-gray-400 italic">"{current.example}"</p>
                                )}
                            </>
                        ) : (
                            <p className="text-sm text-gray-400">Tap to reveal meaning</p>
                        )}
                    </div>
                )}

                {!sessionDone && revealed && (
                    <div className="flex gap-3 mt-6">
                        <button
                            onClick={() => handleAnswer(false)}
                            className="flex-1 flex items-center justify-center gap-1.5 border-2 border-red-200 text-red-500 font-medium rounded-xl py-2.5 hover:bg-red-50 transition-colors"
                        >
                            <XIcon size={16} /> Didn't know
                        </button>
                        <button
                            onClick={() => handleAnswer(true)}
                            className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl py-2.5 transition-colors"
                        >
                            <Check size={16} /> Knew it
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}