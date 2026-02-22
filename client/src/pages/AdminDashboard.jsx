import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [quotes, setQuotes] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");

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
  }, [API_URL, token, navigate]);

  // ===== FILTER + SEARCH + SERVICE + SORT =====
  const filteredQuotes = useMemo(() => {
    return quotes
      .filter((q) => {
        if (filter === "handled") return q.handled;
        if (filter === "unhandled") return !q.handled;
        return true;
      })
      .filter((q) => {
        if (serviceFilter === "all") return true;
        return q.service === serviceFilter;
      })
      .filter((q) =>
        q.name?.toLowerCase().includes(search.toLowerCase()) ||
        q.phone?.includes(search)
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
      );
  }, [quotes, filter, serviceFilter, search]);

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

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Quote Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* ===== STATS ===== */}
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <StatCard title="Total Quotes" value={total} />
        <StatCard title="Unhandled" value={unhandled} color="yellow" />
        <StatCard title="Handled" value={handled} color="green" />
      </div>

      {/* ===== FILTERS ===== */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">

        <div className="flex flex-wrap gap-3 items-center">

          {/* Status Buttons */}
          {["all", "unhandled", "handled"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-lg border transition ${
                filter === type
                  ? "bg-primary text-white border-primary shadow-md"
                  : "border-white/20 text-gray-400 hover:border-white/40 hover:text-white"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}

          {/* Service Dropdown */}
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="px-4 py-2 bg-black border border-white/20 rounded-lg text-gray-300 focus:outline-none focus:border-primary"
          >
            <option value="all">All Services</option>
            <option value="Window Tint">Window Tint</option>
            <option value="Vinyl Wrap">Vinyl Wrap</option>
            <option value="Paint Protection Film">Paint Protection Film</option>
            <option value="Detailing">Detailing</option>
          </select>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-5 py-2 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-primary transition w-full md:w-80"
        />
      </div>

      {/* ===== LIST ===== */}
      <div className="space-y-5">
        {filteredQuotes.map((q) => (
          <div
            key={q._id}
            className="p-6 bg-black border border-white/10 rounded-xl hover:border-white/20 transition flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{q.name}</h2>
              <p className="text-gray-400 text-sm">{q.email}</p>

              <div className="mt-2 mb-2">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
                  {q.service || "Service Not Selected"}
                </span>
              </div>

              <p className="text-gray-400 text-sm">
                {q.year} {q.make} {q.model}
              </p>

              <p className="text-gray-400 text-sm">{q.phone}</p>

              <p className="text-gray-500 text-xs mt-2">
                Submitted{" "}
                {q.createdAt
                  ? new Date(q.createdAt).toLocaleDateString()
                  : "—"}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <span
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
                  q.handled
                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                }`}
              >
                {q.handled ? "Handled" : "Unhandled"}
              </span>

              {!q.handled && (
                <button
                  onClick={() => handleMark(q._id)}
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Mark
                </button>
              )}

              <a
                href={`mailto:${q.email}`}
                className="text-purple-400 hover:text-purple-300 transition"
              >
                Email
              </a>

              <button
                onClick={() => handleDelete(q._id)}
                className="text-red-500 hover:text-red-400 transition"
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

/* ===== STAT CARD COMPONENT ===== */
function StatCard({ title, value, color }) {
  const colorMap = {
    yellow: "text-yellow-400 border-yellow-500/20",
    green: "text-green-400 border-green-500/20",
  };

  return (
    <div
      className={`relative p-8 bg-gradient-to-br from-black via-neutral-900 to-black border border-white/10 rounded-2xl hover:border-primary/40 transition shadow-lg ${
        color ? colorMap[color] : ""
      }`}
    >
      <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl opacity-40"></div>
      <p className="text-gray-400 uppercase text-xs tracking-widest mb-2">
        {title}
      </p>
      <p className="text-5xl font-extrabold tracking-tight">
        {value}
      </p>
    </div>
  );
}