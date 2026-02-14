import { motion } from "framer-motion";

import tint1 from "../assets/images/tints.jpg";
import vinyl1 from "../assets/images/modelywrap.jpg";
import ceramic1 from "../assets/images/ceramic1.jpg";

import tint2 from "../assets/images/tints2.jpg";
import detail911 from "../assets/images/911detailext.jpg";
import ceramic2 from "../assets/images/ceramic2.jpg";

import tint5 from "../assets/images/tints5.jpg";
import m5detail from "../assets/images/m5detail.jpg";
import hoodwrap from "../assets/images/hoodwrap.jpg";

export default function Home() {
  const gallery = [
    { src: tint1, label: "Tints" },
    { src: vinyl1, label: "Vinyl Wrap" },
    { src: ceramic1, label: "Ceramic Coating" },

    { src: tint2, label: "Tints" },
    { src: detail911, label: "Detailing" },
    { src: ceramic2, label: "Ceramic Coating" },

    { src: tint5, label: "Tints" },
    { src: m5detail, label: "Detailing" },
    { src: hoodwrap, label: "Vinyl Wrap" },
  ];

  return (
    <section className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-32 space-y-28">

        {/* INTRO */}
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

        {/* GALLERY */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl 
                           bg-white/5 border border-white/10
                           hover:border-primary/50 hover:bg-white/10
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute -top-10 -left-10 w-40 h-40 
                                bg-primary/20 blur-3xl 
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-500" />

                {/* Image */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-80 object-cover 
                             transition duration-500 
                             group-hover:scale-105"
                />

                {/* TOP CENTER LABEL */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 
                                opacity-0 group-hover:opacity-100 
                                transition duration-300">
                  <div className="px-5 py-2 rounded-full 
                                  bg-black/70 backdrop-blur-md 
                                  border border-white/10 shadow-lg">
                    <span className="text-white text-sm font-semibold tracking-wide">
                      {item.label}
                    </span>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* EXPERIENCE CARDS */}
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
              className="group relative p-8 rounded-2xl 
                         bg-white/5 border border-white/10
                         hover:border-primary/50 hover:bg-white/10
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 
                              bg-primary/20 blur-3xl 
                              opacity-0 group-hover:opacity-100 
                              transition-all duration-500" />

              <h3 className="relative text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="relative text-sm text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}