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

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1 pt-28">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Floating CTA */}
      <StickyCTA />
      
    </div>
  );
}