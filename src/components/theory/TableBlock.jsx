export default function TableBlock({ block }) {
    return (
        <div className="overflow-hidden rounded-xl border border-slate-200 w-fit mx-auto">
            <table className="border-collapse">
                <thead>
                    <tr>
                        {block.headers.map((header) => (
                            <th
                                key={header}
                                className="border-b border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-600 text-center"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {block.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="even:bg-slate-50/50">
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-5 py-2.5 text-center text-slate-700 border-t border-slate-100"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}