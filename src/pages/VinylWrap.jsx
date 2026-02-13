import { motion } from "framer-motion";
import vinyl1 from "../assets/images/vinylpage1.jpg";
import vinyl2 from "../assets/images/vinylpage2.jpg";
import vinyl3 from "../assets/images/vinylwrap3.jpg";

export default function VinylWrap() {
  return (
    <section className="bg-dark text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-24 space-y-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Vinyl Wrap
          </h1>

          <div className="flex justify-center items-center gap-3 text-gray-400">
            <span>Explore premium wrap colors</span>
            <span className="text-white/30">—</span>
            <a
              href="https://metrorestyling.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition font-medium"
            >
              View Colors
            </a>
          </div>
        </motion.div>
{/* Vinyl Wrap Gallery */}
<div className="mt-14">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    {[vinyl1, vinyl2, vinyl3].map((img, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 group aspect-square"
      >
        <img
          src={img}
          alt="Vinyl Wrap Work"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ))}

  </div>
</div>

        {/* DESCRIPTION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            Transform your vehicle with a premium vinyl wrap.
            Whether you're looking for a bold color change, satin finish,
            matte black, gloss metallic, or custom graphics — we deliver
            flawless installation with precision and care.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Every wrap is professionally installed using high-quality
            materials for durability, protection, and long-lasting
            visual impact.
          </p>
        </motion.div>


        {/* FEATURES GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Full Vehicle Wraps",
              text: "Complete color transformations with seamless finish and edge precision.",
            },
            {
              title: "Partial Wraps",
              text: "Roof, hood, mirrors, chrome delete, and accent wrap options available.",
            },
            {
              title: "Custom Graphics",
              text: "Stripes, branding, decals, and unique designs tailored to your vision.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>


        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center pt-12"
        >
          <a
            href="/get-quote"
            className="inline-block px-8 py-4 bg-primary text-black font-semibold rounded-xl hover:opacity-90 transition"
          >
            Get a Quote
          </a>
        </motion.div>

      </div>
    </section>
  );
}