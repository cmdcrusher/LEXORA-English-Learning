export default function TextBlock({ block }) {
    return <p className="text-slate-700 leading-relaxed text-start">{block.content}</p>;
}