import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import { Calendar, CheckCircle2, Clock, Circle, ClipboardList } from "lucide-react";

export default function StudentAssignmentsPage() {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAssignments();
    }, []);

    async function fetchAssignments() {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) { setLoading(false); return; }

        const { data, error } = await supabase
            .from("assignment_progress")
            .select(`
                status, score, completed_at,
                assignments (
                    id, title, note, due_date, source, lesson_id,
                    classes ( name )
                )
            `)
            .eq("student_id", user.id);

        if (error) {
            console.error("fetchAssignments error:", error);
        } else {
            const sorted = (data ?? []).sort((a, b) => {
                if (a.status !== "completed" && b.status === "completed") return -1;
                if (a.status === "completed" && b.status !== "completed") return 1;
                return new Date(a.assignments?.due_date ?? 0) - new Date(b.assignments?.due_date ?? 0);
            });
            setAssignments(sorted);
        }
        setLoading(false);
    }

    function getLink(row) {
        const a = row.assignments;
        if (!a) return null;

        if (a.source === "builtin_lesson") return `/lesson/${a.lesson_id}?assignmentId=${a.id}`;
        if (a.source === "custom_lesson") return `/custom-lesson/${a.lesson_id}?assignmentId=${a.id}`;
        if (a.source === "reading_practice") return `/practice/${a.lesson_id}?assignmentId=${a.id}`;
        return null;
    }

    function handleOpen(row) {
        const link = getLink(row);
        if (link) navigate(link);
    }

    if (loading) {
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

                <main className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8 max-w-3xl mx-auto">
                    <div className="mb-6">
                        <p className="text-2xl sm:text-3xl font-bold text-gray-900">Assignments</p>
                        <p className="text-gray-500 pt-1">Задания от твоих учителей</p>
                    </div>

                    {assignments.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <div className="flex flex-col gap-3">
                            {assignments.map((row) => (
                                <AssignmentRow
                                    key={row.assignments?.id}
                                    row={row}
                                    onOpen={() => handleOpen(row)}
                                />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

function AssignmentRow({ row, onOpen }) {
    const a = row.assignments;
    if (!a) return null;

    const isOverdue =
        a.due_date && new Date(a.due_date) < new Date() && row.status !== "completed";

    return (
        <button
            onClick={onOpen}
            disabled={row.status === "completed"}
            className={`text-left bg-white border rounded-2xl p-4 sm:p-5 transition-colors ${
                row.status === "completed"
                    ? "border-gray-100 cursor-default"
                    : "border-gray-100 hover:border-[#6658f3]/40"
            }`}
        >
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                    <StatusIcon status={row.status} />
                    <div className="min-w-0">
                        <p className="font-bold text-gray-900">{a.title}</p>
                        {a.classes?.name && (
                            <p className="text-xs text-gray-400 pt-0.5">{a.classes.name}</p>
                        )}
                        {a.note && (
                            <p className="text-sm text-gray-500 pt-1">{a.note}</p>
                        )}
                    </div>
                </div>

                {a.due_date && (
                    <span
                        className={`shrink-0 flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
                            isOverdue ? "bg-red-50 text-red-500" : "bg-gray-50 text-gray-500"
                        }`}
                    >
                        <Calendar size={12} />
                        {new Date(a.due_date).toLocaleDateString("ru-RU")}
                    </span>
                )}
            </div>

            {row.status === "completed" && row.score != null && (
                <p className="text-sm text-emerald-600 font-medium pt-3 pl-8">
                    Выполнено · {row.score}%
                </p>
            )}
        </button>
    );
}

function StatusIcon({ status }) {
    if (status === "completed") return <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 shrink-0" />;
    if (status === "in_progress") return <Clock size={20} className="text-amber-500 mt-0.5 shrink-0" />;
    return <Circle size={20} className="text-gray-300 mt-0.5 shrink-0" />;
}

function EmptyState() {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl py-16 flex flex-col items-center text-center">
            <ClipboardList size={32} className="text-gray-300 mb-3" />
            <p className="font-semibold text-gray-900 pb-1">Пока нет заданий</p>
            <p className="text-sm text-gray-400">Здесь появится всё, что назначит учитель</p>
        </div>
    );
}