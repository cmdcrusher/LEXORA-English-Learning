import TheoryRenderer from "../TheoryRenderer";

export default function RememberBlock({ block }) {
    return (
        <div className="rounded-xl border border-l-4 border-emerald-100 border-l-emerald-400 bg-emerald-50/50 px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🧠</span>
                <p className="font-semibold text-emerald-700">Remember</p>
            </div>
            <TheoryRenderer theory={block.content} />
        </div>
    );
}