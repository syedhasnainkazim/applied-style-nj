import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";

/* 🔐 NEW AUTH PAGES */
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

/* =========================
   Animated Routes Wrapper
========================= */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>

          {/* Home */}
          <Route
            index
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />

          {/* Services List */}
          <Route
            path="services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />

          {/* Dynamic Service Detail */}
          <Route
            path="services/:slug"
            element={
              <PageWrapper>
                <ServiceDetail />
              </PageWrapper>
            }
          />

          {/* Contact */}
          <Route
            path="contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />

          {/* Get Quote */}
          <Route
            path="get-quote"
            element={
              <PageWrapper>
                <GetQuote />
              </PageWrapper>
            }
          />

          {/* 🔐 Admin Login */}
          <Route
            path="admin-login"
            element={
              <PageWrapper>
                <AdminLogin />
              </PageWrapper>
            }
          />

          {/* 🔐 Protected Admin Dashboard */}
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <PageWrapper>
                  <AdminDashboard />
                </PageWrapper>
              </ProtectedRoute>
            }
          />

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
      className="min-h-screen md:min-h-[80vh] pb-8 md:pb-0"
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