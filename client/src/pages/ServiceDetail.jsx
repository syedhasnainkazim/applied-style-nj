import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* ✅ Import existing images */
import wrapImage from "../assets/images/suprawrap.png";
import tintImage from "../assets/images/percent.jpg";
import ceramicImage from "../assets/images/ceramiccoating.jpg";
import detailingImage from "../assets/images/detailing.jpg";
import ppfImage from "../assets/images/ppf.jpg";

/* 🔥 Slug → Image Map */
const imageMap = {
  "vinyl-wraps": wrapImage,
  "window-tint": tintImage,
  "ceramic-coating": ceramicImage,
  "detailing": detailingImage,
  "paint-protection-film": ppfImage,
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadService() {
      try {
        const res = await fetch("/data/services.json");
        const data = await res.json();
        const found = data.find((item) => item.slug === slug);

        if (mounted) {
          setService(found || null);
        }
      } catch (err) {
        console.error("Error loading service:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadService();

    return () => {
      mounted = false;
    };
  }, [slug]);

  /* Loading */
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

  /* Not Found */
  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-primary">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-dark text-white">

      {/* ================= HERO ================= */}
      <div className="min-h-[85vh] md:min-h-[70vh] flex items-center pt-24 md:pt-0">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight">
              {service.title}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>

            {service.longDescription && (
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {service.longDescription}
              </p>
            )}

            {/* 🔥 CTA BUTTONS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
              <Link
                to="/get-quote"
                className="bg-primary text-black px-6 py-3 rounded-lg font-semibold
                           hover:bg-blue-500 hover:scale-[1.03]
                           transition-all duration-200"
              >
                Get a Quote
              </Link>

              <Link
                to="/services"
                className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold
                           hover:bg-white/10 hover:scale-[1.03]
                           transition-all duration-200"
              >
                Back to Services
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          {imageMap[slug] && (
            <div className="relative flex justify-center mt-12 md:mt-0">
              <div
                className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full 
                           bg-primary/20 blur-[100px]
                           top-1/2 left-1/2 
                           -translate-x-1/2 -translate-y-1/2"
              />

              <img
                src={imageMap[slug]}
                alt={service.title}
                className="relative z-10 w-full max-w-sm md:max-w-none rounded-2xl shadow-2xl object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-24 md:pb-32 space-y-20 md:space-y-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* What We Offer */}
          <div className="card card-hover p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-4">
              What We Offer
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
              {service.bullets?.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="card card-hover p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-4">
              Why Choose Us
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We use premium materials, expert craftsmanship, and precision
              installation techniques to deliver high-quality results tailored
              to your vehicle.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}