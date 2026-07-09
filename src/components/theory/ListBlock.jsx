export default function ListBlock({ block }) {
    return (
        <ul className="flex flex-col gap-2 pl-8">
            {block.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6658f3]/50 shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}