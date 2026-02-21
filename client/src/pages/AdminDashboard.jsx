import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [quotes, setQuotes] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetch(`${API_URL}/api/admin/quotes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setQuotes(data))
      .catch(() => navigate("/admin-login"));
  }, []);

  const filteredQuotes = useMemo(() => {
    return quotes
      .filter((q) => {
        if (filter === "handled") return q.handled;
        if (filter === "unhandled") return !q.handled;
        return true;
      })
      .filter((q) =>
        q.name.toLowerCase().includes(search.toLowerCase()) ||
        q.phone.includes(search)
      );
  }, [quotes, filter, search]);

  const total = quotes.length;
  const unhandled = quotes.filter((q) => !q.handled).length;
  const handled = quotes.filter((q) => q.handled).length;

  async function handleDelete(id) {
    if (!window.confirm("Delete this quote?")) return;

    const res = await fetch(`${API_URL}/api/admin/quotes/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      setQuotes((prev) => prev.filter((q) => q._id !== id));
    }
  }

  async function handleMark(id) {
    const res = await fetch(`${API_URL}/api/admin/quotes/${id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      const updated = await res.json();
      setQuotes((prev) =>
        prev.map((q) => (q._id === id ? updated : q))
      );
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/admin-login");
  }

  return (
    <section className="min-h-screen bg-dark text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Quote Dashboard</h1>
        <button onClick={handleLogout} className="btn-danger">
          Logout
        </button>
      </div>

      {/* ===== Stats Cards ===== */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-black border border-white/10 rounded-lg">
          <p className="text-gray-400">Total Quotes</p>
          <p className="text-3xl font-bold">{total}</p>
        </div>
        <div className="p-6 bg-black border border-white/10 rounded-lg">
          <p className="text-gray-400">Unhandled</p>
          <p className="text-3xl font-bold text-yellow-400">{unhandled}</p>
        </div>
        <div className="p-6 bg-black border border-white/10 rounded-lg">
          <p className="text-gray-400">Handled</p>
          <p className="text-3xl font-bold text-green-400">{handled}</p>
        </div>
      </div>

      {/* ===== Filters + Search ===== */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="flex gap-3">
          {["all", "unhandled", "handled"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded border ${
                filter === type
                  ? "bg-primary text-white"
                  : "border-white/20 text-gray-400"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search by name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 bg-black border border-white/20 rounded"
        />
      </div>

      {/* ===== Table ===== */}
      <div className="space-y-4">
        {filteredQuotes.map((q) => (
          <div
            key={q._id}
            className="p-6 bg-black border border-white/10 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{q.name}</h2>
              <p className="text-gray-400 text-sm">{q.email}</p>
              <p className="text-gray-400 text-sm">
                {q.year} {q.make} {q.model}
              </p>
              <p className="text-gray-400 text-sm">{q.phone}</p>
            </div>

            <div className="flex items-center gap-6">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  q.handled
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {q.handled ? "Handled" : "Unhandled"}
              </span>

              {!q.handled && (
                <button
                  onClick={() => handleMark(q._id)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Mark
                </button>
              )}

              <button
                onClick={() => handleDelete(q._id)}
                className="text-red-500 hover:text-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}