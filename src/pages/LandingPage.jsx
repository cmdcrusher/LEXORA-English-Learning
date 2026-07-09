import { Link } from "react-router-dom";
import logo from "../../public/B5D3CF06-7947-4DF4-939F-81253E22B2B3.png"
import { useState } from "react";
import {
    LayoutDashboard,
    BookOpen,
    Newspaper,
    Layers,
    ShoppingBag,
    GraduationCap,
    Flame,
    Gem,
    ArrowRight,
    RotateCw,
} from "lucide-react";

const FEATURES = [
    {
        icon: LayoutDashboard,
        title: "Dashboard",
        text: "Твой прогресс, стрик и цели на неделю — на одном экране.",
        color: "bg-violet-50 text-[#6658f3]",
    },
    {
        icon: BookOpen,
        title: "Уроки грамматики и лексики",
        text: "Короткая теория и сразу практика — без скучных лекций.",
        color: "bg-blue-50 text-blue-500",
    },
    {
        icon: Newspaper,
        title: "Практика Reading",
        text: "Тексты и задания, чтобы читать по-английски без страха.",
        color: "bg-emerald-50 text-emerald-500",
    },
    {
        icon: Layers,
        title: "Vocabulary Review",
        text: "Твои слова превращаются в карточки — учи их как в Quizlet.",
        color: "bg-amber-50 text-amber-500",
    },
    {
        icon: ShoppingBag,
        title: "Магазин",
        text: "Трать монеты на аксессуары, темы и плюшки для аватара.",
        color: "bg-pink-50 text-pink-500",
    },
    {
        icon: GraduationCap,
        title: "Платформа для учителей",
        text: "Классы, задания и аналитика ошибок — веди учеников прямо здесь.",
        color: "bg-indigo-50 text-indigo-500",
    },
];

const STEPS = [
    { n: "01", title: "Изучи правило", text: "Короткая теория с примерами и типичными ошибками." },
    { n: "02", title: "Закрепи на практике", text: "Сразу после теории — мини-практика по теме урока." },
    { n: "03", title: "Сохрани новые слова", text: "Незнакомые слова попадают прямо в твой словарь." },
    { n: "04", title: "Повтори карточками", text: "Review Words освежает память, пока слово не запомнится." },
];

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#fafafc]">
            <NavBar />
            <Hero />
            <Features />
            <HowItWorks />
            <FinalCta />
        </div>
    );
}

function NavBar() {
    return (
        <header className="border-b border-gray-100 bg-white/80 backdrop-blur sticky top-0 z-20">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="w-auto h-8" />
                    <p className="text-2xl text-violet-900 font-semibold">Lexora</p>
                </div>

                <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-500">
                    <a href="#features" className="hover:text-gray-900 transition-colors">Что внутри</a>
                    <a href="#how" className="hover:text-gray-900 transition-colors">Как это работает</a>
                </nav>

                <Link
                    to="/login"
                    className="bg-[#6658f3] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#5747e8] transition-colors"
                >
                    Войти
                </Link>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* мягкое фиолетовое свечение на фоне, без полноэкранного градиента */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-6 pt-16 sm:pt-20 pb-16 sm:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-1.5 bg-violet-50 text-[#6658f3] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                        Grammar · Vocabulary · Reading
                    </div>

                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] pb-6">
                        Учи английский как игру,
                        <br />
                        запоминай как привычку.
                    </p>

                    <p className="text-base sm:text-lg text-gray-500 pb-8 max-w-md">
                        Уроки грамматики, практика Reading и словарь, который сам
                        напоминает тебе повторить нужные слова — до того, как ты их забудешь.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 mb-10">
                        <Link
                            to="/login"
                            className="bg-[#6658f3] text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 hover:bg-[#5747e8] transition-colors"
                        >
                            Начать учиться <ArrowRight size={18} />
                        </Link>

                        <a
                            href="#how"
                            className="border border-gray-200 text-gray-700 font-semibold px-6 py-3.5 rounded-xl hover:border-gray-300 transition-colors"
                        >
                            Как это устроено
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1.5">
                            <Flame size={16} className="text-orange-500" /> стрики за практику каждый день
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Gem size={16} className="text-[#6658f3]" /> монеты за уроки
                        </span>
                    </div>
                </div>

                {/* Сигнатурный элемент: рабочая флип-карточка — то же самое, 
                    что пользователь увидит в Vocabulary Review */}
                <FlipCardDemo />
            </div>
        </section>
    );
}

