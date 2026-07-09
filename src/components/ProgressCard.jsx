import { useEffect, useState } from "react";

export default function CircleProgress({ value, max, size = 180, strokeWidth = 14 }) {

    const percentage = max > 0 ? (value / max) * 100 : 0;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const center = size / 2;

    const color = '#6658f3';

    const [animatedPercent, setAnimatedPercent] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => setAnimatedPercent(percentage), 100);
        return () => clearTimeout(timeout);
    }, [percentage]);

    const offset = circumference - (animatedPercent / 100) * circumference;

    return (
        <div className="relative shrink-0" style={{ width: size, height: size }}>

            <svg width={size} height={size} className="-rotate-90">

                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth={strokeWidth}
                />

                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="transition-[stroke-dashoffset] duration-1000 ease-out"
                />

            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900 leading-none">
                    {Math.round(animatedPercent)}%
                </span>
            </div>

        </div>
    );
}