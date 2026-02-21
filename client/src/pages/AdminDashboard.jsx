import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [quotes, setQuotes] = useState([]);
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

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Delete this quote?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/api/admin/quotes/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Delete failed");

      setQuotes((prev) => prev.filter((q) => q._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete quote");
    }
  }

  async function handleMarkHandled(id) {
    try {
      const res = await fetch(`${API_URL}/api/admin/quotes/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Update failed");

      const updated = await res.json();

      setQuotes((prev) =>
        prev.map((q) => (q._id === id ? updated : q))
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update quote");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/admin-login");
  }

  return (
    <section className="min-h-screen bg-dark text-white p-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Quote Dashboard</h1>
        <button onClick={handleLogout} className="btn-danger">
          Logout
        </button>
      </div>

      {quotes.length === 0 ? (
        <p>No quote submissions yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-left text-sm uppercase text-gray-400">
                <th className="py-4">Name</th>
                <th>Service</th>
                <th>Vehicle</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Date</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {quotes.map((q) => (
                <tr
                  key={q._id}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="py-4">
                    <div className="font-semibold">{q.name}</div>
                    <div className="text-xs text-gray-400">{q.email}</div>
                  </td>

                  <td>{q.service}</td>

                  <td>
                    {q.year} {q.make} {q.model}
                  </td>

                  <td>{q.phone}</td>

                  <td>
                    {q.handled ? (
                      <span className="text-green-400 text-sm">
                        ✓ Handled
                      </span>
                    ) : (
                      <span className="text-yellow-400 text-sm">
                        • Unhandled
                      </span>
                    )}
                  </td>

                  <td className="text-sm text-gray-400">
                    {new Date(q.createdAt).toLocaleDateString()}
                  </td>

                  <td className="text-right space-x-3">
                    {!q.handled && (
                      <button
                        onClick={() => handleMarkHandled(q._id)}
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Mark
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(q._id)}
                      className="text-red-500 hover:text-red-400 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}