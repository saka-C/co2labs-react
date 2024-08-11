import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Services";
import Notfound from "./pages/Notfound";
import RouteGuard from "./pages/RouteGuard";

function App() {
  const maintenancePages = ["/service/ai-solution"];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouteGuard element={<Home />} maintenancePages={maintenancePages} />}  />
        <Route path="/service/:serviceId" element={<RouteGuard element={<Service />} maintenancePages={maintenancePages} />}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
