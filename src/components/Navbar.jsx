import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLink = (path) =>
    `transition-colors duration-200 ${
      location.pathname === path
        ? "text-primary"
        : "text-gray-300 hover:text-primary"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/aps-photo.jpg"
            alt="Applied Style NJ logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={navLink("/")}>
            Home
          </Link>

          <Link to="/services" className={navLink("/services")}>
            Services
          </Link>

          <Link to="/contact" className={navLink("/contact")}>
            Contact
          </Link>

          {/* PRIMARY CTA */}
          <Link
            to="/get-quote"
            className="ml-2 bg-primary text-black px-5 py-2 rounded-md font-semibold
                       hover:bg-blue-500 transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </div>

      </nav>
    </header>
  );
}