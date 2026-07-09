import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState, useEffect, useMemo } from "react";
import { lessons_1, lessons_2, lessons_3 } from "../data/lessons_metadata";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { 
    BookOpen, 
    Star, 
    Lock, 
    ArrowRight, 
    CheckCircle2, 
    Check 
} from "lucide-react";


const ICON_STYLES = [
    { bg: "bg-green-100", text: "text-green-600" },
    { bg: "bg-blue-100", text: "text-blue-600" },
    { bg: "bg-purple-100", text: "text-[#6658f3]" },
    { bg: "bg-rose-100", text: "text-rose-500" },
    { bg: "bg-amber-100", text: "text-amber-500" },
];


export default function LessonHomePage() {
    const [progressMap, setProgressMap] = useState(new Map());
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchProgress() {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                setLoading(false);
                return;
            }


            const { data, error } = await supabase
                .from("lesson_progress")
                .select("lesson_id, completed, best_score, total_questions")
                .eq("user_id", user.id);


            if (!error && data) {
                setProgressMap(
                    new Map(
                        data.map((row) => [
                            row.lesson_id,
                            row
                        ])
                    )
                );
            }

            setLoading(false);
        }


        fetchProgress();
    }, []);



    // Первый урок открыт всегда.
    // Следующие открываются после прохождения предыдущего.
    const isUnlocked = (lessonId) => {
        return (
            lessonId === 1 ||
            progressMap.get(lessonId - 1)?.completed
        );
    };



    const units = useMemo(
        () => [
            {
                title: "Unit 1",
                lessons: lessons_1
            },
            {
                title: "Unit 2",
                lessons: lessons_2
            },
            {
                title: "Unit 3",
                lessons: lessons_3
            },
        ],
        []
    );



    return (
        <div className="bg-[#fafafc] min-h-screen">

            <Sidebar />


            <div className="lg:pl-64">

                <Header />


                <main className="px-8 py-6 min-w-full mx-auto">

                    <p className="text-5xl font-bold text-gray-900">
                        Lessons
                    </p>

                    <p className="text-gray-500 pt-1 pb-6">
                        Learn step by step and build your skills.
                    </p>



                    {loading ? (

                        <p className="text-gray-400">
                            Loading your progress...
                        </p>

                    ) : (

                        <div className="flex flex-col gap-10">


                            {units.map((unit) => (

                                <section key={unit.title}>


                                    <div className="flex items-center gap-3 mb-4">

                                        <p className="font-semibold text-gray-800">
                                            {unit.title}
                                        </p>


                                        <div className="flex-1 h-px bg-gray-200" />

                                    </div>



                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


                                        {unit.lessons.map((lesson, idx) => (

                                            <LessonCard
                                                key={lesson.id}
                                                lesson={lesson}
                                                iconStyle={
                                                    ICON_STYLES[
                                                        idx % ICON_STYLES.length
                                                    ]
                                                }
                                                unlocked={
                                                    isUnlocked(lesson.id)
                                                }
                                                progress={
                                                    progressMap.get(
                                                        lesson.id
                                                    )
                                                }
                                            />

                                        ))}


                                    </div>


                                </section>

                            ))}


                        </div>

                    )}


                </main>

            </div>

        </div>
    );
}





function LessonCard({
    lesson,
    iconStyle,
    unlocked,
    progress
}) {


    const total =
        progress?.total_questions ??
        lesson.quiz?.length ??
        0;


    const best =
        progress?.best_score ??
        0;


    const completed =
        progress?.completed ??
        false;


    const perfect =
        total > 0 &&
        best === total;


    const percent =
        total
            ? Math.round((best / total) * 100)
            : 0;


    // XP = количество вопросов × 5
    const xp = total * 5;



    if (!unlocked) {

        return (

            <div className="
                flex flex-col justify-between
                px-5 py-4
                rounded-xl
                border-2 border-gray-100
                bg-gray-50
                opacity-70
            ">


                <div>


                    <div className="
                        w-10 h-10
                        rounded-full
                        bg-gray-200
                        flex items-center justify-center
                        mb-3
                    ">

                        <Lock 
                            size={18}
                            className="text-gray-400"
                        />

                    </div>



                    <p className="text-gray-400 font-medium text-sm">
                        Lesson {lesson.id}
                    </p>


                    <p className="text-gray-500 font-semibold">
                        {lesson.title}
                    </p>


                </div>



                <div className="
                    mt-4
                    text-center
                    text-sm
                    text-gray-400
                    border
                    border-gray-200
                    rounded-xl
                    py-2
                ">

                    Complete previous lesson to unlock

                </div>


            </div>

        );

    }





    return (

        <div className="
            flex flex-col justify-between
            px-5 py-4
            rounded-xl
            border-2
            border-[#6658f3]/20
            hover:border-[#6658f3]
            bg-white
            transition-colors
        ">


            <div>


                <div className="
                    flex
                    items-center
                    justify-between
                    mb-3
                ">


                    <div className={`
                        w-10 h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        ${iconStyle.bg}
                    `}>

                        <BookOpen
                            size={18}
                            className={iconStyle.text}
                        />

                    </div>



                    {completed && (

                        <CheckCircle2
                            size={20}
                            className="text-green-500"
                        />

                    )}


                </div>




                <p className="
                    text-[#6658f3]
                    font-medium
                    text-sm
                ">

                    Lesson {lesson.id}

                </p>



                <p className="
                    text-gray-900
                    font-semibold
                    mt-0.5
                ">

                    {lesson.title}

                </p>





                {total > 0 && (

                    <div className="
                        mt-2
                        text-sm
                        text-gray-500
                    ">

                        {total} questions

                    </div>

                )}






                {best > 0 && (

                    <div className="mt-3">


                        <div className="
                            h-1.5
                            bg-gray-100
                            rounded-full
                            overflow-hidden
                        ">


                            <div
                                className={`
                                    h-full
                                    rounded-full
                                    transition-all
                                    ${
                                        perfect
                                        ? "bg-green-500"
                                        : "bg-[#6658f3]"
                                    }
                                `}
                                style={{
                                    width: `${percent}%`
                                }}
                            />


                        </div>




                        <div className="
                            flex
                            items-center
                            gap-1
                            mt-1
                        ">


                            <p className="
                                text-xs
                                text-gray-400
                            ">

                                {best}/{total} questions

                            </p>


                            {perfect && (

                                <Check
                                    size={12}
                                    className="text-green-500"
                                />

                            )}


                        </div>


                    </div>

                )}



            </div>





            <div className="
                flex
                items-center
                justify-between
                mt-4
            ">



                <span className="
                    flex
                    items-center
                    gap-1
                    text-sm
                    font-medium
                    text-[#6658f3]
                ">


                    <Star
                        size={14}
                        className="fill-[#6658f3]"
                    />


                    +{xp} XP


                </span>





                <Link to={`/lesson/${lesson.id}`}>

                    <button
                        className="
                            flex
                            items-center
                            gap-1.5
                            bg-[#6658f3]
                            text-white
                            rounded-xl
                            px-4
                            py-2
                            text-sm
                            font-medium
                            hover:bg-[#5747e8]
                            hover:cursor-pointer
                            transition-colors
                        "
                    >

                        {
                            perfect
                            ? "Retry"
                            : completed
                            ? "Continue"
                            : best > 0
                            ? "Continue"
                            : "Start"
                        }


                        <ArrowRight size={14}/>


                    </button>

                </Link>



            </div>



        </div>

    );

}