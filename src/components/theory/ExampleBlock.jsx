import TheoryRenderer from "../TheoryRenderer";

export default function ExampleBlock({ block }) {
    return (
        <div className="rounded-xl border border-l-4 border-slate-200 border-l-slate-400 bg-slate-50 px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">👀</span>
                <p className="font-semibold text-slate-700">Example</p>
            </div>
            <TheoryRenderer theory={block.content} />
        </div>
    );
}