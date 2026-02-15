import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import VinylWrap from "./pages/VinylWrap";
import WindowTint from "./pages/WindowTint";
import Game from "./pages/Game";

/* =========================
   Animated Routes Wrapper
========================= */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>

          <Route index element={<PageWrapper><Home /></PageWrapper>} />

          <Route path="services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="services/vinyl-wraps" element={<PageWrapper><VinylWrap /></PageWrapper>} />
          <Route path="services/window-tint" element={<PageWrapper><WindowTint /></PageWrapper>} />

          <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="get-quote" element={<PageWrapper><GetQuote /></PageWrapper>} />

          {/* Game route FIXED (relative path) */}
          <Route path="game" element={<PageWrapper><Game /></PageWrapper>} />

        </Route>
      </Routes>
    </AnimatePresence>
  );
}

/* =========================
   Universal Page Transition
========================= */
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-[80vh]"
    >
      {children}
    </motion.div>
  );
}

/* =========================
   App Root
========================= */
export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}