export default function Block({ block }) {
    const isWrong = block.content?.startsWith("❌");
    const isRight = block.content?.startsWith("✅");

    const styles = isWrong
        ? "bg-red-50 text-red-700 border-red-200"
        : isRight
        ? "bg-green-50 text-green-700 border-green-200"
        : "bg-slate-100 text-slate-700 border-slate-200";

    return (
        <div className={`inline-block px-4 py-2 rounded-lg border font-mono text-sm ${styles}`}>
            {block.content}
        </div>
    );
}