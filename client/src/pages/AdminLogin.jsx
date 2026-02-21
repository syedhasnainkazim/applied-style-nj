import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5050/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/admin");
    } catch (err) {
      setError("Server error");
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark text-white">
      <form
        onSubmit={handleLogin}
        className="card p-8 w-full max-w-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center">Admin Login</h1>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

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

        <button
          type="submit"
          className="btn-primary w-full"
        >
          Login
        </button>
      </form>
    </section>
  );
}