import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState, useEffect, useMemo } from "react";
import { categories } from "../data/practice/categories";
import { ReadingLessons } from "../data/practice/ReadingLessons";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useProfile } from "../hooks/useProfile";
import { BookOpen, Star, Clock, Target, ListChecks, ArrowRight, Lock, FileText } from "lucide-react";

const difficultyStyles = {
    easy: "bg-green-50 text-green-600",
    medium: "bg-amber-50 text-amber-600",
    hard: "bg-red-50 text-red-600",
};

const iconColors = [
    "bg-green-100 text-green-600",
    "bg-blue-100 text-blue-600",
    "bg-purple-100 text-purple-600",
    "bg-red-100 text-red-600",
    "bg-amber-100 text-amber-600",
];

const XP_PER_QUESTION = 5;
function getLessonXp(lesson) {
    return lesson.questions.length * XP_PER_QUESTION;
}

// сколько уроков открыто "бесплатно" с самого начала, до всякого прогресса
const FREE_UNLOCKED_COUNT = 3;

export default function PracticePage() {
    const profile = useProfile();
    const [activeItem, setActiveItem] = useState('All');
    const [articlesToday, setArticlesToday] = useState(0);
    const [completedLessonIds, setCompletedLessonIds] = useState(new Set());
    const [loadingProgress, setLoadingProgress] = useState(true);

    useEffect(() => {
        if (profile) {
            fetchDailyProgress();
            fetchReadingProgress();
        }
    }, [profile?.id]);

    async function fetchDailyProgress() {
        const today = new Date().toISOString().slice(0, 10);
        const { data } = await supabase
            .from("daily_activity")
            .select("articles_completed")
            .eq("user_id", profile.id)
            .eq("activity_date", today)
            .maybeSingle();

        setArticlesToday(data?.articles_completed ?? 0);
    }

    async function fetchReadingProgress() {
        setLoadingProgress(true);
        const { data, error } = await supabase
            .from("reading_progress")
            .select("lesson_id")
            .eq("user_id", profile.id)
            .eq("completed", true);

        if (error) {
            console.error("fetchReadingProgress error:", error);
        } else {
            // lesson_id в базе хранится как text, а lesson.id у тебя число — приводим к одному виду
            setCompletedLessonIds(new Set((data ?? []).map((row) => Number(row.lesson_id))));
        }
        setLoadingProgress(false);
    }

    const dailyGoal = profile?.daily_article_goal ?? 2;
    const goalDone = articlesToday >= dailyGoal;
    const goalPercent = Math.min(100, Math.round((articlesToday / dailyGoal) * 100));

    // последовательный разлок: урок открыт, если он в первых FREE_UNLOCKED_COUNT,
    // ИЛИ предыдущий по порядку урок уже пройден
    const unlockedLessonIds = useMemo(() => {
        const unlocked = new Set();
        ReadingLessons.forEach((lesson, index) => {
            if (index < FREE_UNLOCKED_COUNT) {
                unlocked.add(lesson.id);
                return;
            }
            const previousLesson = ReadingLessons[index - 1];
            if (previousLesson && completedLessonIds.has(previousLesson.id)) {
                unlocked.add(lesson.id);
            }
        });
        return unlocked;
    }, [completedLessonIds]);

    const totalMaxXp = useMemo(
        () => ReadingLessons.reduce((sum, l) => sum + getLessonXp(l), 0),
        []
    );

    const filtredLesson = activeItem === 'All'
        ? ReadingLessons
        : ReadingLessons.filter(lesson => lesson.category === activeItem);

    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />

            <div className="lg:pl-64">
                <Header />

                <div className="max-w-full mx-auto px-4 sm:px-8 py-6 sm:py-8">

                    <p className="text-3xl sm:text-5xl font-bold text-gray-900">Practice</p>
                    <p className="text-gray-500 pt-1">Improve your reading skills with short, engaging texts.</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">

                        <div className="col-span-2 sm:col-span-3 lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                                    <Target className="w-5 h-5 text-[#6658f3]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Today's goal</p>
                                    <p className="font-semibold text-gray-900">
                                        Read {dailyGoal} article{dailyGoal > 1 ? "s" : ""}
                                    </p>
                                </div>
                                {goalDone && (
                                    <span className="ml-auto text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                        Done 🎉
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-3 mt-4">
                                <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all ${goalDone ? "bg-green-500" : "bg-[#6658f3]"}`}
                                        style={{ width: `${goalPercent}%` }}
                                    />
                                </div>
                                <p className="text-sm text-gray-400 whitespace-nowrap">{articlesToday} / {dailyGoal}</p>
                            </div>
                        </div>

                        <StatCard icon={<BookOpen className="w-5 h-5 text-indigo-500" />} bg="bg-indigo-50" value={ReadingLessons.length} label="Articles" />
                        <StatCard icon={<Star className="w-5 h-5 text-amber-500" />} bg="bg-amber-50" value={totalMaxXp} label="Max XP" />
                        <StatCard icon={<Clock className="w-5 h-5 text-emerald-500" />} bg="bg-emerald-50" value="95 min" label="Total time" />
                    </div>

                    <p className="text-xl text-start font-semibold text-gray-900 pt-10 pb-4">Choose a topic</p>

                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <PracticeCategoryItem
                                key={category.id}
                                text={category.text}
                                active={activeItem === category.id}
                                onClick={() => setActiveItem(category.id)}
                            />
                        ))}
                    </div>

                    <p className="text-xl text-start font-semibold text-gray-900 pt-6 pb-4">Reading exercises</p>

                    <div className="flex flex-col gap-3">
                        {filtredLesson.map((lesson, index) => (
                            <ReadingExercise
                                key={lesson.id}
                                lesson={lesson}
                                index={index}
                                locked={!loadingProgress && !unlockedLessonIds.has(lesson.id)}
                                completed={completedLessonIds.has(lesson.id)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

function StatCard({ icon, bg, value, label }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center justify-center text-center">
            <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center mb-2`}>
                {icon}
            </div>
            <p className="text-xl font-bold text-gray-900">{value}</p>
            <p className="text-xs text-gray-400">{label}</p>
        </div>
    )
}

function PracticeCategoryItem({ active, onClick, text }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center font-medium text-base sm:text-xl rounded-xl cursor-pointer px-4 py-2.5 transition-colors
                ${active
                    ? "bg-[#f8f7fc] text-[#6658f3]"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
        >
            {text}
        </button>
    )
}

function ReadingExercise({ lesson, index, locked, completed }) {
    const navigate = useNavigate();

    const duration = Math.ceil(lesson.text.split(" ").length / 40) + Math.round(lesson.questions.length / 3);
    const iconStyle = iconColors[index % iconColors.length];
    const difficultyStyle = difficultyStyles[lesson.difficulty] ?? difficultyStyles.easy;
    const xp = getLessonXp(lesson);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

            <div className="flex items-center gap-4 min-w-0">
                <div className={`w-11 h-11 rounded-full ${iconStyle} flex items-center justify-center shrink-0`}>
                    <FileText className="w-5 h-5" />
                </div>

                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 truncate">{lesson.title}</p>
                        {completed && (
                            <span className="shrink-0 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                Done
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-3 mt-1.5 text-sm text-gray-400 flex-wrap">
                        <span className={`px-2 py-0.5 rounded-md text-xs font-medium capitalize ${difficultyStyle}`}>
                            {lesson.difficulty}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> {duration} min
                        </span>
                        <span className="hidden sm:flex items-center gap-1">
                            <ListChecks className="w-3.5 h-3.5" /> {lesson.questions.length} questions
                        </span>
                    </div>
                </div>
            </div>

            {locked ? (
                <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-50 rounded-xl px-4 py-2.5 shrink-0 self-start sm:self-auto">
                    <Lock className="w-4 h-4 shrink-0" />
                    <span className="sm:hidden">Locked</span>
                    <span className="hidden sm:inline whitespace-nowrap">
                        Complete previous article to unlock
                    </span>
                </div>
            ) : (
                <div className="flex items-center gap-4 shrink-0 self-stretch sm:self-auto">
                    <p className="hidden sm:block text-sm font-semibold text-[#6658f3]">+ {xp} XP</p>
                    <button
                        onClick={() => navigate(`/practice/${lesson.id}`)}
                        className="flex items-center justify-center gap-1.5 bg-[#6658f3] hover:bg-[#5747e8] text-white text-sm font-medium rounded-xl px-4 py-2.5 transition-colors w-full sm:w-auto"
                    >
                        {completed ? "Practice again" : "Start"} <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    )
}