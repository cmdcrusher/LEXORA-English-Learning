import { useNavigate } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";
import CircleProgress from "./ProgressCard";
import { CheckCircle2, XCircle, Clock, Zap, Coins } from "lucide-react";

export default function ResultsRenderer({ lesson, score, timeSpent, setMode, gainedXP, earnedCoins, perfect, completed }) {
    const quiz = lesson?.quiz ?? [];
    const questionsAmount = quiz.length;
    const profile = useProfile();

    const navigate = useNavigate();

    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;

    const percentage = questionsAmount ? (score / questionsAmount) * 100 : 0;

    const messages90 = [
        "Excellent, {username}! 🔥",
        "Perfect score! 💯",
        "Outstanding performance!",
        "Flawless result!",
        "You mastered this lesson!",
    ];
    const messages70 = ["Great job, {username}! 👍", "Well done!", "Strong result!", "Almost perfect!"];
    const messages40 = ["Good effort, {username}! 💪", "Not bad, keep going!", "You're improving!"];
    const messages0 = ["Keep going, {username}!", "Don't give up!", "Try again, you got this 📚"];

    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    function getMessage() {
        if (!profile) return "";
        let msg;
        if (percentage >= 90) msg = pick(messages90);
        else if (percentage >= 70) msg = pick(messages70);
        else if (percentage >= 40) msg = pick(messages40);
        else msg = pick(messages0);
        return msg.replace("{username}", profile.username);
    }

    if (!lesson || !profile) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <p className="text-gray-400">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10">
            <div className="w-full max-w-lg">
                <p className="text-xl sm:text-2xl font-bold text-gray-900 text-center pb-4 sm:pb-6">Your result</p>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
                    <p className="text-lg sm:text-2xl font-semibold text-gray-900 text-center pb-4 sm:pb-6 leading-snug">
                        {getMessage()}
                    </p>

                    <div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
                        <CircleProgress value={score} max={questionsAmount} />
                        <p className="text-sm sm:text-base text-gray-500 text-center pt-4 sm:pt-6 px-2">
                            The total percent of accomplishment
                        </p>

                        {perfect ? (
                            <p className="text-sm font-medium text-green-600 mt-2 text-center">🏆 Perfect score!</p>
                        ) : completed ? (
                            <p className="text-sm font-medium text-green-600 mt-2 text-center">✓ Lesson passed — next lesson unlocked</p>
                        ) : (
                            <p className="text-sm font-medium text-amber-600 mt-2 text-center px-2">
                                Нужно набрать хотя бы 70%, чтобы открыть следующий урок
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        <ResultStat
                            icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
                            bg="bg-green-50"
                            value={score}
                            label="Correct"
                        />
                        <ResultStat
                            icon={<XCircle className="w-5 h-5 text-red-500" />}
                            bg="bg-red-50"
                            value={questionsAmount - score}
                            label="Incorrect"
                        />
                        <ResultStat
                            icon={<Clock className="w-5 h-5 text-blue-500" />}
                            bg="bg-blue-50"
                            value={`${minutes}m ${seconds}s`}
                            label="Time spent"
                        />
                        {gainedXP > 0 ? (
                            <ResultStat icon={<Zap className="w-5 h-5 text-amber-500" />} bg="bg-amber-50" value={`+${gainedXP} XP`} label="XP gained" />
                        ) : (
                            <ResultStat icon={<Zap className="w-5 h-5 text-amber-500" />} bg="bg-gray-50" value="0 XP" label="Already earned" />
                        )}
                        <ResultStat
                            icon={<Coins className="w-5 h-5 text-[#6658f3]" />}
                            bg="bg-indigo-50"
                            value={`+${earnedCoins}`}
                            label="Coins earned"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-6">
                    <button
                        onClick={() => setMode('lesson')}
                        className="flex-1 border-2 border-gray-200 text-gray-600 font-medium rounded-xl py-3.5 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                    >
                        Review lesson
                    </button>

                    <button
                        onClick={() => navigate('/lessons')}
                        className="flex-1 bg-[#6658f3] hover:bg-[#5747e8] text-white font-medium rounded-xl py-3.5 transition-colors text-sm sm:text-base"
                    >
                        Continue learning
                    </button>
                </div>
            </div>
        </div>
    );
}

function ResultStat({ icon, bg, value, label }) {
    return (
        <div className="flex flex-col items-center text-center bg-gray-50 rounded-xl py-4 sm:py-5 px-2 sm:px-4">
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${bg} flex items-center justify-center mb-2`}>
                {icon}
            </div>
            <p className="text-base sm:text-lg font-bold text-gray-900 break-words">{value}</p>
            <p className="text-[11px] sm:text-xs text-gray-400">{label}</p>
        </div>
    );
}