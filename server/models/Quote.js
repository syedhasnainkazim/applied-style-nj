import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    year: String,
    make: String,
    model: String,
    service: {
      type: String,
      required: true,
    },
    notes: String,
    handled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Quote", quoteSchema);