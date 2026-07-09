import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState, useEffect, useMemo } from "react";
import { supabase } from "../lib/supabase";
import { useProfile } from "../hooks/useProfile";
import { allLessons as LESSONS } from "../data/allLessons";
import { Plus, Calendar, Users, X, CheckCircle2, Circle, Clock } from "lucide-react";
import CustomQuizBuilder, { buildQuizPayload } from "../components/CustomQuizBuilder";

export default function TeacherAssignmentsPage() {
    const profile = useProfile();
    const [classes, setClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState(null);
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (profile) fetchClasses();
    }, [profile?.id]);

    useEffect(() => {
        if (selectedClassId) fetchAssignments(selectedClassId);
    }, [selectedClassId]);

    async function fetchClasses() {
        setLoading(true);
        const { data } = await supabase
            .from("classes")
            .select("id, name, class_students(count)")
            .eq("teacher_id", profile.id)
            .order("created_at");

        setClasses(data ?? []);
        if (data?.length && !selectedClassId) setSelectedClassId(data[0].id);
        setLoading(false);
    }

    async function fetchAssignments(classId) {
        const { data } = await supabase
            .from("assignments")
            .select(`
                id, title, due_date, note, source, lesson_id, created_at,
                assignment_progress (
                    student_id,
                    status,
                    score,
                    profiles ( username, avatar_url )
                )
            `)
            .eq("class_id", classId)
            .order("created_at", { ascending: false });

        setAssignments(data ?? []);
    }

    const selectedClass = classes.find((c) => c.id === selectedClassId);

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
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-gray-900">Assignments</p>
                            <p className="text-gray-500 pt-1">Назначай уроки и отслеживай прогресс класса</p>
                        </div>

                        <button
                            onClick={() => setShowModal(true)}
                            disabled={!selectedClassId}
                            className="bg-[#6658f3] text-white font-semibold px-4 py-2.5 rounded-xl inline-flex items-center justify-center gap-2 hover:bg-[#5747e8] transition-colors disabled:opacity-40 shrink-0"
                        >
                            <Plus size={18} /> New assignment
                        </button>
                    </div>

                    {classes.length === 0 ? (
                        <EmptyClassesState />
                    ) : (
                        <>
                            <div className="flex gap-1 mb-6 overflow-x-auto">
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
                                        <span className="ml-1.5 text-xs text-gray-400">
                                            {c.class_students?.[0]?.count ?? 0}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {assignments.length === 0 ? (
                                <EmptyAssignmentsState onCreate={() => setShowModal(true)} />
                            ) : (
                                <div className="flex flex-col gap-3">
                                    {assignments.map((a) => (
                                        <AssignmentCard key={a.id} assignment={a} />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </main>
            </div>

            {showModal && (
                <NewAssignmentModal
                    classId={selectedClassId}
                    className={selectedClass?.name}
                    onClose={() => setShowModal(false)}
                    onCreated={() => {
                        setShowModal(false);
                        fetchAssignments(selectedClassId);
                    }}
                />
            )}
        </div>
    );
}

function AssignmentCard({ assignment }) {
    const progress = assignment.assignment_progress ?? [];
    const total = progress.length;
    const completed = progress.filter((p) => p.status === "completed").length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    const isOverdue =
        assignment.due_date && new Date(assignment.due_date) < new Date() && percent < 100;

    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div className="min-w-0">
                    <p className="font-bold text-gray-900">{assignment.title}</p>
                    {assignment.note && (
                        <p className="text-sm text-gray-400 pt-0.5">{assignment.note}</p>
                    )}
                </div>

                {assignment.due_date && (
                    <span
                        className={`shrink-0 flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
                            isOverdue ? "bg-red-50 text-red-500" : "bg-gray-50 text-gray-500"
                        }`}
                    >
                        <Calendar size={12} />
                        {new Date(assignment.due_date).toLocaleDateString("ru-RU")}
                    </span>
                )}
            </div>

            <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#6658f3] rounded-full transition-all"
                        style={{ width: `${percent}%` }}
                    />
                </div>
                <span className="text-sm font-medium text-gray-500 shrink-0">
                    {completed}/{total}
                </span>
            </div>

            <StudentStatusList progress={progress} />
        </div>
    );
}

function StudentStatusList({ progress }) {
    const [expanded, setExpanded] = useState(false);
    if (progress.length === 0) return null;

    const visible = expanded ? progress : progress.slice(0, 4);

    return (
        <div className="mt-4 pt-4 border-t border-gray-50">
            <div className="flex flex-wrap gap-2">
                {visible.map((p) => (
                    <div
                        key={p.student_id}
                        className="flex items-center gap-1.5 bg-gray-50 rounded-lg pl-1.5 pr-2.5 py-1.5 text-xs"
                    >
                        <div className="w-5 h-5 rounded-full overflow-hidden bg-violet-100 shrink-0">
                            {p.profiles?.avatar_url ? (
                                <img
                                    src={p.profiles.avatar_url}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-violet-400 text-[9px] font-bold">
                                    {p.profiles?.username?.[0]?.toUpperCase() ?? "?"}
                                </div>
                            )}
                        </div>

                        <StatusIcon status={p.status} />
                        <span className="text-gray-600 font-medium">
                            {p.profiles?.username ?? "Ученик"}
                        </span>
                        {p.score != null && <span className="text-gray-400">· {p.score}%</span>}
                    </div>
                ))}
            </div>

            {progress.length > 4 && (
                <button
                    onClick={() => setExpanded((e) => !e)}
                    className="text-xs font-medium text-[#6658f3] mt-2"
                >
                    {expanded ? "Свернуть" : `Показать всех (${progress.length})`}
                </button>
            )}
        </div>
    );
}

function StatusIcon({ status }) {
    if (status === "completed") return <CheckCircle2 size={13} className="text-emerald-500" />;
    if (status === "in_progress") return <Clock size={13} className="text-amber-500" />;
    return <Circle size={13} className="text-gray-300" />;
}

function NewAssignmentModal({ classId, className, onClose, onCreated }) {
    const [tab, setTab] = useState("existing"); // "existing" | "custom"

    // существующий урок
    const [source, setSource] = useState("builtin_lesson");
    const [lessonId, setLessonId] = useState(LESSONS[0]?.id ?? "");

    // свой квиз
    const [customTitle, setCustomTitle] = useState("");
    const [customInstructions, setCustomInstructions] = useState("");
    const [questions, setQuestions] = useState([{ question: "", options: ["", ""], correctIndex: 0 }]);

    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [note, setNote] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const selectedLesson = useMemo(
        () => LESSONS.find((l) => String(l.id) === String(lessonId)),
        [lessonId]
    );

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        let finalSource = source;
        let finalLessonId = String(lessonId);
        let finalTitle = title || selectedLesson?.title || "Assignment";

        if (tab === "custom") {
            const quizPayload = buildQuizPayload(questions);
            if (quizPayload.length === 0) {
                setSubmitting(false);
                setError("Добавь хотя бы один вопрос со всеми заполненными вариантами");
                return;
            }
            if (!customTitle.trim()) {
                setSubmitting(false);
                setError("Укажи название задания");
                return;
            }

            const { data: { user } } = await supabase.auth.getUser();
            const { data: customLesson, error: createError } = await supabase
                .from("custom_lessons")
                .insert({
                    teacher_id: user.id,
                    title: customTitle,
                    instructions: customInstructions || null,
                    quiz: quizPayload,
                })
                .select("id")
                .single();

            if (createError) {
                setSubmitting(false);
                setError(createError.message);
                return;
            }

            finalSource = "custom_lesson";
            finalLessonId = customLesson.id;
            finalTitle = customTitle;
        }

        const { error: assignError } = await supabase.rpc("assign_lesson", {
            p_class_id: classId,
            p_student_ids: null,
            p_source: finalSource,
            p_lesson_id: finalLessonId,
            p_title: finalTitle,
            p_due_date: dueDate || null,
            p_note: note || null,
        });

        setSubmitting(false);
        if (assignError) {
            console.error("assign_lesson error:", assignError);
            setError(assignError.message);
            return;
        }
        onCreated();
    }

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4 py-8 overflow-y-auto">
            <div className="bg-white rounded-2xl w-full max-w-lg p-5 sm:p-6 my-auto">
                <div className="flex items-center justify-between mb-4">
                    <p>New assignment · {className}</p>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex gap-1 mb-5 bg-gray-50 rounded-xl p-1">
                    <button
                        onClick={() => setTab("existing")}
                        className={`flex-1 text-sm font-medium py-2 rounded-lg transition-colors ${
                            tab === "existing" ? "bg-white text-[#6658f3] shadow-sm" : "text-gray-500"
                        }`}
                    >
                        Готовый урок
                    </button>
                    <button
                        onClick={() => setTab("custom")}
                        className={`flex-1 text-sm font-medium py-2 rounded-lg transition-colors ${
                            tab === "custom" ? "bg-white text-[#6658f3] shadow-sm" : "text-gray-500"
                        }`}
                    >
                        Свой квиз
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {tab === "existing" ? (
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1.5 block">Урок</label>
                            <select
                                value={lessonId}
                                onChange={(e) => setLessonId(e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm"
                            >
                                {LESSONS.map((l) => (
                                    <option key={l.id} value={l.id}>{l.title}</option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Название задания</label>
                                <input
                                    value={customTitle}
                                    onChange={(e) => setCustomTitle(e.target.value)}
                                    placeholder="Например, «Тест по неправильным глаголам»"
                                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                                    Инструкция для учеников (необязательно)
                                </label>
                                <textarea
                                    value={customInstructions}
                                    onChange={(e) => setCustomInstructions(e.target.value)}
                                    rows={2}
                                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm resize-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Вопросы</label>
                                <CustomQuizBuilder questions={questions} setQuestions={setQuestions} />
                            </div>
                        </>
                    )}

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">Дедлайн</label>
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm"
                        />
                    </div>

                    {tab === "existing" && (
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                                Заметка для учеников (необязательно)
                            </label>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                rows={2}
                                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm resize-none"
                            />
                        </div>
                    )}

                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <button
                        type="submit"
                        disabled={submitting}
                        className="bg-[#6658f3] text-white font-semibold py-2.5 rounded-xl hover:bg-[#5747e8] transition-colors disabled:opacity-50 mt-1"
                    >
                        {submitting ? "Создаём..." : "Assign to class"}
                    </button>
                </form>
            </div>
        </div>
    );
}

function EmptyClassesState() {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl py-16 flex flex-col items-center text-center">
            <Users size={32} className="text-gray-300 mb-3" />
            <p className="font-semibold text-gray-900 pb-1">У тебя пока нет классов</p>
            <p className="text-sm text-gray-400">Создай класс, чтобы начать назначать задания</p>
        </div>
    );
}

function EmptyAssignmentsState({ onCreate }) {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl py-16 flex flex-col items-center text-center">
            <Calendar size={32} className="text-gray-300 mb-3" />
            <p className="font-semibold text-gray-900 pb-1">Заданий пока нет</p>
            <button onClick={onCreate} className="text-sm font-medium text-[#6658f3] mt-1">
                Создать первое задание
            </button>
        </div>
    );
}