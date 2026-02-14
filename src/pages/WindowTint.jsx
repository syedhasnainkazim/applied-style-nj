import { motion } from "framer-motion";

export default function WindowTint() {
  return (
    <section className="min-h-screen bg-dark text-white pt-40 pb-32">
      <div className="max-w-5xl mx-auto px-6 space-y-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
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

        {/* FILM COMPARISON */}
        <div className="space-y-10">
          <h2 className="text-2xl font-semibold text-primary text-center">
            Ceramic vs Carbon Tint
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* CERAMIC */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/40 transition duration-300">
              <h3 className="text-xl font-bold text-primary mb-6">
                Ceramic (Premium Option)
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>• Maximum heat rejection</li>
                <li>• Blocks up to 99% of UV rays</li>
                <li>• Superior infrared protection</li>
                <li>• No signal interference</li>
                <li>• Longest lifespan & color stability</li>
                <li>• Highest clarity from inside</li>
              </ul>
            </div>

            {/* CARBON */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/40 transition duration-300">
              <h3 className="text-xl font-bold text-primary mb-6">
  Carbon
</h3>

              <ul className="space-y-3 text-gray-300">
                <li>• Good heat reduction</li>
                <li>• UV protection</li>
                <li>• Matte black appearance</li>
                <li>• No metal layers (no signal issues)</li>
                <li>• More affordable option</li>
                <li>• Solid performance for daily use</li>
              </ul>
            </div>

          </div>
        </div>

        {/* PROCESS */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">
            Our Installation Process
          </h2>

          <ol className="space-y-3 text-gray-300 list-decimal list-inside">
            <li>Thorough glass cleaning & preparation</li>
            <li>Precision film measurement & cutting</li>
            <li>Careful application with zero contamination</li>
            <li>Edge sealing & final inspection</li>
          </ol>
        </div>

        {/* MEDIA SECTION */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">
            Previous Work
          </h2>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center text-gray-400">
            Photos & videos coming soon.
          </div>
        </div>

      </div>
    </section>
  );
}