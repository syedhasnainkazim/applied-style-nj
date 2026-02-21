import express from "express";
import Quote from "../models/Quote.js";

const router = express.Router();

/* ======================================
   CREATE QUOTE
   POST /api/quotes
====================================== */
router.post("/", async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      year,
      make,
      model,
      service,
      notes,
    } = req.body;

    if (!name || !email || !service) {
      return res.status(400).json({
        message: "Name, email, and service are required",
      });
    }

    const newQuote = await Quote.create({
      name,
      phone,
      email,
      year,
      make,
      model,
      service,
      notes,
    });

    res.status(201).json({
      success: true,
      message: "Quote request submitted",
      data: newQuote,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;