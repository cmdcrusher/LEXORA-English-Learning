import TheoryRenderer from "../TheoryRenderer";

export default function EndBlock({ block }) {
    return (
        <div className="rounded-xl border border-l-4 border-violet-100 border-l-[#6658f3] bg-gradient-to-br from-violet-50 to-white px-5 py-5">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🏆</span>
                <p className="font-semibold text-[#4b3fc2]">End of lesson</p>
            </div>
            <TheoryRenderer theory={block.content} />
        </div>
    );
}