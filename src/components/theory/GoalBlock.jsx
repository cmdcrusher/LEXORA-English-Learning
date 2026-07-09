import TheoryRenderer from "../TheoryRenderer";

export default function GoalBlock({ block }) {
    return (
        <div className="rounded-xl border border-l-4 border-violet-100 border-l-[#6658f3] bg-violet-50/50 px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🎯</span>
                <p className="font-semibold text-[#4b3fc2]">Goal</p>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{block.goal}</p>
            <ul className="flex flex-col gap-1.5 mt-3">
                {block.items.map((item, index) => (
                    <li key={index} className="text-sm text-slate-700 bg-white rounded-lg px-3 py-2 border border-violet-100">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}