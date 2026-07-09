import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student"); // по умолчанию — student

    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username,
                    role, // попадёт в raw_user_meta_data, если у тебя есть триггер на profiles — он подхватит и это поле
                },
            },
        });

        if (error) {
            alert(error.message);
            return;
        }

        // подстраховка: если триггер на стороне БД не читает role из metadata,
        // пишем явно в profiles сразу после регистрации
        if (data.user) {
            const { error: profileError } = await supabase
                .from("profiles")
                .update({ role })
                .eq("id", data.user.id);

            if (profileError) console.error("Failed to set role:", profileError);
        }

        if (data.session) {
            navigate("/dashboard");
        } else {
            navigate("/login");
        }
    }

    return (
        <form onSubmit={handleRegister} className="text-start">
            <div className="my-4">
                <p>First name</p>
                <input
                    placeholder="Enter your first name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#6658f3]"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="my-4">
                <p>Email</p>
                <input
                    placeholder="Enter your email"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#6658f3]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="my-4">
                <p>Password</p>
                <input
                    type="password"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#6658f3]"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="my-4">
                <p>I am a...</p>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#6658f3] bg-white"
                >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </div>

            <button className="w-full bg-[#6658f3] text-white px-4 py-3 rounded-xl">
                Зарегистрироваться
            </button>
        </form>
    );
}