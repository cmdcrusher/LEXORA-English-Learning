import { useMemo, useState } from "react";
import { ReadingLessons } from "../data/practice/ReadingLessons"
import ReadingText from "../components/Reading/Text";
import ReadingQuestion from "../components/Reading/Question";
import ResultPracticeRenderer from "../components/Reading/ResultPracticeRenderer";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function PracticeLessonPage() {
    const [answers, setAnswers] = useState({});
    const [mode, setMode] = useState('practice');
    const [reward, setReward] = useState({ xp: 0, coins: 0, isFirstCompletion: false, perfect: false });
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const assignmentId = searchParams.get("assignmentId");

    const lesson = ReadingLessons.find(lesson => lesson.id === Number(id));

    function handleSelect(questionIndex, optionIndex) {
        if (mode !== 'practice') return;
        setAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
    }

    const score = useMemo(() => {
        return lesson.questions.reduce((count, question, index) => {
            if (answers[index] === question.correct) return count + 1;
            return count;
        }, 0);
    }, [answers, lesson]);

    const allAnswered = Object.keys(answers).length === lesson.questions.length;

    async function logAnswers() {
        const rows = lesson.questions.map((question, index) => ({
            lesson_id: String(lesson.id),
            source: "reading_practice",
            question_id: String(index),
            is_correct: answers[index] === question.correct,
        }));

        const { error } = await supabase.from("student_answers").insert(rows);
        if (error) console.error("Failed to log reading answers:", error);
    }

    async function completeAssignment() {
        if (!assignmentId) return;
        const percent = Math.round((score / lesson.questions.length) * 100);
        const { data: { user } } = await supabase.auth.getUser();

        const { error } = await supabase
            .from("assignment_progress")
            .update({ status: "completed", score: percent, completed_at: new Date().toISOString() })
            .eq("assignment_id", assignmentId)
            .eq("student_id", user.id);

        if (error) console.error("Failed to complete assignment:", error);
    }

    async function bumpDailyArticles() {
        const { data: { user } } = await supabase.auth.getUser();
        const today = new Date().toISOString().slice(0, 10);

        const { data: existing } = await supabase
            .from("daily_activity")
            .select("id, articles_completed")
            .eq("user_id", user.id)
            .eq("activity_date", today)
            .maybeSingle();

        if (existing) {
            await supabase
                .from("daily_activity")
                .update({ articles_completed: (existing.articles_completed ?? 0) + 1 })
                .eq("id", existing.id);
        } else {
            await supabase
                .from("daily_activity")
                .insert({ user_id: user.id, activity_date: today, articles_completed: 1 });
        }
    }

    // новое: реальное начисление XP и монет через RPC (защищено от повторного фарма на бэкенде)
    async function awardReward() {
        const { data, error } = await supabase.rpc("complete_reading_practice", {
            p_lesson_id: String(lesson.id),
            p_score: score,
            p_total: lesson.questions.length,
        });

        if (error) {
            console.error("Failed to award reward:", error);
            return;
        }

        const result = data[0];
        setReward({
            xp: result.gained_xp,
            coins: result.gained_coins,
            isFirstCompletion: result.is_first_completion,
            perfect: result.is_perfect,
        });
    }

    function handleButton() {
        if (mode === "practice") {
            setMode("review");
            logAnswers();
            completeAssignment();
            bumpDailyArticles();
            awardReward();
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        if (mode === "review") setMode("results");
    }

    if (mode === "results") {
        return (
            <ResultPracticeRenderer
                score={score}
                total={lesson.questions.length}
                xp={reward.xp}
                coins={reward.coins}
                isFirstCompletion={reward.isFirstCompletion}
            />
        )
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-3xl mx-auto px-6 py-10">

                <button
                    onClick={() => navigate('/practice')}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 mb-6"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to practice
                </button>

                <ReadingText lesson={lesson} />

                <div className="flex flex-col gap-4 mt-8">
                    {lesson.questions.map((question, index) => (
                        <ReadingQuestion
                            key={index}
                            question={question}
                            index={index}
                            selected={answers[index]}
                            onSelect={handleSelect}
                            checked={mode === 'review'}
                        />
                    ))}
                </div>

                <div className="sticky bottom-0 mt-8 -mx-6 px-6 py-4 bg-white/80 backdrop-blur border-t border-gray-100">
                    <button
                        onClick={handleButton}
                        disabled={mode === 'practice' && !allAnswered}
                        className="w-full flex items-center justify-center gap-2 bg-[#6658f3] hover:bg-[#5747e8] disabled:bg-gray-200 disabled:text-gray-100 disabled:cursor-not-allowed text-white font-medium rounded-xl py-3.5 transition-colors"
                    >
                        <CheckCircle2 className="w-5 h-5" />
                        {mode === 'practice' ? 'Check answers' : 'Show results'}
                    </button>
                </div>
            </div>
        </div>
    )
}