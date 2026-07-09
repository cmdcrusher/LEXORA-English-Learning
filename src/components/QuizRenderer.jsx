import { useState } from "react";
import { supabase } from "../lib/supabase";
import { ArrowLeft } from "lucide-react";

export default function QuizRenderer({
    lesson,
    setMode,
    score,
    setScore,
    startTime,
    setTimeSpent,
    addReward,
    assignmentId,
    source = "builtin_lesson", // передавайте "custom_lesson" из CustomLessonPage
}) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [correctIds, setCorrectIds] = useState([]); // id верно отвеченных вопросов

    if (!lesson) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-400 px-4 text-center">
                Lesson not found
            </div>
        );
    }

    const currentQuestion = lesson.quiz[questionIndex];
    const totalQuestions = lesson.quiz.length;

    function handleSelect(option) {
        setSelected(option);
        setAnswered(true);

        const isCorrect = option === currentQuestion.correct;
        if (isCorrect) {
            setScore((prev) => prev + 1);
            if (currentQuestion.id) {
                setCorrectIds((prev) => [...prev, currentQuestion.id]);
            }
        }

        supabase.from("student_answers").insert({
            lesson_id: String(lesson.id),
            source,
            question_id: currentQuestion.id ? String(currentQuestion.id) : String(questionIndex),
            is_correct: isCorrect,
        }).then(({ error }) => {
            if (error) console.error("Failed to log answer:", error);
        });
    }

    async function nextQuestion() {
        setSelected(null);
        setAnswered(false);

        if (questionIndex < totalQuestions - 1) {
            setQuestionIndex((prev) => prev + 1);
        } else {
            const seconds = Math.floor((Date.now() - startTime) / 1000);
            setTimeSpent(seconds);

            // addReward сам разберётся с assignment_progress —
            // дублирующий апдейт отсюда убран
            await addReward(score, correctIds);

            setMode("result");
        }
    }

    function getColor(option) {
        if (!answered) return "bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100";
        if (option === currentQuestion.correct) return "bg-green-100 border-green-400 text-green-700";
        if (option === selected && option !== currentQuestion.correct) return "bg-red-100 border-red-400 text-red-700";
        return "bg-gray-50 border-gray-200 text-gray-400";
    }

    const progress = (questionIndex / totalQuestions) * 100;

    return (
        <div className="min-h-screen w-full bg-slate-50 flex flex-col">
            <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 max-w-3xl w-full mx-auto">
                <button
                    onClick={() => setMode("lesson")}
                    className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                >
                    <ArrowLeft size={20} />
                </button>

                <div className="flex-1 h-2.5 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#6658f3] rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <p className="text-xs sm:text-sm font-medium text-gray-400 whitespace-nowrap shrink-0">
                    {questionIndex + 1}/{totalQuestions}
                </p>
            </div>

            <div className="flex-1 flex flex-col items-center px-4 sm:px-6 pb-6 sm:pb-10">
                <div className="w-full max-w-3xl mt-4 sm:mt-6">
                    <p className="text-base sm:text-xl font-semibold text-[#6658f3] pb-2 text-center">
                        {lesson.title}{lesson.category ? ` • ${lesson.category}` : ""}
                    </p>

                    <p className="text-sm sm:text-base text-gray-400 text-center pb-1">
                        {currentQuestion.questionTitle}
                    </p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900 text-center pb-6 sm:pb-8 leading-snug px-1">
                        {currentQuestion.question}
                    </p>

                    <div className="flex flex-col gap-2.5 sm:gap-3">
                        {currentQuestion.options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelect(option)}
                                disabled={answered}
                                className={`w-full rounded-xl border-2 py-3.5 sm:py-4 px-4 sm:px-5 text-sm sm:text-base font-semibold text-center transition-all duration-150 ease-out active:translate-y-[1px] disabled:cursor-not-allowed ${getColor(option)}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {answered && (
                <div className="sticky bottom-0 bg-white border-t border-gray-100 py-3 sm:py-4 px-4 sm:px-6">
                    <button
                        onClick={nextQuestion}
                        className="max-w-2xl mx-auto w-full block bg-[#6658f3] hover:bg-[#5747e8] text-white font-semibold rounded-xl py-3.5 sm:py-4 text-sm sm:text-base transition-colors"
                    >
                        {questionIndex < totalQuestions - 1 ? "Next" : "See results"}
                    </button>
                </div>
            )}
        </div>
    );
}