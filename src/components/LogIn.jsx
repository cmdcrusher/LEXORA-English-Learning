import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert(error.message);
      return;
    }

    // успех → на dashboard
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleLogin} className="text-start">
        <div className="my-4">
            <p className="">Email</p>
            <input
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#6658f3]"
            />
        </div>

        <div className="my-4">
            <p className="">Password</p>
            <input
                type="password"
                placeholder="Enter a password" 
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#6658f3]"
            />
        </div>

        <button className="w-full bg-[#6658f3] text-white px-4 py-3 rounded-xl">
            Login
        </button>
    </form>
  );
}