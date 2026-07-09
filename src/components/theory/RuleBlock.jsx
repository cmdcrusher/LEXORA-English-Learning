import TheoryRenderer from "../TheoryRenderer";

export default function RuleBlock({ block }) {
    return (
        <div className="rounded-xl border border-l-4 border-sky-100 border-l-sky-400 bg-sky-50/40 px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">📘</span>
                <p className="font-semibold text-sky-800">The Rule</p>
            </div>
            <TheoryRenderer theory={block.content} />
        </div>
    );
}