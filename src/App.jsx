import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Services";
import Notfound from "./pages/Notfound";
import RouteGuard from "./pages/RouteGuard";
import HasSendMail from "./pages/HasSendMail";
import TermsPolicy from "./pages/TermsPolicy";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./function/ScrollToTop";

function App() {
  const maintenancePages = [""];

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RouteGuard element={<Home />} maintenancePages={maintenancePages} />}  />
        <Route path="/service/:serviceId" element={<RouteGuard element={<Service />} maintenancePages={maintenancePages} />}/>
        <Route path="/hassendmail" element={<RouteGuard element={<HasSendMail />} maintenancePages={maintenancePages} />}  />
        <Route path="/termspolicy" element={<RouteGuard element={<TermsPolicy />} maintenancePages={maintenancePages} />}  />
        <Route path="/faq" element={<RouteGuard element={<FAQ />} maintenancePages={maintenancePages} />}  />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
