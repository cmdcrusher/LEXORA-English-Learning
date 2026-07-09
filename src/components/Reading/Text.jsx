const difficultyStyles = {
    easy: "bg-green-50 text-green-600",
    medium: "bg-amber-50 text-amber-600",
    hard: "bg-red-50 text-red-600",
};

export default function ReadingText({ lesson }) {

    const paragraphs = lesson.text
        .split("\n")
        .map(p => p.trim())
        .filter(Boolean);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

            <div className="flex items-center gap-2 mb-4">
                <span className={`px-2.5 py-1 rounded-md text-xs font-medium capitalize ${difficultyStyles[lesson.difficulty] ?? difficultyStyles.easy}`}>
                    {lesson.difficulty}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-[#6658f3]">
                    {lesson.level}
                </span>
            </div>

            <p className="text-2xl font-bold text-gray-900">{lesson.title}</p>
            <p className="text-gray-500 mt-1.5">{lesson.description}</p>

            <div className="mt-6 flex flex-col gap-4 text-gray-700 leading-relaxed text-[17px]">
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

        </div>
    )
}