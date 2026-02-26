import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

import hero from "../assets/images/hero-car1.png";

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
    { src: tint1, label: "Window Tint" },
    { src: vinyl1, label: "Vinyl Wrap" },
    { src: ceramic1, label: "Ceramic Coating" },
    { src: tint2, label: "Window Tint" },
    { src: detail911, label: "Detailing" },
    { src: ceramic2, label: "Ceramic Coating" },
    { src: tint5, label: "Window Tint" },
    { src: m5detail, label: "Detailing" },
    { src: hoodwrap, label: "Vinyl Wrap" },
  ];

  return (
    <section className="bg-dark text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <div className="min-h-[90vh] flex items-center pt-28 md:pt-0 pb-16">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <Reveal>
            <div className="text-center md:text-left">

              {/* Headline Group (Tight) */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Applied Style NJ
                </h1>

                <h2 className="text-lg md:text-xl text-gray-300 font-medium">
                  Window Tint, Vinyl Wrap & Paint Protection Film in Edison, NJ.
                </h2>
              </div>

              {/* Supporting Copy (Medium spacing) */}
              <p className="mt-5 text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
                Premium materials. Precision installation. Showroom-quality results trusted by NJ drivers.
              </p>

              {/* Trust Indicators */}
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
                <span>✔ 10+ Years Experience</span>
                <span>✔ Premium Film Brands</span>
                <span>✔ Flawless Installation</span>
              </div>

              {/* CTA (Largest separation) */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/get-quote" className="btn-primary">
                  Get a Free Quote
                </Link>

                <Link to="/services" className="btn-outline">
                  View Services
                </Link>
              </div>

            </div>
          </Reveal>

          {/* RIGHT IMAGE */}
          <Reveal delay={0.2}>
            <div className="flex justify-center relative">

              <div className="absolute w-[500px] h-[500px] rounded-full 
                              bg-blue-500/25 blur-[150px] 
                              top-1/2 left-1/2 
                              -translate-x-1/2 -translate-y-1/2">
              </div>

              <img
                src={hero}
                alt="Performance vehicle"
                className="relative z-10 w-full max-w-lg object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.7)]"
              />
            </div>
          </Reveal>

        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-32 space-y-28">

        {/* ================= OUR WORK ================= */}
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Work
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className="card card-hover relative overflow-hidden group aspect-square"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 
                                  group-hover:opacity-100 transition duration-300 
                                  flex items-start justify-center pt-6">

                    <span className="px-4 py-2 rounded-full bg-black/70 
                                     border border-white/10 text-sm font-semibold 
                                     backdrop-blur-sm">
                      {item.label}
                    </span>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ================= WHY CHOOSE US ================= */}
        <Reveal delay={0.2}>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "10+ Years Experience",
                text: "Over a decade of hands-on automotive restyling expertise across New Jersey.",
              },
              {
                title: "Precision Installation",
                text: "Clean edges, seamless wraps, and flawless film application every time.",
              },
              {
                title: "Premium Materials",
                text: "We use high-quality films and products designed to protect and last.",
              },
            ].map((item) => (
              <div key={item.title} className="card card-hover p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ================= FINAL CTA ================= */}
        <Reveal delay={0.3}>
          <div className="text-center space-y-6 pt-10">
            <h2 className="text-3xl font-bold">
              Ready to Transform Your Vehicle?
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto">
              Get a fast, free quote and see why drivers across Edison and surrounding NJ areas trust Applied Style NJ.
            </p>

            <Link to="/get-quote" className="btn-primary">
              Get Your Free Quote Today
            </Link>
          </div>
        </Reveal>

      </div>

    </section>
  );
}