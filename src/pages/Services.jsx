import { Wrench, Shield, Droplet, Paintbrush, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Vinyl Wraps",
      slug: "vinyl-wraps",
      icon: Paintbrush,
      desc:
        "Full and partial wraps using premium materials for bold color changes and unique styling.",
      items: ["Full vehicle wraps", "Color change wraps", "Accent & roof wraps"],
    },
    {
      title: "Window Tint",
      slug: "window-tint",
      icon: Shield,
      desc:
        "High-quality window tinting for heat rejection, privacy, and UV protection.",
      items: ["Ceramic tint options", "UV & heat rejection", "Legal compliance"],
    },
    {
      title: "Paint Protection Film",
      slug: "paint-protection-film",
      icon: Sparkles,
      desc:
        "Invisible protection to guard your paint from chips, scratches, and road debris.",
      items: ["Front-end protection", "Full-body PPF", "Self-healing film"],
    },
    {
      title: "Ceramic Coating",
      slug: "ceramic-coating",
      icon: Droplet,
      desc:
        "Professional coatings to enhance gloss, protection, and long-term durability.",
      items: [
        "Exterior ceramic coating",
        "Hydrophobic protection",
        "Easy maintenance",
      ],
    },
    {
      title: "Detailing Services",
      slug: "detailing",
      icon: Wrench,
      desc:
        "Interior and exterior detailing to restore showroom-level appearance.",
      items: [
        "Interior deep clean",
        "Exterior polish",
        "Maintenance packages",
      ],
    },
    {
      title: "Custom Projects",
      slug: "custom-projects",
      icon: Wrench,
      desc:
        "One-off projects tailored to your vision with specialty finishes.",
      items: ["Custom accents", "Branding & graphics", "Specialty finishes"],
    },
  ];

  return (
    <section className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-28 space-y-24">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our Services
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Precision automotive styling built with premium materials and expert craftsmanship.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, slug, icon: Icon, desc, items }) => (
            <Link
              key={slug}
              to={`/services/${slug}`}
              className="group"
            >
              <div
                className="
                  h-full p-8 rounded-2xl
                  bg-white/5 backdrop-blur
                  border border-white/10
                  hover:border-primary/40
                  hover:bg-white/10
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all
                  cursor-pointer
                "
              >
                <Icon className="w-6 h-6 text-primary mb-4" />

                <h3 className="text-xl font-semibold mb-3">
                  {title}
                </h3>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {desc}
                </p>

                <ul className="space-y-2 text-sm text-gray-400">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* HOVER AFFORDANCE */}
                <p
                  className="
                    mt-6 text-sm text-primary
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all
                  "
                >
                  View Details →
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}