const DEMO_WORDS = [
    { word: "achieve", translation: "достигать" },
    { word: "fluent", translation: "свободно говорящий" },
    { word: "stubborn", translation: "упрямый" },
];

function FlipCardDemo() {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const current = DEMO_WORDS[index];

    function next() {
        setFlipped(false);
        setTimeout(() => setIndex((i) => (i + 1) % DEMO_WORDS.length), 150);
    }

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={() => setFlipped((f) => !f)}
                className="relative w-full max-w-sm h-48 sm:h-56 [perspective:1200px] cursor-pointer group"
                aria-label="Перевернуть карточку"
            >
                <div
                    className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]"
                    style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                    {/* Front */}
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-white border-2 border-gray-100 rounded-3xl flex flex-col items-center justify-center gap-3 shadow-sm group-hover:border-violet-200 transition-colors">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Слово</span>
                        <span className="text-2xl sm:text-3xl font-bold text-gray-900">{current.word}</span>
                        <span className="text-xs text-gray-400 flex items-center gap-1 mt-2">
                            <RotateCw size={12} /> нажми, чтобы перевернуть
                        </span>
                    </div>

                    {/* Back */}
                    <div
                        className="absolute inset-0 [backface-visibility:hidden] bg-[#6658f3] rounded-3xl flex flex-col items-center justify-center gap-3"
                        style={{ transform: "rotateY(180deg)" }}
                    >
                        <span className="text-xs font-semibold text-violet-200 uppercase tracking-wide">Перевод</span>
                        <span className="text-2xl sm:text-3xl font-bold text-white">{current.translation}</span>
                    </div>
                </div>
            </button>

            <button
                onClick={next}
                className="mt-4 text-sm font-medium text-gray-400 hover:text-[#6658f3] transition-colors"
            >
                Следующее слово →
            </button>
        </div>
    );
}

function Features() {
    return (
        <section id="features" className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
            <div className="mb-10">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 pb-2">Всё в одном месте</p>
                <p className="text-gray-500">Не нужно прыгать между пятью приложениями.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {FEATURES.map((f) => (
                    <div
                        key={f.title}
                        className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-violet-200 hover:shadow-sm transition-all"
                    >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                            <f.icon size={20} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1.5">{f.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{f.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function HowItWorks() {
    return (
        <section id="how" className="bg-white border-y border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
                <div className="mb-12">
                    <p className="text-2xl text-gray-900 font-bold">Как проходит урок</p>
                    <p className="text-gray-500">Один и тот же цикл на каждой теме — так слова и правила закрепляются.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STEPS.map((s) => (
                        <div key={s.n}>
                            <div className="text-sm font-bold text-violet-300 mb-3">{s.n}</div>
                            <p className="font-bold text-gray-900 pb-1.5">{s.title}</p>
                            <p className="text-sm text-gray-500 leading-relaxed">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FinalCta() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24 text-center flex flex-col items-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 pb-4">
                Первое слово сегодня. Привычка — через неделю.
            </p>
            <p className="text-gray-500 pb-8 max-w-md mx-auto">
                Заведи аккаунт и начни первый урок за пару минут.
            </p>
            <Link
                to="/login"
                className="bg-[#6658f3] text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2 hover:bg-[#5747e8] transition-colors"
            >
                Начать бесплатно <ArrowRight size={18} />
            </Link>
        </section>
    );
}