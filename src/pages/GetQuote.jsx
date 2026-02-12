import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function GetQuote() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    year: "",
    make: "",
    model: "",
    trim: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (loading || submitted) return;

    setLoading(true);
    setError("");

    const templateParams = {
      name: form.name,
      phone: form.phone,
      email: form.email || "Not provided",
      year: form.year,
      make: form.make,
      model: form.model,
      trim: form.trim || "N/A",
      service: form.service,
      source: "Website – Get a Quote",
      submitted_at: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_2l6pfdk",
        "template_5l6c2mn",
        templateParams,
        "m1ipLo2F1P5XqyR4I"
      );

      setSubmitted(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        year: "",
        make: "",
        model: "",
        trim: "",
        service: "",
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-dark text-white pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6 space-y-14">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-3"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">Get a Quote</h1>
          <p className="text-gray-400">
            Start by entering your contact info and vehicle details.
          </p>
        </motion.div>

        {/* CONTACT INFO */}
        <div className="card space-y-6">
          <h2 className="text-xl font-semibold text-center">
            Contact Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="input"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="input"
            />
          </div>

          <input
            name="email"
            placeholder="Email Address (optional)"
            value={form.email}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* VEHICLE INFO */}
        <div className="card space-y-6">
          <h2 className="text-xl font-semibold text-center">
            Vehicle Information
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <input
              name="year"
              placeholder="Year"
              value={form.year}
              onChange={handleChange}
              className="input"
            />
            <input
              name="make"
              placeholder="Make"
              value={form.make}
              onChange={handleChange}
              className="input"
            />
            <input
              name="model"
              placeholder="Model"
              value={form.model}
              onChange={handleChange}
              className="input"
            />
            <input
              name="trim"
              placeholder="Trim (optional)"
              value={form.trim}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>

        {/* SERVICE */}
        <div className="card space-y-6">
          <h2 className="text-xl font-semibold text-center">Select Service</h2>

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="input cursor-pointer"
          >
            <option value="">Select a service</option>
            <option value="Vinyl Wrap">Vinyl Wrap</option>
            <option value="Window Tint">Window Tint</option>
            <option value="Paint Protection Film">
              Paint Protection Film
            </option>
            <option value="Detailing">Detailing</option>
            <option value="Custom Work">Custom Work</option>
          </select>
        </div>

        {/* SUBMIT */}
        <div className="text-center pt-4 space-y-3">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={loading || !form.name || !form.phone || !form.service}
              className="btn-primary px-16 py-4"
            >
              {loading ? "Sending..." : "Request Quote"}
            </button>
          ) : (
            <p className="text-primary font-medium">
              Thanks! We’ll reach out shortly to discuss your project.
            </p>
          )}

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}
        </div>

      </div>
    </section>
  );
}