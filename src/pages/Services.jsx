import { Link } from "react-router-dom";
import { Paintbrush, Shield, Sparkles, Droplets, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Vinyl Wraps",
      description:
        "Full and partial wraps using premium materials for bold color changes and unique styling.",
      bullets: [
        "Full vehicle wraps",
        "Color change wraps",
        "Accent & roof wraps",
      ],
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
      link: "/services/vinyl-wraps",
    },
    {
      title: "Window Tint",
      description:
        "High-quality window tinting for heat rejection, privacy, and UV protection.",
      bullets: [
        "Ceramic tint options",
        "UV & heat rejection",
        "Legal compliance",
      ],
      icon: <Shield className="w-6 h-6 text-primary" />,
      link: "/services/window-tint", // ✅ ADDED
    },
    {
      title: "Paint Protection Film",
      description:
        "Invisible protection to guard your paint from chips, scratches, and road debris.",
      bullets: [
        "Front-end protection",
        "Full-body PPF",
        "Self-healing film",
      ],
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      link: "/services/paint-protection-film",
    },
    {
      title: "Ceramic Coating",
      description:
        "Professional coatings to enhance gloss, protection, and long-term durability.",
      bullets: [
        "Exterior ceramic coating",
        "Hydrophobic protection",
        "Easy maintenance",
      ],
      icon: <Droplets className="w-6 h-6 text-primary" />,
      link: "/services/ceramic-coating",
    },
    {
      title: "Detailing Services",
      description:
        "Interior and exterior detailing to restore showroom-level appearance.",
      bullets: [
        "Interior deep clean",
        "Exterior polish",
        "Maintenance packages",
      ],
      icon: <Wrench className="w-6 h-6 text-primary" />,
      link: "/services/detailing",
    },
    {
      title: "Custom Projects",
      description:
        "One-off projects tailored to your vision with specialty finishes.",
      bullets: [
        "Custom accents",
        "Branding & graphics",
        "Specialty finishes",
      ],
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
      link: "/services/custom-projects",
    },
  ];

  return (
    <section className="min-h-screen bg-dark text-white pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Precision automotive styling built with premium materials and expert craftsmanship.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="block group"
            >
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition duration-300 hover:-translate-y-1">
                
                <div className="mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-500">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}