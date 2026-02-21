import express from "express";
import Quote from "../models/Quote.js";
import { verifyToken, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

/* ==========================================
   GET ALL QUOTES
   GET /api/admin/quotes
========================================== */
router.get("/quotes", verifyToken, requireAdmin, async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ==========================================
   DELETE QUOTE
   DELETE /api/admin/quotes/:id
========================================== */
router.delete("/quotes/:id", verifyToken, requireAdmin, async (req, res) => {
  try {
    await Quote.findByIdAndDelete(req.params.id);
    res.json({ message: "Quote deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ==========================================
   MARK QUOTE HANDLED
   PATCH /api/admin/quotes/:id
========================================== */
router.patch("/quotes/:id", verifyToken, requireAdmin, async (req, res) => {
  try {
    const updated = await Quote.findByIdAndUpdate(
      req.params.id,
      { handled: true },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;