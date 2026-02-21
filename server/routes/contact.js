import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

/* ==================================================
   CREATE CONTACT SUBMISSION
   POST /api/contact
================================================== */
router.post("/", async (req, res) => {
  try {
    let { name, email, message } = req.body;

    // Basic sanitization
    name = name?.trim();
    email = email?.trim();
    message = message?.trim();

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message received successfully",
      data: newContact,
    });
  } catch (err) {
    console.error("Contact submission error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;