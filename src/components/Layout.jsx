import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">

      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* NAVBAR (fixed) */}
      <Navbar />

      {/* PAGE CONTENT */}
      {/* pt-20 = mobile spacing */}
      {/* pt-28 = desktop spacing */}
      <main className="flex-1 pt-20 md:pt-28">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Floating CTA */}
      <StickyCTA />

    </div>
  );
}