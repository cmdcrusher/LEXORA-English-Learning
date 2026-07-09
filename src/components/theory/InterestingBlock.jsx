import TheoryRenderer from "../TheoryRenderer";

export default function InterestingBlock({ block }) {
    return (
        <div className="rounded-xl border border-l-4 border-cyan-100 border-l-cyan-400 bg-cyan-50/50 px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">✨</span>
                <p className="font-semibold text-cyan-700">Interesting</p>
            </div>
            <TheoryRenderer theory={block.content} />
        </div>
    );
}