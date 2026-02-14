import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WindowTint() {
  return (
    <section className="min-h-screen bg-dark text-white pt-40 pb-32">
      <div className="max-w-5xl mx-auto px-6 space-y-20">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Window Tint
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional window tint installation designed for comfort, privacy,
            and long-term performance using premium ceramic and carbon films.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            {
              title: "Ceramic (Premium Option)",
              items: [
                "Maximum heat rejection",
                "Blocks up to 99% of UV rays",
                "Superior infrared protection",
                "No signal interference",
                "Longest lifespan & color stability",
                "Highest clarity from inside",
              ],
            },
            {
              title: "Carbon",
              items: [
                "Good heat reduction",
                "UV protection",
                "Matte black appearance",
                "No metal layers (no signal issues)",
                "More affordable option",
                "Solid performance for daily use",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <h3 className="relative text-xl font-bold text-primary mb-6">
                {card.title}
              </h3>
              <ul className="relative space-y-3 text-gray-300">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}