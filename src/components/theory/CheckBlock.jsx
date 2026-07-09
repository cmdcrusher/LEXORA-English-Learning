import { useState } from "react";
import { Check, X } from "lucide-react";

export default function CheckBlock({ block }) {
    const [selected, setSelected] = useState(null);

    function getStyle(item) {
        if (selected === null) {
            return "border-violet-200 bg-white hover:bg-violet-50 text-violet-800";
        }
        if (block.correct && item === block.correct) {
            return "border-green-400 bg-green-50 text-green-700";
        }
        if (item === selected) {
            return "border-red-400 bg-red-50 text-red-700";
        }
        return "border-violet-100 bg-white text-violet-400";
    }

    return (
        <div className="rounded-xl border border-l-4 border-violet-100 border-l-[#6658f3] bg-violet-50/50 px-5 py-4">
            <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🧠</span>
                <p className="font-semibold text-[#4b3fc2]">Quick Check #{block.id}</p>
            </div>

            <p className="text-sm text-violet-600 mb-1">{block.exp}</p>
            <p className="text-lg font-medium text-violet-900 mb-4">{block.question}</p>

            <div className="flex flex-wrap gap-2">
                {block.items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setSelected(item)}
                        disabled={selected !== null}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg border-2 font-medium text-sm transition-colors ${getStyle(item)}`}
                    >
                        {selected !== null && block.correct === item && <Check size={14} />}
                        {selected === item && block.correct && item !== block.correct && <X size={14} />}
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}