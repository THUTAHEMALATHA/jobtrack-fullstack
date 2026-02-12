import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [applications, setApplications] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const fetchApplications = async () => {
    const res = await axios.get(
      "https://thutahemalatha-jobtrack-fullstack.onrender.com",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setApplications(res.data);
  };

  const addApplication = async () => {
    if (!company || !role) return;

    await axios.post(
      "https://thutahemalatha-jobtrack-fullstack.onrender.com",
      { company, role, status: "Applied" },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setCompany("");
    setRole("");
    fetchApplications();
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const getStatusColor = (status) => {
    if (status === "Applied") return "bg-blue-100 text-blue-600";
    if (status === "Interview") return "bg-yellow-100 text-yellow-700";
    if (status === "Rejected") return "bg-red-100 text-red-600";
    if (status === "Offer") return "bg-green-100 text-green-600";
  };

  return (
    <>
      <Navbar />

<div className="min-h-screen bg-gray-50 flex justify-center py-16">
        <div className="w-full max-w-3xl">

          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Job Dashboard
            </h2>
            <p className="text-gray-500 mt-2">
              Track and manage your applications efficiently
            </p>
          </div>

          {/* Add Application Card   */}
          <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />

              <input
                className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />

              <button
                onClick={addApplication}
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
              >
                Add
              </button>
            </div>
          </div>

          {/* Filter & Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <select
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>All</option>
              <option>Applied</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Offer</option>
            </select>

            <input
              className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Search by company..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Applications List */}
          <div className="space-y-6">
            {applications
              .filter(
                (app) =>
                  (filter === "All" || app.status === filter) &&
                  app.company
                    .toLowerCase()
                    .includes(search.toLowerCase())
              )
              .map((app) => (
                <div
                  key={app.id}
                  className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row justify-between md:items-center"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {app.company}
                    </h3>
                    <p className="text-gray-500 mt-1">
                      {app.role}
                    </p>

                    <span
                      className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}
                    >
                      {app.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <select
                      value={app.status}
                      onChange={async (e) => {
                        await axios.patch(
                          `https://thutahemalatha-jobtrack-fullstack.onrender.com${app.id}`,
                          { status: e.target.value },
                          { headers: { Authorization: `Bearer ${token}` } }
                        );
                        fetchApplications();
                      }}
                      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option>Applied</option>
                      <option>Interview</option>
                      <option>Rejected</option>
                      <option>Offer</option>
                    </select>

                    <button
                      onClick={async () => {
                        await axios.delete(
                          `https://thutahemalatha-jobtrack-fullstack.onrender.com${app.id}`,
                          { headers: { Authorization: `Bearer ${token}` } }
                        );
                        fetchApplications();
                      }}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
