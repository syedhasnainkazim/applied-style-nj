import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();

const app = express();

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

// Allow frontend domain in production
const allowedOrigins = [
  "http://localhost:5173",
  "https://appliedstylenj.com",
  "https://www.appliedstylenj.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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
app.use("/api/admin", adminRoutes);

// 📩 Public contact submission
app.use("/api/contact", contactRoutes);

// 🩺 Health check (Render uses this)
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

/* =====================
   API Routes
===================== */

// 🔐 Authentication
// POST /api/auth/login
app.use("/api/auth", authRoutes);

// 🛠 Admin protected routes
app.use("/api/admin", adminRoutes);

// 📩 Public contact submission
app.use("/api/contact", contactRoutes);

// 🩺 Health check (Render uses this)
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