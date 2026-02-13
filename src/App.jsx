import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import VinylWrap from "./pages/VinylWrap";
import GetQuote from "./pages/GetQuote";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/services/vinyl-wraps" element={<VinylWrap />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;