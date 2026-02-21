import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import quoteRoutes from "./routes/quote.js"; // ✅ NEW

dotenv.config();

const app = express();

/* =====================
   Middleware
===================== */

const allowedOrigins = [
  "http://localhost:5173",
  "https://appliedstylenj.com",
  "https://www.appliedstylenj.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (
        !origin ||
        allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app")
      ) {
        callback(null, true);
      } else {
        console.error("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

/* =====================
   Routes
===================== */

// Auth routes
app.use("/api/auth", authRoutes);

// Admin routes (protected)
app.use("/api/admin", adminRoutes);

// Contact (if you still want generic contact)
app.use("/api/contact", contactRoutes);

// ✅ NEW: Quote submission route
app.use("/api/quotes", quoteRoutes);

// Health check (Render uses this)
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

/* =====================
   Database + Server
===================== */

const PORT = process.env.PORT || 10000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });