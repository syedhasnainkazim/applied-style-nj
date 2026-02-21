import express from "express";
import mongoose from "mongoose";
import Contact from "../models/Contact.js";
import { verifyToken, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

/* ==================================================
   GET ALL CONTACTS
   GET /api/admin/contacts
================================================== */
router.get("/contacts", verifyToken, requireAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error("Fetch contacts error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ==================================================
   DELETE CONTACT
   DELETE /api/admin/contacts/:id
================================================== */
router.delete("/contacts/:id", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid contact ID" });
    }

    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    console.error("Delete contact error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ==================================================
   MARK CONTACT AS HANDLED
   PATCH /api/admin/contacts/:id
================================================== */
router.patch("/contacts/:id", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid contact ID" });
    }

    const updated = await Contact.findByIdAndUpdate(
      id,
      { handled: true },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(updated);
  } catch (err) {
    console.error("Update contact error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;