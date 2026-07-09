import { CheckCircle2, XCircle } from "lucide-react";

export default function ReadingQuestion({
    question,
    index,
    selected,
    onSelect,
    checked
}) {

    const isCorrect = selected === question.correct;

    function getOptionStyle(optionIndex) {

        if (!checked) {
            return selected === optionIndex
                ? "border-[#6658f3] bg-[#f8f7fc] text-[#6658f3]"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50";
        }

        // режим review
        if (optionIndex === question.correct) {
            return "border-green-500 bg-green-50 text-green-700";
        }

        if (optionIndex === selected && !isCorrect) {
            return "border-red-500 bg-red-50 text-red-700";
        }

        return "border-gray-200 bg-white text-gray-400";
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

            <p className="font-semibold text-gray-900 pb-4">
                {index + 1}. {question.question}
            </p>

            <div className="flex flex-col gap-2.5">
                {question.options.map((option, optionIndex) => (
                    <button
                        key={optionIndex}
                        disabled={checked}
                        onClick={() => onSelect(index, optionIndex)}
                        className={`text-left px-4 py-3 rounded-xl border font-medium text-sm transition-colors disabled:cursor-default ${getOptionStyle(optionIndex)}`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {checked && (
                <div className={`mt-4 rounded-xl px-4 py-3 flex items-start gap-2.5 ${isCorrect ? "bg-green-50" : "bg-red-50"}`}>

                    {isCorrect
                        ? <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        : <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    }

                    <div>
                        <p className={`font-semibold text-center text-sm ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                            {isCorrect ? "Correct" : "Incorrect"}
                        </p>
                        <p className="text-sm text-center text-gray-600 mt-0.5">{question.explanation}</p>
                    </div>

                </div>
            )}

        </div>
    )
}