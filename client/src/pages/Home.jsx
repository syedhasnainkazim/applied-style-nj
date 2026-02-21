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
    { src: tint1, label: "Tints" },
    { src: vinyl1, label: "Vinyl Wrap" },
    { src: ceramic1, label: "Ceramic Coating" },
    { src: tint2, label: "Tints" },
    { src: detail911, label: "Detail" },
    { src: ceramic2, label: "Ceramic Coating" },
    { src: tint5, label: "Tints" },
    { src: m5detail, label: "Detail" },
    { src: hoodwrap, label: "Vinyl Wrap" },
  ];

  return (
    <section className="bg-dark text-white overflow-x-hidden">

      {/* HERO */}
      <div className="min-h-[90vh] md:min-h-[80vh] flex items-center pt-28 md:pt-0 pb-12 md:pb-0">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-14 md:gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <Reveal>
            <div className="max-w-3xl space-y-6 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-snug md:leading-tight">
                Applied Style NJ.
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Located in Edison, New Jersey, we are an automotive restyling shop
                with over <span className="text-white font-semibold">10+ years of experience</span>.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Transform your vehicle with expert tint, wraps, and detailing.
                Serving Edison & surrounding NJ areas.
                <br /><br />
                Premium materials. Flawless results. Built to last.
              </p>

              {/* CTA BUTTONS */}
              <div className="pt-8 md:pt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link to="/get-quote" className="btn-primary w-full sm:w-auto">
                  Get a Quote
                </Link>

                <Link to="/services" className="btn-outline w-full sm:w-auto">
                  View Services
                </Link>
              </div>
            </div>
          </Reveal>

          {/* RIGHT IMAGE */}
          <Reveal delay={0.2}>
            <div className="flex justify-center relative w-full mt-14 md:mt-0">

              {/* Blue Glow */}
              <div className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full 
                              bg-blue-500/25 blur-[120px] md:blur-[160px] 
                              top-1/2 left-1/2 
                              -translate-x-1/2 -translate-y-1/2">
              </div>

              {/* Indigo Glow */}
              <div className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full 
                              bg-indigo-500/20 blur-[100px] md:blur-[140px] 
                              top-[55%] left-[55%] 
                              -translate-x-1/2 -translate-y-1/2">
              </div>

              <img
                src={hero}
                alt="Performance vehicle"
                className="relative z-10 w-full max-w-md md:max-w-none max-h-[420px] md:max-h-[520px] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.7)]"
              />
            </div>
          </Reveal>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pb-28 md:pb-32 space-y-24 md:space-y-28">

        {/* GALLERY */}
        <Reveal delay={0.2}>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 md:mb-10 text-center">
              Our Work
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className="card card-hover relative overflow-hidden group aspect-square cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-lg">
                      <span className="text-white text-sm font-semibold">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* EXPERIENCE CARDS */}
        <Reveal delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
            {[
              {
                title: "10+ Years Experience",
                text: "A decade of real-world automotive restyling experience.",
              },
              {
                title: "Attention to Detail",
                text: "Clean edges and flawless finishes on every vehicle.",
              },
              {
                title: "Customer Satisfaction",
                text: "Honest communication and quality craftsmanship.",
              },
            ].map((item) => (
              <div key={item.title} className="card card-hover p-8 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>

    </section>
  );
}