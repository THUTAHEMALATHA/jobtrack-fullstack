import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://thutahemalatha-jobtrack-fullstack.onrender.com/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-700">

      <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-10 text-white">

        <h1 className="text-3xl font-semibold text-center mb-6">
          Sign In
        </h1>

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-teal-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-teal-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-teal-500 py-3 rounded-lg font-medium hover:bg-teal-600 transition"
          >
            Login
          </button>
        </div>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="underline text-teal-300">
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;
