import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
<h1 style={{color: "red"}}>TEST</h1>

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post(
        "https://jobtrack-backend-wbvf.onrender.com/api/auth/signup",
        { name, email, password }
      );
      navigate("/");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-sm bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Create Account
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Sign Up
          </button>

        </div>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-teal-600 font-medium">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}


<h1 style={{color: "red"}}>TEST</h1>


export default Signup;
