import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">
      
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1 pt-28">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
      
    </div>
  );
}