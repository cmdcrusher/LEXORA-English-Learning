import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/B5D3CF06-7947-4DF4-939F-81253E22B2B3.png"
import Register from "../components/SignUp";
import Login from "../components/LogIn";
import { Sparkles, TrendingUp, Globe } from "lucide-react";

const FEATURES = [
    {
        icon: Sparkles,
        title: "Personalized Learning",
        text: "Lessons tailored to your level and goals",
    },
    {
        icon: TrendingUp,
        title: "Track Progress",
        text: "Monitor your improvement every day",
    },
    {
        icon: Globe,
        title: "Learn Anywhere",
        text: "Study on any device, anytime",
    },
];

// слова, которые "плавают" на левой панели — привязка к фиче Vocabulary,
// а не случайная декорация
const FLOATING_WORDS = [
    { word: "achieve", top: "12%", left: "8%", delay: 0 },
    { word: "fluent", top: "68%", left: "5%", delay: 0.6 },
    { word: "curious", top: "40%", left: "72%", delay: 1.1 },
    { word: "stubborn", top: "82%", left: "62%", delay: 1.7 },
];

export default function LoginPage() {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="min-h-screen flex bg-[#faf9fe]">
            <BrandPanel />

            <div className="flex-1 flex flex-col">
                <header className="flex items-center justify-between px-6 py-6 lg:px-10">
                    <div className="flex items-center gap-2 lg:hidden">
                        <img src={logo} alt="" className="w-auto h-7" />
                        <p className="text-xl text-gray-900 font-semibold">Lexora</p>
                    </div>

                    <div className="flex items-center gap-2 text-sm ml-auto">
                        <p className="text-gray-400">
                            {isSignUp ? "Already have an account?" : "Don't have an account?"}
                        </p>
                        <button
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="font-semibold text-[#6658f3] hover:text-[#5747e8] transition-colors"
                        >
                            {isSignUp ? "Log in" : "Sign up"}
                        </button>
                    </div>
                </header>

                <div className="flex-1 flex items-center justify-center px-6 pb-16">
                    <div className="w-full max-w-sm">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isSignUp ? "signup" : "login"}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.18 }}
                            >
                                <p className="text-2xl font-bold text-gray-900 pb-1">
                                    {isSignUp ? "Create your account" : "Welcome back"}
                                </p>
                                <p className="text-gray-400 pb-8">
                                    {isSignUp
                                        ? "Start your journey to fluency"
                                        : "Continue your journey to fluency"}
                                </p>

                                {isSignUp ? <Register /> : <Login />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

function BrandPanel() {
    return (
        <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] relative overflow-hidden bg-gradient-to-br from-[#6658f3] to-[#4c3fd1] px-12 py-10">
            {/* плавающие слова-карточки */}
            {FLOATING_WORDS.map((w) => (
                <motion.div
                    key={w.word}
                    className="absolute bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3.5 py-2 text-sm font-medium text-white/80"
                    style={{ top: w.top, left: w.left }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: w.delay,
                    }}
                >
                    {w.word}
                </motion.div>
            ))}

            <div className="relative flex flex-col h-full w-full">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="w-auto h-8 brightness-0 invert" />
                    <p className="text-2xl text-white font-semibold">Lexora</p>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-8 max-w-sm">
                    <p className="text-3xl font-bold text-white leading-snug">
                        Learn English like a game, remember it like a habit.
                    </p>

                    <div className="flex flex-col gap-5">
                        {FEATURES.map((f) => (
                            <div key={f.title} className="flex items-start gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                                    <f.icon size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">{f.title}</p>
                                    <p className="text-sm text-white/60">{f.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-xs text-white/40">© {new Date().getFullYear()} Lexora</p>
            </div>
        </div>
    );
}

function SocialButton({ label, full }) {
    return (
        <button
            className={`${
                full ? "w-full" : "flex-1"
            } border-2 border-gray-200 text-gray-700 font-medium px-4 py-3 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm`}
        >
            Continue with {label}
        </button>
    );
}