import { motion } from "framer-motion";
import vinyl1 from "../assets/images/vinylpage1.jpg";
import vinyl2 from "../assets/images/vinylpage2.jpg";
import vinyl3 from "../assets/images/vinylwrap3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function VinylWrap() {
  return (
    <section className="bg-dark text-white min-h-screen pt-40 pb-24">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
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
              className="text-primary hover:text-white transition"
            >
              View Colors
            </a>
          </div>
        </motion.div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[vinyl1, vinyl2, vinyl3].map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 aspect-square"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <img
                src={img}
                alt="Vinyl Wrap Work"
                className="relative w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8">
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
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <h3 className="relative text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="relative text-gray-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <a
            href="/get-quote"
            className="btn-primary"
          >
            Get a Quote
          </a>
        </div>

      </div>
    </section>
  );
}