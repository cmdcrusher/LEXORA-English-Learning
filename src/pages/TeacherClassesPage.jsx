import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useProfile } from "../hooks/useProfile";
import { Plus, Copy, Check, Users, X } from "lucide-react";

export default function TeacherClassesPage() {
    const profile = useProfile();
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedClassId, setSelectedClassId] = useState(null);

    useEffect(() => {
        if (profile) fetchClasses();
    }, [profile?.id]);

    async function fetchClasses() {
        setLoading(true);
        const { data, error } = await supabase
            .from("classes")
            .select("id, name, join_code, class_students(count)")
            .eq("teacher_id", profile.id)
            .order("created_at", { ascending: false });

        if (error) {
            console.error("fetchClasses error:", error);
        } else {
            setClasses(data ?? []);
            if (data?.length && !selectedClassId) setSelectedClassId(data[0].id);
        }
        setLoading(false);
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
                        <p className="text-2xl sm:text-3xl font-bold text-gray-900">Классы</p>
                        <p className="text-gray-500 pt-1">Создавай классы и делись кодом с учениками</p>
                    </div>

                    <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-start">
                        <CreateClassCard onCreated={fetchClasses} />

                        <div className="flex flex-col gap-3">
                            {classes.length === 0 ? (
                                <EmptyState />
                            ) : (
                                classes.map((c) => (
                                    <ClassRow
                                        key={c.id}
                                        classItem={c}
                                        onClick={() => setSelectedClassId(c.id)}
                                        selected={selectedClassId === c.id}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function CreateClassCard({ onCreated }) {
    const [name, setName] = useState("");
    const [creating, setCreating] = useState(false);
    const [newCode, setNewCode] = useState(null);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState(null);

    async function handleCreate(e) {
        e.preventDefault();
        setCreating(true);
        setError(null);

        const { data, error } = await supabase.rpc("create_class", { p_name: name });

        setCreating(false);

        if (error) {
            console.error("create_class error:", error);
            setError(error.message || "Не получилось создать класс");
            return;
        }

        setNewCode(data[0].join_code);
        setName("");
        onCreated?.();
    }

    function copyCode() {
        navigator.clipboard.writeText(newCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-5 lg:sticky lg:top-24">
            <p className="font-bold text-gray-900 pb-3">Создать класс</p>

            <form onSubmit={handleCreate} className="flex flex-col gap-2 mb-3">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Например, «9А — грамматика»"
                    className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm"
                />
                <button
                    disabled={creating || !name.trim()}
                    className="bg-[#6658f3] text-white font-semibold py-2.5 rounded-xl inline-flex items-center justify-center gap-1.5 disabled:opacity-40 hover:bg-[#5747e8] transition-colors"
                >
                    <Plus size={16} /> Создать
                </button>
            </form>

            {error && (
                <p className="text-sm text-red-500 pb-2">{error}</p>
            )}

            {newCode && (
                <div className="flex items-center justify-between bg-violet-50 rounded-xl px-4 py-3">
                    <div>
                        <p className="text-xs text-violet-400 pb-0.5">Код для учеников</p>
                        <p className="font-mono text-lg font-bold text-[#6658f3] tracking-widest">{newCode}</p>
                    </div>
                    <button onClick={copyCode} className="text-[#6658f3]">
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                </div>
            )}
        </div>
    );
}

function ClassRow({ classItem, onClick, selected }) {
    const [showStudents, setShowStudents] = useState(false);
    const studentCount = classItem.class_students?.[0]?.count ?? 0;

    return (
        <div
            className={`bg-white border rounded-2xl p-4 sm:p-5 transition-colors ${
                selected ? "border-[#6658f3]" : "border-gray-100"
            }`}
        >
            <div className="flex flex-wrap items-center justify-between gap-3">
                <button onClick={onClick} className="text-left flex-1 min-w-[140px]">
                    <p className="font-bold text-gray-900">{classItem.name}</p>
                    <p className="text-sm text-gray-400 flex items-center gap-1 pt-0.5">
                        <Users size={13} /> {studentCount} учеников
                    </p>
                </button>

                <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#6658f3] bg-violet-50 px-3 py-1.5 rounded-lg tracking-wider">
                        {classItem.join_code}
                    </span>
                    <button
                        onClick={() => setShowStudents((s) => !s)}
                        className="text-sm text-gray-400 hover:text-gray-600 whitespace-nowrap"
                    >
                        {showStudents ? "Скрыть" : "Ученики"}
                    </button>
                </div>
            </div>

            {showStudents && <StudentsList classId={classItem.id} />}
        </div>
    );
}

function StudentsList({ classId }) {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStudents();
    }, [classId]);

    async function fetchStudents() {
        setLoading(true);
        const { data, error } = await supabase
            .from("class_students")
            .select("student_id, joined_at, profiles ( username, avatar_url )")
            .eq("class_id", classId);

        if (error) console.error("fetchStudents error:", error);
        setStudents(data ?? []);
        setLoading(false);
    }

    async function removeStudent(studentId) {
        const { error } = await supabase
            .from("class_students")
            .delete()
            .eq("class_id", classId)
            .eq("student_id", studentId);

        if (!error) {
            setStudents((prev) => prev.filter((s) => s.student_id !== studentId));
        }
    }

    if (loading) return <p className="text-sm text-gray-400 pt-4">Загрузка...</p>;

    if (students.length === 0) {
        return <p className="text-sm text-gray-400 pt-4">Пока никто не присоединился</p>;
    }

    return (
        <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col gap-2">
            {students.map((s) => (
                <div key={s.student_id} className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full overflow-hidden bg-violet-100 shrink-0">
                        {s.profiles?.avatar_url ? (
                            <img src={s.profiles.avatar_url} alt="" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-violet-400 text-xs font-bold">
                                {s.profiles?.username?.[0]?.toUpperCase() ?? "?"}
                            </div>
                        )}
                    </div>
                    <span className="text-sm text-gray-700 flex-1 min-w-0 truncate">{s.profiles?.username ?? "Ученик"}</span>
                    <button
                        onClick={() => removeStudent(s.student_id)}
                        className="text-gray-300 hover:text-red-400 shrink-0"
                    >
                        <X size={14} />
                    </button>
                </div>
            ))}
        </div>
    );
}

function EmptyState() {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl py-16 flex flex-col items-center text-center">
            <Users size={32} className="text-gray-300 mb-3" />
            <p className="font-semibold text-gray-900 pb-1">Классов пока нет</p>
            <p className="text-sm text-gray-400">Создай первый класс слева</p>
        </div>
    );
}