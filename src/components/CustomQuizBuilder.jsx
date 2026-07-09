import { Plus, Trash2 } from "lucide-react";

const MAX_COINS_PER_QUESTION = 4;
const MAX_XP_PER_QUESTION = 10;

const emptyQuestion = () => ({
    id: crypto.randomUUID(),
    question: "",
    options: ["", ""],
    correctIndex: 0,
    coins: 1,
    xp: 5,
});

function clamp(value, min, max) {
    if (Number.isNaN(value)) return min;
    return Math.min(Math.max(value, min), max);
}

export default function CustomQuizBuilder({ questions, setQuestions }) {
    function addQuestion() {
        setQuestions((prev) => [...prev, emptyQuestion()]);
    }

    function removeQuestion(index) {
        setQuestions((prev) => prev.filter((_, i) => i !== index));
    }

    function updateQuestion(index, patch) {
        setQuestions((prev) => prev.map((q, i) => (i === index ? { ...q, ...patch } : q)));
    }

    function updateReward(index, field, rawValue, max) {
        const value = clamp(parseInt(rawValue, 10), 0, max);
        updateQuestion(index, { [field]: value });
    }

    function updateOption(qIndex, oIndex, value) {
        setQuestions((prev) =>
            prev.map((q, i) => {
                if (i !== qIndex) return q;
                const options = [...q.options];
                options[oIndex] = value;
                return { ...q, options };
            })
        );
    }

    function addOption(qIndex) {
        setQuestions((prev) =>
            prev.map((q, i) => (i === qIndex ? { ...q, options: [...q.options, ""] } : q))
        );
    }

    function removeOption(qIndex, oIndex) {
        setQuestions((prev) =>
            prev.map((q, i) => {
                if (i !== qIndex) return q;
                const options = q.options.filter((_, idx) => idx !== oIndex);
                const correctIndex = q.correctIndex >= options.length ? 0 : q.correctIndex;
                return { ...q, options, correctIndex };
            })
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {questions.map((q, qIndex) => (
                <div key={qIndex} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2 mb-3">
                        <input
                            value={q.question}
                            onChange={(e) => updateQuestion(qIndex, { question: e.target.value })}
                            placeholder={`Вопрос ${qIndex + 1}`}
                            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium"
                        />
                        {questions.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeQuestion(qIndex)}
                                className="text-gray-300 hover:text-red-400 shrink-0 mt-1.5"
                            >
                                <Trash2 size={16} />
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        {q.options.map((option, oIndex) => (
                            <div key={oIndex} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name={`correct-${qIndex}`}
                                    checked={q.correctIndex === oIndex}
                                    onChange={() => updateQuestion(qIndex, { correctIndex: oIndex })}
                                    className="accent-[#6658f3] shrink-0"
                                    title="Отметить как правильный ответ"
                                />
                                <input
                                    value={option}
                                    onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                                    placeholder={`Вариант ${oIndex + 1}`}
                                    className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm"
                                />
                                {q.options.length > 2 && (
                                    <button
                                        type="button"
                                        onClick={() => removeOption(qIndex, oIndex)}
                                        className="text-gray-300 hover:text-red-400 shrink-0"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                )}
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={() => addOption(qIndex)}
                            className="text-xs font-medium text-[#6658f3] self-start mt-1"
                        >
                            + вариант ответа
                        </button>
                    </div>

                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                        <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                            Монет
                            <input
                                type="number"
                                min={0}
                                max={MAX_COINS_PER_QUESTION}
                                value={q.coins}
                                onChange={(e) =>
                                    updateReward(qIndex, "coins", e.target.value, MAX_COINS_PER_QUESTION)
                                }
                                className="w-14 border border-gray-200 rounded-lg px-2 py-1 text-sm text-gray-700"
                            />
                            <span className="text-gray-300">/ {MAX_COINS_PER_QUESTION}</span>
                        </label>

                        <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                            XP
                            <input
                                type="number"
                                min={0}
                                max={MAX_XP_PER_QUESTION}
                                value={q.xp}
                                onChange={(e) =>
                                    updateReward(qIndex, "xp", e.target.value, MAX_XP_PER_QUESTION)
                                }
                                className="w-14 border border-gray-200 rounded-lg px-2 py-1 text-sm text-gray-700"
                            />
                            <span className="text-gray-300">/ {MAX_XP_PER_QUESTION}</span>
                        </label>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={addQuestion}
                className="flex items-center justify-center gap-1.5 border-2 border-dashed border-gray-200 text-gray-500 rounded-xl py-3 text-sm font-medium hover:border-[#6658f3] hover:text-[#6658f3] transition-colors"
            >
                <Plus size={16} /> Добавить вопрос
            </button>
        </div>
    );
}

export function buildQuizPayload(questions) {
    return questions
        .filter((q) => q.question.trim() && q.options.every((o) => o.trim()))
        .map((q) => ({
            id: q.id,
            questionTitle: "Выбери правильный ответ",
            question: q.question,
            options: q.options,
            correct: q.options[q.correctIndex],
            coins: clamp(Number(q.coins) || 0, 0, MAX_COINS_PER_QUESTION),
            xp: clamp(Number(q.xp) || 0, 0, MAX_XP_PER_QUESTION),
        }));
}