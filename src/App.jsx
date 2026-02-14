import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import VinylWrap from "./pages/VinylWrap";
import WindowTint from "./pages/WindowTint"; // ✅ add this

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          
          {/* Home */}
          <Route index element={<Home />} />

          {/* Services */}
          <Route path="services" element={<Services />} />
          <Route path="services/vinyl-wraps" element={<VinylWrap />} />
          <Route path="services/window-tint" element={<WindowTint />} />

          {/* Contact */}
          <Route path="contact" element={<Contact />} />

          {/* Get Quote */}
          <Route path="get-quote" element={<GetQuote />} />

        </Route>
      </Routes>
    </Router>
  );
}