import express from "express";
import Contact from "../models/Contact.js";
import { verifyToken, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

/* ==================================================
   GET ALL CONTACTS (Protected)
   GET /api/admin/contacts
================================================== */
router.get("/contacts", verifyToken, requireAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 });

    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ==================================================
   DELETE CONTACT
   DELETE /api/admin/contacts/:id
================================================== */
router.delete(
  "/contacts/:id",
  verifyToken,
  requireAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;

      await Contact.findByIdAndDelete(id);

      res.json({ message: "Contact deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

/* ==================================================
   MARK CONTACT AS HANDLED
   PATCH /api/admin/contacts/:id
================================================== */
router.patch(
  "/contacts/:id",
  verifyToken,
  requireAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;

      const contact = await Contact.findByIdAndUpdate(
        id,
        { handled: true },
        { new: true }
      );

      res.json(contact);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

export default router;