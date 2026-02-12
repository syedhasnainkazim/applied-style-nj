import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ IMPORT VIDEOS
import ceramic1 from "../assets/videos/ceramic-1.mp4";
// import ceramic2 from "../assets/videos/ceramic-2.mp4"; // add later when ready

const SERVICE_DATA = {
  "vinyl-wraps": {
    title: "Vinyl Wraps",
    description:
      "Premium vinyl wraps transform your vehicle’s appearance while protecting the original paint underneath.",
    benefits: [
      "Complete color transformation",
      "Paint protection",
      "Removable & reversible",
      "Custom finishes and textures",
    ],
    steps: [
      "Vehicle inspection & surface prep",
      "Design and material selection",
      "Precision vinyl installation",
      "Detailing & final quality check",
    ],
  },

  "window-tint": {
    title: "Window Tint",
    description:
      "High-quality window tint improves comfort, privacy, and UV protection while maintaining legal compliance.",
    benefits: [
      "Heat & UV rejection",
      "Improved privacy",
      "Interior protection",
      "Reduced glare",
    ],
    steps: [
      "Glass cleaning & preparation",
      "Film selection",
      "Precision application",
      "Curing & inspection",
    ],
  },

  "paint-protection-film": {
    title: "Paint Protection Film",
    description:
      "PPF is an invisible layer that protects your vehicle from road debris, scratches, and chips.",
    benefits: [
      "Self-healing technology",
      "Preserves paint value",
      "Virtually invisible",
      "Long-term durability",
    ],
    steps: [
      "Surface decontamination",
      "Precision film cutting",
      "Panel-by-panel installation",
      "Final inspection",
    ],
  },

  "ceramic-coating": {
    title: "Ceramic Coating",
    description:
      "Ceramic coating enhances gloss while adding a durable hydrophobic layer for long-term protection.",
    benefits: [
      "Extreme gloss enhancement",
      "Hydrophobic protection",
      "UV & chemical resistance",
      "Easy maintenance",
    ],
    steps: [
      "Paint correction",
      "Surface prep",
      "Ceramic application",
      "Curing process",
    ],
    videos: [ceramic1],
  },

  "detailing": {
    title: "Detailing Services",
    description:
      "Professional interior and exterior detailing to restore showroom-level appearance.",
    benefits: [
      "Deep interior cleaning",
      "Paint enhancement",
      "Protective finishes",
      "Improved resale value",
    ],
    steps: [
      "Interior deep clean",
      "Exterior wash & polish",
      "Protective treatment",
      "Final detailing",
    ],
  },

  "custom-projects": {
    title: "Custom Projects",
    description:
      "Unique, one-off automotive styling projects tailored to your vision.",
    benefits: [
      "Fully customized solutions",
      "Creative design execution",
      "Premium materials",
      "Specialty finishes",
    ],
    steps: [
      "Concept & consultation",
      "Design planning",
      "Custom fabrication",
      "Final execution",
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICE_DATA[slug];

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-dark text-white">
        <p>Service not found.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-dark text-white pt-40 pb-32">
      <div className="max-w-5xl mx-auto px-6 space-y-16">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            {service.title}
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {service.description}
          </p>
        </motion.div>

        {/* BENEFITS */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2">
                <span className="text-primary">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* PROCESS */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Process</h2>
          <ol className="space-y-3 text-gray-300 list-decimal list-inside">
            {service.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        {/* VIDEOS (only renders if videos exist) */}
        {service.videos && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Previous Work</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {service.videos.map((video, index) => (
                <video
                  key={index}
                  src={video}
                  controls
                  muted
                  playsInline
                  className="w-full rounded-xl border border-white/10 bg-black"
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}