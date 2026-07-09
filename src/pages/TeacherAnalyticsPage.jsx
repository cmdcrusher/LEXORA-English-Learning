import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState, useEffect, useMemo } from "react";
import { supabase } from "../lib/supabase";
import { useProfile } from "../hooks/useProfile";
import { allLessons as LESSONS } from "../data/allLessons";
import { AlertTriangle, TrendingUp, Users } from "lucide-react";

export default function TeacherAnalyticsPage() {
    const profile = useProfile();
    const [classes, setClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState(null);
    const [weakTopics, setWeakTopics] = useState([]);
    const [studentStats, setStudentStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingAnalytics, setLoadingAnalytics] = useState(false);

    useEffect(() => {
        if (profile) fetchClasses();
    }, [profile?.id]);

    useEffect(() => {
        if (selectedClassId) fetchAnalytics(selectedClassId);
    }, [selectedClassId]);

    async function fetchClasses() {
        setLoading(true);
        const { data } = await supabase
            .from("classes")
            .select("id, name")
            .eq("teacher_id", profile.id)
            .order("created_at");

        setClasses(data ?? []);
        if (data?.length) setSelectedClassId(data[0].id);
        setLoading(false);
    }

    async function fetchAnalytics(classId) {
        setLoadingAnalytics(true);

        const [{ data: topics }, { data: progress }] = await Promise.all([
            supabase.rpc("get_class_weak_topics", { p_class_id: classId }),
            supabase
                .from("assignment_progress")
                .select(`
                    student_id,
                    status,
                    score,
                    profiles ( username, avatar_url ),
                    assignments!inner ( class_id )
                `)
                .eq("assignments.class_id", classId),
        ]);

        setWeakTopics(topics ?? []);
        setStudentStats(aggregateByStudent(progress ?? []));
        setLoadingAnalytics(false);
    }

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

                <main className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8 max-w-6xl mx-auto">
                    <div className="mb-6">
                        <p className="text-2xl sm:text-3xl font-bold text-gray-900">Analytics</p>
                        <p className="text-gray-500 pt-1">Где класс ошибается чаще всего, и кто как справляется</p>
                    </div>

                    {classes.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <>
                            <div className="flex gap-1 mb-8 overflow-x-auto">
                                {classes.map((c) => (
                                    <button
                                        key={c.id}
                                        onClick={() => setSelectedClassId(c.id)}
                                        className={`shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                            selectedClassId === c.id
                                                ? "bg-violet-50 text-[#6658f3]"
                                                : "text-gray-500 hover:bg-gray-50"
                                        }`}
                                    >
                                        {c.name}
                                    </button>
                                ))}
                            </div>

                            {loadingAnalytics ? (
                                <p className="text-gray-400">Считаем...</p>
                            ) : (
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <WeakTopicsCard topics={weakTopics} />
                                    <StudentStatsCard students={studentStats} />
                                </div>
                            )}
                        </>
                    )}
                </main>
            </div>
        </div>
    );
}

function aggregateByStudent(progress) {
    const map = {};

    progress.forEach((p) => {
        if (!map[p.student_id]) {
            map[p.student_id] = {
                student_id: p.student_id,
                profile: p.profiles,
                total: 0,
                completed: 0,
                scoreSum: 0,
                scoreCount: 0,
            };
        }
        const entry = map[p.student_id];
        entry.total += 1;
        if (p.status === "completed") entry.completed += 1;
        if (p.score != null) {
            entry.scoreSum += p.score;
            entry.scoreCount += 1;
        }
    });

    return Object.values(map)
        .map((e) => ({
            ...e,
            avgScore: e.scoreCount > 0 ? Math.round(e.scoreSum / e.scoreCount) : null,
        }))
        .sort((a, b) => (a.avgScore ?? 100) - (b.avgScore ?? 100)); // сначала те, кому нужнее внимание
}

function resolveTopic(lessonId, questionId) {
    const lesson = LESSONS.find((l) => String(l.id) === String(lessonId));
    if (!lesson) return { lessonTitle: `Урок ${lessonId}`, questionText: `Вопрос ${questionId}` };

    const quizQuestion = lesson.quiz?.[Number(questionId)];
    if (quizQuestion) {
        return { lessonTitle: lesson.title, questionText: quizQuestion.question };
    }

    const checkQuestion = lesson.theory?.find(
        (item) => item.type === "check" && String(item.id) === String(questionId)
    );
    return {
        lessonTitle: lesson.title,
        questionText: checkQuestion?.question ?? `Вопрос ${questionId}`,
    };
}

function WeakTopicsCard({ topics }) {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={18} className="text-amber-500" />
                <p className="font-bold text-gray-900">Слабые темы класса</p>
            </div>

            {topics.length === 0 ? (
                <p className="text-sm text-gray-400 py-6 text-center">
                    Пока недостаточно данных — нужно минимум 3 ответа на вопрос
                </p>
            ) : (
                <div className="flex flex-col gap-3">
                    {topics.map((t) => {
                        const { lessonTitle, questionText } = resolveTopic(t.lesson_id, t.question_id);
                        return (
                            <div key={`${t.lesson_id}-${t.question_id}`} className="border-b border-gray-50 pb-3 last:border-0">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-xs text-gray-400 pb-0.5">{lessonTitle}</p>
                                        <p className="text-sm font-medium text-gray-900">{questionText}</p>
                                    </div>
                                    <span className="shrink-0 text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full">
                                        {t.error_rate}%
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400 pt-1">
                                    {t.incorrect_count} из {t.total_answers} ответили неверно
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function StudentStatsCard({ students }) {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={18} className="text-[#6658f3]" />
                <p className="font-bold text-gray-900">Ученики</p>
            </div>

            {students.length === 0 ? (
                <p className="text-sm text-gray-400 py-6 text-center">Пока нет выполненных заданий</p>
            ) : (
                <div className="flex flex-col gap-1">
                    {students.map((s) => (
                        <div key={s.student_id} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-violet-100 shrink-0">
                                {s.profile?.avatar_url ? (
                                    <img src={s.profile.avatar_url} alt="" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-violet-400 text-xs font-bold">
                                        {s.profile?.username?.[0]?.toUpperCase() ?? "?"}
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {s.profile?.username ?? "Ученик"}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {s.completed}/{s.total} заданий выполнено
                                </p>
                            </div>

                            {s.avgScore != null && (
                                <span
                                    className={`shrink-0 text-xs font-bold px-2 py-1 rounded-full ${
                                        s.avgScore >= 70
                                            ? "bg-emerald-50 text-emerald-600"
                                            : s.avgScore >= 40
                                            ? "bg-amber-50 text-amber-600"
                                            : "bg-red-50 text-red-500"
                                    }`}
                                >
                                    {s.avgScore}%
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function EmptyState() {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl py-16 flex flex-col items-center text-center">
            <Users size={32} className="text-gray-300 mb-3" />
            <p className="font-semibold text-gray-900 pb-1">У тебя пока нет классов</p>
            <p className="text-sm text-gray-400">Аналитика появится, как только у тебя будет класс с учениками</p>
        </div>
    );
}