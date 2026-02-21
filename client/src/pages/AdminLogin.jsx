import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL; // e.g. https://applied-style-nj.onrender.com

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      if (!API_URL) {
        setError("Missing VITE_API_URL env var.");
        return;
      }

      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark text-white">
      <form onSubmit={handleLogin} className="card p-8 w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">Admin Login</h1>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded bg-black border border-white/20"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-black border border-white/20"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-primary w-full">
          Login
        </button>
      </form>
    </section>
  );
}