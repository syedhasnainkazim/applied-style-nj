import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/admin-login";
      return;
    }

    async function fetchContacts() {
      try {
        const res = await fetch(
          `${API_URL}/api/admin/contacts`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          // If unauthorized, clear token + redirect
          localStorage.removeItem("token");
          window.location.href = "/admin-login";
          return;
        }

        const data = await res.json();
        setContacts(data);
      } catch (err) {
        setError("Failed to load contact submissions");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();
  }, []);

  return (
    <section className="min-h-screen bg-dark text-white p-12">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/admin-login";
            }}
            className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {loading && (
          <p className="text-gray-400">Loading submissions...</p>
        )}

        {error && (
          <p className="text-red-500">{error}</p>
        )}

        {!loading && contacts.length === 0 && (
          <p className="text-gray-400">
            No contact submissions yet.
          </p>
        )}

        <div className="space-y-6">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className="card p-6 space-y-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">
                  {contact.name}
                </h3>
                <span className="text-xs text-gray-500">
                  {new Date(contact.createdAt).toLocaleString()}
                </span>
              </div>

              <p className="text-gray-400 text-sm">
                {contact.email}
              </p>

              {contact.phone && (
                <p className="text-gray-400 text-sm">
                  {contact.phone}
                </p>
              )}

              <p className="text-gray-300 mt-2">
                {contact.message}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}