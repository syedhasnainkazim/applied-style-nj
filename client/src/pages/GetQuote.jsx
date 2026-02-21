import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || submitted) return;
    if (!form.name || !form.phone || !form.service) return;

    setLoading(true);
    setError("");

    const templateParams = {
      name: form.name,
      phone: form.phone,
      email: form.email || "Not provided",
      year: form.year || "N/A",
      make: form.make || "N/A",
      model: form.model || "N/A",
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
    <section className="min-h-screen bg-dark text-white pt-28 md:pt-12 pb-28 md:pb-24 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6 space-y-16 md:space-y-14">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4 md:space-y-3"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight">
            Get a Quote
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Start by entering your contact info and vehicle details.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-14 md:space-y-12">

          {/* CONTACT INFO */}
          <div className="card p-8 md:p-6 space-y-8 md:space-y-6">
            <h2 className="text-lg sm:text-xl font-semibold text-center mb-2">
              Contact Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="input"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="input"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address (optional)"
              value={form.email}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* VEHICLE INFO */}
          <div className="card p-8 md:p-6 space-y-8 md:space-y-6">
            <h2 className="text-lg sm:text-xl font-semibold text-center mb-2">
              Vehicle Information
            </h2>

            <div className="grid md:grid-cols-4 gap-6 md:gap-4">
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
          <div className="card p-8 md:p-6 space-y-8 md:space-y-6">
            <h2 className="text-lg sm:text-xl font-semibold text-center mb-2">
              Select Service
            </h2>

            <select
              name="service"
              required
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
          <div className="text-center pt-10 md:pt-6 space-y-6 md:space-y-4">

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.button
                  key="button"
                  type="submit"
                  disabled={loading}
                  whileTap={{ scale: 0.97 }}
                  className={`btn-primary w-full sm:w-auto px-12 sm:px-16 py-4 ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Request Quote"}
                </motion.button>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary font-medium text-base sm:text-lg"
                >
                  ✅ Thanks! We’ll reach out shortly to discuss your project.
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <p className="text-red-400 text-sm">
                {error}
              </p>
            )}
          </div>

        </form>

      </div>
    </section>
  );
}