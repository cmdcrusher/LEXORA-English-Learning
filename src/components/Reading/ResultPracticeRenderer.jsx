import { useProfile } from "../../hooks/useProfile";
import CircleProgress from "../ProgressCard";
import { CheckCircle2, XCircle, Zap, Coins, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ResultPracticeRenderer({ score, total, xp, coins, isFirstCompletion }) {

    const navigate = useNavigate();
    const percent = Math.round(score / total * 100);

    const profile = useProfile();

    if (!profile) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <p className="text-gray-400">Loading...</p>
            </div>
        );
    }

    const messages90 = [
        "Excellent, {username}! 🔥",
        "Perfect score! 💯",
        "Outstanding performance!",
        "Flawless result!",
        "You mastered this lesson!",
    ];

    const messages70 = [
        "Great job, {username}! 👍",
        "Well done!",
        "Strong result!",
        "Almost perfect!",
    ];

    const messages40 = [
        "Good effort, {username}! 💪",
        "Not bad, keep going!",
        "You're improving!",
    ];

    const messages0 = [
        "Keep going, {username}!",
        "Don't give up!",
        "Try again, you got this 📚",
    ];

    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    function getMessage() {
        let msg;
        if (percent >= 90) msg = pick(messages90);
        else if (percent >= 70) msg = pick(messages70);
        else if (percent >= 40) msg = pick(messages40);
        else msg = pick(messages0);
        return msg.replace("{username}", profile.username);
    }

    const noNewReward = !isFirstCompletion && xp === 0 && coins === 0;

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10">
            <div className="w-full max-w-lg">

                <p className="text-xl sm:text-2xl font-bold text-gray-900 text-center pb-4 sm:pb-6">
                    Your result
                </p>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">

                    <p className="text-lg sm:text-2xl font-semibold text-gray-900 text-center pb-4 sm:pb-6 leading-snug">{getMessage()}</p>

                    <div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
                        <CircleProgress value={score} max={total} />

                        <p className="text-lg sm:text-2xl font-semibold text-gray-900 text-center pt-4 sm:pt-6 px-2">The total percent of accomplishment</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">

                        <ResultStat
                            icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
                            bg="bg-green-50"
                            value={score}
                            label="Correct"
                        />

                        <ResultStat
                            icon={<XCircle className="w-5 h-5 text-red-500" />}
                            bg="bg-red-50"
                            value={total - score}
                            label="Incorrect"
                        />

                        <ResultStat
                            icon={<Zap className="w-5 h-5 text-amber-500" />}
                            bg="bg-amber-50"
                            value={`+${xp} XP`}
                            label="XP gained"
                        />

                        <ResultStat
                            icon={<Coins className="w-5 h-5 text-[#6658f3]" />}
                            bg="bg-indigo-50"
                            value={`+${coins}`}
                            label="Coins earned"
                        />

                    </div>

                    {noNewReward && (
                        <p className="text-xs text-gray-400 text-center pt-4">
                            You've already completed this lesson — rewards are only given for your best result.
                        </p>
                    )}

                </div>

                <button
                    onClick={() => navigate('/practice')}
                    className="w-full mt-5 sm:mt-6 flex items-center justify-center gap-2 bg-[#6658f3] hover:bg-[#5747e8] text-white font-medium rounded-xl py-3.5 text-sm sm:text-base transition-colors"
                >
                    Continue learning <ArrowRight className="w-4 h-4" />
                </button>

            </div>
        </div>
    )
}

function ResultStat({ icon, bg, value, label }) {
    return (
        <div className="flex flex-col items-center text-center bg-gray-50 rounded-xl py-4 sm:py-5 px-2 sm:px-3">
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${bg} flex items-center justify-center mb-2`}>
                {icon}
            </div>
            <p className="text-base sm:text-lg font-bold text-gray-900 break-words">{value}</p>
            <p className="text-[11px] sm:text-xs text-gray-400">{label}</p>
        </div>
    )
}