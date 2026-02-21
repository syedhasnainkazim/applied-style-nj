import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLink = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-primary"
        : "text-gray-300 hover:text-primary"
    }`;

  /* Close mobile menu on route change */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* Prevent body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /* Scroll Detection */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
          <img
            src="/aps.png"
            alt="Applied Style NJ logo"
            className="h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <NavLink to="/" className={navLink}>
            Home
          </NavLink>

          <NavLink to="/services" className={navLink}>
            Services
          </NavLink>

          <NavLink to="/contact" className={navLink}>
            Contact
          </NavLink>

          <Link
            to="/get-quote"
            className="ml-2 bg-primary text-black px-6 py-2.5 rounded-lg font-semibold
                       hover:bg-blue-500 hover:scale-[1.04]
                       transition-all duration-200"
          >
            Get a Quote
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white transition-transform duration-200"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          open
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-black border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-lg font-medium">

          <NavLink to="/" className={navLink}>
            Home
          </NavLink>

          <NavLink to="/services" className={navLink}>
            Services
          </NavLink>

          <NavLink to="/contact" className={navLink}>
            Contact
          </NavLink>

          <Link
            to="/get-quote"
            className="bg-primary text-black px-4 py-3 rounded-lg text-center font-semibold
                       hover:scale-[1.03] transition-all"
          >
            Get a Quote
          </Link>

        </div>
      </div>
    </header>
  );
}