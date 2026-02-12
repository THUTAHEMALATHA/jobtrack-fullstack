import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-slate-900 py-4 flex justify-center">

      <div className="w-full max-w-3xl flex justify-between items-center text-white px-4">

        <h1 className="text-lg font-semibold">JobTrack</h1>

        <div className="flex gap-6 items-center">
          <Link to="/dashboard" className="hover:text-teal-400">
            Dashboard
          </Link>
          <Link to="/profile" className="hover:text-teal-400">
            Profile
          </Link>
          <button
            onClick={logout}
            className="bg-teal-500 px-4 py-2 rounded-md hover:bg-teal-600 transition"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
