import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();

const app = express();

/* =====================
   Middleware
===================== */
app.use(
  cors({
    origin: true, // 🔒 Lock to frontend URL in production
    credentials: true,
  })
);

app.use(express.json());

/* =====================
   API Routes
===================== */

// 🔐 Authentication
// POST /api/auth/login
app.use("/api/auth", authRoutes);

// 🛠 Admin protected routes
// GET /api/admin/contacts
// PATCH /api/admin/contacts/:id
// DELETE /api/admin/contacts/:id
app.use("/api/admin", adminRoutes);

// 📩 Public contact submission
// POST /api/contact
app.use("/api/contact", contactRoutes);

// 🩺 Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

/* =====================
   Database + Server
===================== */

const PORT = process.env.PORT || 5050;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });