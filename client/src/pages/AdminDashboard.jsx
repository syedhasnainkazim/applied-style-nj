import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetch(`${API_URL}/api/admin/contacts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setContacts(data))
      .catch(() => navigate("/admin-login"));
  }, []);

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Delete this contact?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/api/admin/contacts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Delete failed");

      // Remove from UI instantly
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete contact");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/admin-login");
  }

  return (
    <section className="min-h-screen bg-dark text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn-danger">
          Logout
        </button>
      </div>

      {contacts.length === 0 ? (
        <p>No contact submissions yet.</p>
      ) : (
        <div className="space-y-6">
          {contacts.map((c) => (
            <div
              key={c._id}
              className="p-6 bg-black border border-white/10 rounded-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{c.name}</h2>
                  <p className="text-gray-400">{c.email}</p>
                  <p className="mt-3">{c.message}</p>
                  <p className="text-xs text-gray-500 mt-4">
                    {new Date(c.createdAt).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(c._id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}