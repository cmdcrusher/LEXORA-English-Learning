import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function JoinClassCard({ onJoined }) {
    const [code, setCode] = useState("");
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState("");

    async function handleJoin(e) {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        const { error } = await supabase.rpc("join_class", { p_join_code: code.trim() });

        if (error) {
            setStatus("error");
            setErrorMsg("Код не найден. Проверь и попробуй ещё раз.");
            return;
        }

        setStatus("success");
        setCode("");
        onJoined?.();
    }

    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <h3 className="font-bold text-gray-900 mb-1">Присоединиться к классу</h3>
            <p className="text-sm text-gray-500 mb-4">Введи код, который дал учитель</p>

            <form onSubmit={handleJoin} className="flex gap-2">
                <input
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="7K3XQP"
                    maxLength={6}
                    className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-mono tracking-widest uppercase"
                />
                <button
                    type="submit"
                    disabled={status === "loading" || code.length < 4}
                    className="bg-[#6658f3] text-white font-semibold px-5 rounded-xl hover:bg-[#5747e8] transition-colors disabled:opacity-40"
                >
                    Войти
                </button>
            </form>

            {status === "error" && <p className="text-sm text-red-500 mt-2">{errorMsg}</p>}
            {status === "success" && <p className="text-sm text-emerald-500 mt-2">Готово, ты в классе 🎉</p>}
        </div>
    );
}