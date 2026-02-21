import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Palette, Sun, ShieldCheck, Sparkles, Car, Wrench } from "lucide-react";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // icon mapping stays in code (JSON can’t store React components)
  const iconMap = useMemo(
    () => ({
      palette: <Palette className="w-7 h-7 text-primary" />,
      sun: <Sun className="w-7 h-7 text-primary" />,
      shield: <ShieldCheck className="w-7 h-7 text-primary" />,
      sparkles: <Sparkles className="w-7 h-7 text-primary" />,
      car: <Car className="w-7 h-7 text-primary" />,
      wrench: <Wrench className="w-7 h-7 text-primary" />,
    }),
    []
  );

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);
        setErr("");

        const res = await fetch("/data/services.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load services (${res.status})`);

        const data = await res.json();
        if (mounted) setServices(Array.isArray(data) ? data : []);
      } catch (e) {
        if (mounted) setErr(e?.message || "Failed to load services.");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-12 pb-24 md:pb-32">
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug md:leading-tight">
            Our Services
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Precision automotive styling built with premium materials and expert craftsmanship.
          </p>
        </div>

        {/* LOADING / ERROR */}
        {loading && (
          <div className="text-gray-400">Loading services…</div>
        )}

        {!loading && err && (
          <div className="text-red-400">{err}</div>
        )}

        {/* SERVICES GRID */}
        {!loading && !err && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="h-full"
              >
                <div className="card card-hover p-8 h-full flex flex-col transition-all duration-300 group">
                  {/* ICON */}
                  <div className="mb-6">
                    {iconMap[service.icon] ?? <Sparkles className="w-7 h-7 text-primary" />}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* BULLETS */}
                  <ul className="space-y-2 text-sm text-gray-500 mt-auto">
                    {(service.bullets || []).map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}