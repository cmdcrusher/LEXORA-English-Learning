import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useProfile } from "../hooks/useProfile";
import { allLessons } from "../data/allLessons";
import {
    Target, BookOpen, Layers, Flame, Sparkles, Coins,
    ArrowRight, CheckCircle2, Check
} from "lucide-react";
import JoinClassCard from "../components/JoinClassCard";

const QUOTES = [
    { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
    { text: "Learning another language is not only learning different words for the same things, but learning another way to think about things.", author: "Flora Lewis" },
    { text: "One language sets you in a corridor for life. Two languages open every door along the way.", author: "Frank Smith" },
];

function getLevelInfo(xp = 0) {
    const XP_PER_LEVEL = 200;
    const level = Math.floor(xp / XP_PER_LEVEL) + 1;
    const xpIntoLevel = xp % XP_PER_LEVEL;
    const percent = Math.round((xpIntoLevel / XP_PER_LEVEL) * 100);
    return { level, xpIntoLevel, xpForNext: XP_PER_LEVEL, percent };
}

export default function DashboardPage() {
    const profile = useProfile();
    const navigate = useNavigate();

    const [progressMap, setProgressMap] = useState(new Map());
    const [dailyProgress, setDailyProgress] = useState({ lessons: 0, wordsMastered: 0 });
    const [wordsStats, setWordsStats] = useState({ total: 0, mastered: 0, dueReview: 0 });
    const [loading, setLoading] = useState(true);

    const quote = useMemo(() => QUOTES[Math.floor(Math.random() * QUOTES.length)], []);

    useEffect(() => {
        async function fetchData() {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) { setLoading(false); return; }

            const [{ data: progressData }, { data: dailyData }, { data: wordsData }] = await Promise.all([
                supabase.from("lesson_progress").select("lesson_id, completed, best_score, total_questions").eq("user_id", user.id),
                supabase.from("daily_activity").select("lessons_completed, words_mastered").eq("user_id", user.id).eq("activity_date", new Date().toISOString().slice(0, 10)).maybeSingle(),
                supabase.from("vocabulary_words").select("status").eq("user_id", user.id),
            ]);

            if (progressData) {
                setProgressMap(new Map(progressData.map((row) => [row.lesson_id, row])));
            }
            setDailyProgress({
                lessons: dailyData?.lessons_completed ?? 0,
                wordsMastered: dailyData?.words_mastered ?? 0,
            });

            if (wordsData) {
                setWordsStats({
                    total: wordsData.length,
                    mastered: wordsData.filter((w) => w.status === "mastered").length,
                    dueReview: wordsData.filter((w) => w.status !== "mastered").length,
                });
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    const isUnlocked = (lessonId) =>
        lessonId === 1 || progressMap.get(lessonId - 1)?.completed;

    // ближайший непройденный урок по категории
    function findNextLesson(category) {
        return allLessons.find(
            (l) => l.category === category && isUnlocked(l.id) && !progressMap.get(l.id)?.completed
        );
    }

    const nextGrammar = findNextLesson("Grammar");
    const nextVocabLesson = findNextLesson("Vocabulary");

    const lessonsCompleted = [...progressMap.values()].filter((p) => p.completed).length;
    const overallPercent = allLessons.length
        ? Math.round((lessonsCompleted / allLessons.length) * 100)
        : 0;

    const { level, xpIntoLevel, xpForNext, percent: levelPercent } = getLevelInfo(profile?.xp);

    function goToGrammar() {
        if (nextGrammar) navigate(`/lesson/${nextGrammar.id}`);
        else navigate("/lessons");
    }

    function goToVocabulary() {
        // ведём на страницу словаря и сразу открываем тренировку слов
        navigate("/vocabulary", { state: { autoReview: true } });
    }

    if (loading || !profile) {
        return (
            <div className="flex min-h-screen bg-[#fafafc]">
                <Sidebar />
                <div className="pl-64 w-full flex items-center justify-center">
                    <p className="text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    const dailyGoal = {
        lessonDone: dailyProgress.lessons >= (profile.daily_lesson_goal ?? 1),
        wordsDone: dailyProgress.wordsMastered >= (profile.daily_word_goal ?? 3),
    };
    const dailyGoalCompleted = dailyGoal.lessonDone && dailyGoal.wordsDone;

    return (
        <div className="flex min-h-screen bg-[#fafafc]">
            <Sidebar />

            <div className="lg:pl-64 w-full">
                <Header />

                <main className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-10 py-6 lg:py-8 w-full">
                    {/* Left column */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-6">
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Good morning, {profile.username}! 👋
                            </p>
                            <p className="text-gray-500 mt-1">Let's continue your learning journey.</p>
                        </div>

                        {/* Daily goal */}
                        <div className="flex items-center justify-between border-2 border-gray-100 rounded-2xl px-5 sm:px-7 py-6 bg-white">
                            <div className="w-full">
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="font-bold text-lg text-gray-900">Daily goal</p>
                                    {dailyGoalCompleted && (
                                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                            Completed 🎉
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-500 text-sm mb-5">
                                    Finish a lesson and master {profile.daily_word_goal ?? 3} words
                                </p>

                                <div className="flex flex-col gap-3">
                                    <GoalRow
                                        label={`Complete ${profile.daily_lesson_goal ?? 1} lesson`}
                                        done={dailyGoal.lessonDone}
                                        current={Math.min(dailyProgress.lessons, 1)}
                                        total={profile.daily_lesson_goal ?? 1}
                                    />
                                    <GoalRow
                                        label={`Master ${profile.daily_word_goal ?? 3} words`}
                                        done={dailyGoal.wordsDone}
                                        current={Math.min(dailyProgress.wordsMastered, 3)}
                                        total={profile.daily_word_goal ?? 3}
                                    />
                                </div>
                            </div>

                            <div className="hidden sm:flex w-24 h-24 rounded-full bg-violet-50 items-center justify-center shrink-0 ml-6">
                                <Target size={40} className="text-[#6658f3]" />
                            </div>
                        </div>

                        {/* Level & rewards */}
                        <div className="border-2 border-gray-100 rounded-2xl px-7 py-6 bg-white">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center">
                                        <Sparkles size={16} className="text-[#6658f3]" />
                                    </div>
                                    <p className="font-bold text-lg text-gray-900">Level {level}</p>
                                </div>

                                <button
                                    onClick={() => navigate("/shop")}
                                    className="flex items-center gap-1.5 text-sm font-medium text-[#6658f3] hover:text-[#5747e8] transition-colors"
                                >
                                    <Coins size={15} /> {profile.coins ?? 0} · Go to Shop
                                </button>
                            </div>

                            <div className="h-2.5 bg-gray-100 rounded-full w-full overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-[#6658f3] to-[#9b8cf9] h-full rounded-full transition-all"
                                    style={{ width: `${levelPercent}%` }}
                                />
                            </div>
                            <p className="text-xs text-gray-400 mt-1.5">
                                {xpIntoLevel}/{xpForNext} XP to level {level + 1}
                            </p>
                        </div>

                        {/* Today's tasks */}
                        <div>
                            <h2 className="font-bold text-lg text-gray-900 mb-3">Today's tasks</h2>

                            <div className="flex flex-col gap-3">
                                <TaskItem
                                    icon={<BookOpen size={20} className="text-green-600" />}
                                    iconBg="bg-green-100"
                                    title="Grammar"
                                    description={nextGrammar ? nextGrammar.title : "All grammar lessons completed"}
                                    done={!nextGrammar}
                                    onStart={goToGrammar}
                                />
                                <TaskItem
                                    icon={<Layers size={20} className="text-amber-600" />}
                                    iconBg="bg-amber-100"
                                    title="Vocabulary"
                                    description={
                                        wordsStats.dueReview > 0
                                            ? `${wordsStats.dueReview} words to review`
                                            : "No words due — add new ones"
                                    }
                                    done={wordsStats.dueReview === 0 && wordsStats.total > 0}
                                    onStart={goToVocabulary}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        <div className="border-2 border-gray-100 rounded-2xl px-6 py-6 bg-white">
                            <p className="font-bold text-gray-900 mb-4">Your progress</p>

                            <div className="flex flex-col items-center py-2">
                                <CircleStat percent={overallPercent} />
                                <p className="text-sm text-gray-400 mt-3">Overall progress</p>
                            </div>

                            <div className="flex flex-col gap-4 mt-5">
                                <ProgressPart
                                    icon={<CheckCircle2 size={16} className="text-green-600" />}
                                    iconBg="bg-green-100"
                                    title="Lessons completed"
                                    currentValue={lessonsCompleted}
                                    total={allLessons.length}
                                />
                                <ProgressPart
                                    icon={<Layers size={16} className="text-amber-600" />}
                                    iconBg="bg-amber-100"
                                    title="Words learned"
                                    currentValue={wordsStats.mastered}
                                    total={wordsStats.total}
                                />
                                <ProgressPart
                                    icon={<Flame size={16} className="text-red-500" />}
                                    iconBg="bg-red-100"
                                    title="Current streak"
                                    currentValue={profile.streak ?? 0}
                                    suffix="days"
                                />
                            </div>
                        </div>

                        <div className="h-auto border-2 border-gray-100 rounded-2xl px-6 py-5 bg-violet-50/50">
                            <p className="text-sm text-gray-500 mb-3">"{quote.text}"</p>
                            <p className="text-sm font-semibold text-gray-700">— {quote.author}</p>
                        </div>

                        {profile.role === "student" && <JoinClassCard />}
                    </div>
                </main>
            </div>
        </div>
    );
}

function TaskItem({ icon, iconBg, title, description, onStart, done }) {
    return (
        <div className="flex items-center justify-between border-2 border-gray-100 rounded-xl px-6 py-5 bg-white hover:border-[#6658f3]/30 transition-colors">
            <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
                    {icon}
                </div>
                <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>

            <button
                onClick={onStart}
                className={`flex items-center gap-1.5 rounded-xl px-6 py-2.5 text-sm font-medium transition-colors ${
                    done
                        ? "bg-green-50 text-green-600"
                        : "bg-[#6658f3] text-white hover:bg-[#786cf1]"
                }`}
            >
                {done ? "Done" : "Start"}
                {!done && <ArrowRight size={14} />}
            </button>
        </div>
    );
}

function ProgressPart({ icon, iconBg, title, currentValue, total, suffix }) {
    return (
        <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
                {icon}
            </div>
            <div>
                <p className="text-sm font-bold text-gray-900">
                    {currentValue}{total !== undefined ? `/${total}` : ""} {suffix}
                </p>
                <p className="text-xs text-gray-400">{title}</p>
            </div>
        </div>
    );
}

function CircleStat({ percent }) {
    const radius = 52;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className="relative w-32 h-32">
            <svg viewBox="0 0 120 120" className="w-32 h-32 -rotate-90">
                <circle cx="60" cy="60" r={radius} fill="none" stroke="#f1f1f4" strokeWidth="10" />
                <circle
                    cx="60" cy="60" r={radius} fill="none"
                    stroke="#6658f3" strokeWidth="10" strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="transition-all duration-500"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">{percent}%</span>
            </div>
        </div>
    );
}

function GoalRow({ label, done, current, total }) {
    return (
        <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                done ? "bg-green-500" : "bg-gray-100"
            }`}>
                {done && <Check size={12} className="text-white" />}
            </div>

            <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm ${done ? "text-gray-900 font-medium" : "text-gray-500"}`}>
                        {label}
                    </span>
                    <span className="text-xs text-gray-400">{current}/{total}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all ${done ? "bg-green-500" : "bg-[#6658f3]"}`}
                        style={{ width: `${(current / total) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
}