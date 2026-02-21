import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
<main className="flex-1 pt-18 md:pt-24">
         <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}