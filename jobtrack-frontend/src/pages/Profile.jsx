import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("https://jobtrack-backend-wbvf.onrender.com/api/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setUser(res.data));
  }, []);

  if (!user) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default Profile;
