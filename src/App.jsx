import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import VinylWrap from "./pages/VinylWrap";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/vinyl-wraps" element={<VinylWrap />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;