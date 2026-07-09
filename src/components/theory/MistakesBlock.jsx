import TheoryRenderer from "../TheoryRenderer";

export default function MistakeBlock({ block }) {
    return (
        <div className="rounded-xl border border-l-4 border-rose-100 border-l-rose-400 bg-rose-50/50 px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">⚠️</span>
                <p className="font-semibold text-rose-700">Common Mistakes</p>
            </div>
            <TheoryRenderer theory={block.content} />
        </div>
    );
}