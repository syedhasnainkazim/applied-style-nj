import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // optional but safe
  };

  return (
    <footer className="bg-black border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 text-gray-400">

        {/* LEFT SIDE */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-semibold">
            Applied Style NJ
          </h3>
          <p>
            Premium automotive styling specializing in vinyl wraps,
            tint, PPF, and detail-focused customization.
          </p>
        </div>

        {/* CENTER NAVIGATION */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold tracking-wide">
            Navigation
          </h4>

          <div className="flex flex-col space-y-2">

            <button
              onClick={() => handleNavigation("/")}
              className="text-left hover:text-primary transition"
            >
              Home
            </button>

            <button
              onClick={() => handleNavigation("/services")}
              className="text-left hover:text-primary transition"
            >
              Services
            </button>

            <button
              onClick={() => handleNavigation("/contact")}
              className="text-left hover:text-primary transition"
            >
              Contact
            </button>

            <button
              onClick={() => handleNavigation("/get-quote")}
              className="text-left hover:text-primary transition"
            >
              Get a Quote
            </button>

          </div>
        </div>

        {/* RIGHT SIDE — HOURS + ADDRESS */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold tracking-wide">
            Hours
          </h4>
          <div className="space-y-1 text-sm">
            <p>Monday – Saturday: 10:00 AM – 6:00 PM</p>
            <p>Sunday: 10:00 AM – 4:00 PM</p>
          </div>

          <div className="pt-4">
            <h4 className="text-white font-semibold tracking-wide">
              Location
            </h4>
            <p className="text-sm mt-2">
              Edison, New Jersey 08817
              <br />
              (Exact address available upon booking)
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Applied Style NJ. All rights reserved.
      </div>
    </footer>
  );
}