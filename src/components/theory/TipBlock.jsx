import TheoryRenderer from "../TheoryRenderer";

export default function TipBlock({ block }) {
    return (
        <div className="rounded-xl border border-l-4 border-amber-100 border-l-amber-400 bg-amber-50/50 px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">💡</span>
                <p className="font-semibold text-amber-800">Tip</p>
            </div>
            <TheoryRenderer theory={block.content} />
        </div>
    );
}