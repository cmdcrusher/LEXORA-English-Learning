// CustomLessonPage.jsx
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import QuizRenderer from "../components/QuizRenderer";
import ResultsRenderer from "../components/RelustsRenderer";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CustomLessonPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const assignmentId = searchParams.get("assignmentId");

    const [lesson, setLesson] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mode, setMode] = useState("intro"); // intro | quiz | result
    const [score, setScore] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [timeSpent, setTimeSpent] = useState(0);
    const [reward, setReward] = useState({ xp: 0, coins: 0, completed: false, perfect: false });

    useEffect(() => {
        fetchLesson();
    }, [id]);

    async function fetchLesson() {
        const { data, error } = await supabase
            .from("custom_lessons")
            .select("id, title, instructions, quiz")
            .eq("id", id)
            .single();

        if (error) console.error("Failed to load custom lesson:", error);
        setLesson(data);
        setLoading(false);
    }

    function startQuiz() {
        setScore(0);
        setStartTime(Date.now());
        setMode("quiz");
    }

    // finalScore — кол-во верных ответов (число)
    // answeredQuestions — опционально: массив bool/индексов верных ответов от QuizRenderer,
    // нужен для точного начисления coins/xp по цене каждого вопроса, а не "первые N"
    async function addReward(finalScore, answeredQuestions) {
        const { data, error } = await supabase.rpc("complete_custom_lesson", {
            p_custom_lesson_id: lesson.id,
            p_assignment_id: assignmentId,
            p_score: finalScore,
            p_total: lesson.quiz.length,
            p_answered: answeredQuestions ?? null,
        });

        if (error) {
            console.error("Failed to save custom lesson progress:", error);
            return;
        }

        const result = Array.isArray(data) ? data[0] : data;
        setReward({
            xp: result?.gained_xp ?? 0,
            coins: result?.gained_coins ?? 0,
            completed: result?.is_completed ?? true,
            perfect: finalScore === lesson.quiz.length,
        });
    }

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>;
    }

    if (!lesson) {
        return <div className="min-h-screen flex items-center justify-center text-gray-400">Задание не найдено</div>;
    }

    if (mode === "intro") {
        return (
            <div className="min-h-screen bg-slate-50">
                <div className="max-w-2xl mx-auto px-6 py-10">
                    <button
                        onClick={() => navigate("/assignments")}
                        className="flex items-center gap-1.5 text-gray-400 hover:text-gray-600 text-sm font-medium mb-6"
                    >
                        <ArrowLeft size={16} /> Back to assignments
                    </button>

                    <h1 className="text-3xl font-bold text-gray-900 mb-3">{lesson.title}</h1>
                    {lesson.instructions && (
                        <p className="text-gray-500 mb-8">{lesson.instructions}</p>
                    )}

                    <p className="text-sm text-gray-400 mb-6">{lesson.quiz.length} вопросов</p>

                    <button
                        onClick={startQuiz}
                        className="w-full flex items-center justify-center gap-2 bg-[#6658f3] hover:bg-[#5747e8] text-white font-semibold rounded-xl py-4 transition-colors"
                    >
                        Начать <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        );
    }

    if (mode === "quiz") {
        return (
            <QuizRenderer
                lesson={lesson}
                setMode={setMode}
                score={score}
                setScore={setScore}
                startTime={startTime}
                setTimeSpent={setTimeSpent}
                addReward={addReward}
                assignmentId={assignmentId}
                source="custom_lesson"
            />
        );
    }

    if (mode === "result") {
        return (
            <ResultsRenderer
                lesson={lesson}
                score={score}
                timeSpent={timeSpent}
                gainedXP={reward.xp}
                earnedCoins={reward.coins}
                completed={reward.completed}
                perfect={reward.perfect}
                setMode={(m) => {
                    if (m === "lessons" || m === "assignments") {
                        navigate("/assignments");
                    } else {
                        setMode(m);
                    }
                }}
            />
        );
    }
}