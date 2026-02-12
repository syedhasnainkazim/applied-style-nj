import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-32 space-y-28">

        {/* GREETING / INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hello, we’re Applied Style NJ.
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Located in Edison, New Jersey, we are an automotive restyling shop
            with over <span className="text-white font-semibold">10+ years of experience</span>.
          </p>

          <p className="text-gray-400 leading-relaxed">
            We specialize in vinyl wraps, paint protection, detailing, and custom automotive work.
            Our approach is simple — perfection, attention to detail, and customer satisfaction.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Every vehicle is treated as if it were our own, with no shortcuts and no compromises.
          </p>
        </motion.div>

        {/* WORK / GALLERY PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center"
        >
          <p className="text-gray-400">
            Our work gallery will live here — photos and videos coming soon.
          </p>
        </motion.div>

        {/* EXPERIENCE / VALUES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "10+ Years Experience",
              text:
                "A decade of real-world automotive restyling experience across wraps, protection, and detailing.",
            },
            {
              title: "Attention to Detail",
              text:
                "Clean edges, flawless finishes, and precision work on every vehicle.",
            },
            {
              title: "Customer Satisfaction",
              text:
                "Honest communication, quality craftsmanship, and results you’ll be proud of.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}