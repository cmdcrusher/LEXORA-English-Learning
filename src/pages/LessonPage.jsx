import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { allLessons } from "../data/allLessons";
import TheoryRenderer from "../components/TheoryRenderer";
import { useState } from "react";
import QuizRenderer from "../components/QuizRenderer";
import ResultsRenderer from "../components/RelustsRenderer";
import { supabase } from "../lib/supabase";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function LessonPage() {
    const [mode, setMode] = useState('lesson');
    const [score, setScore] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [timeSpent, setTimeSpent] = useState(0);
    const [reward, setReward] = useState({ xp: 0, coins: 0, completed: false, perfect: false });

    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const assignmentId = searchParams.get("assignmentId"); // новое

    const lesson = allLessons.find((l) => l.id === Number(id));

    if (!lesson) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-400 px-4 text-center">
                Lesson not found
            </div>
        );
    }

    function startQuiz() {
        setScore(0);
        setStartTime(Date.now());
        setMode('quiz');
    }

    async function addReward(finalScore) {
        const { data, error } = await supabase.rpc('complete_lesson', {
            p_lesson_id: lesson.id,
            p_score: finalScore,
            p_total: lesson.quiz.length,
        });

        if (error) {
            console.error('Failed to save progress:', error);
            return;
        }

        const result = data[0];
        setReward({
            xp: result.gained_xp,
            coins: result.gained_coins,
            completed: result.is_completed,
            perfect: result.is_perfect,
        });

        // новое: если урок был назначен учителем — закрываем assignment
        if (assignmentId) {
            const percent = Math.round((finalScore / lesson.quiz.length) * 100);
            const { data: { user } } = await supabase.auth.getUser();
            const { error: assignError } = await supabase
                .from("assignment_progress")
                .update({ status: "completed", score: percent, completed_at: new Date().toISOString() })
                .eq("assignment_id", assignmentId)
                .eq("student_id", user.id);

            if (assignError) console.error("Failed to complete assignment:", assignError);
        }
    }

    if (mode === 'lesson') {
        return (
            <div className="min-h-screen bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5 sm:py-10">
                    <button
                        onClick={() => navigate('/lessons')}
                        className="flex items-center gap-1.5 text-gray-400 hover:text-gray-600 text-sm font-medium mb-5 sm:mb-6 transition-colors"
                    >
                        <ArrowLeft size={16} /> Back to lessons
                    </button>

                    <p className="text-xs sm:text-sm font-semibold text-[#6658f3] pb-2">
                        Lesson {lesson.id}
                    </p>
                    <p className="text-xl sm:text-4xl font-bold text-gray-900 pb-6 sm:pb-8 leading-snug">
                        {lesson.title}
                    </p>

                    <TheoryRenderer theory={lesson.theory} />

                    <button
                        onClick={startQuiz}
                        className="w-full mt-6 sm:mt-8 flex items-center justify-center gap-2 bg-[#6658f3] hover:bg-[#5747e8] text-white font-semibold rounded-xl py-3.5 sm:py-4 text-sm sm:text-base transition-colors sticky bottom-4"
                    >
                        Continue to quiz <ArrowRight size={18} />
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
                source="builtin_lesson"
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
                setMode={setMode}
            />
        );
    }
}