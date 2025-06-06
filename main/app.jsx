import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveCards from "./responsivecards";
import Contact from "./Contact";
import Shop from "./Shop";
import History from "./History";
import Wineyards from "./Wineyards";
import Home from "./Home";
import Gallery from "./Gallery";
import Certificates from "./Certificates";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResponsiveCards />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/History" element={<History />} />
        <Route path="/Wineyards" element={<Wineyards />} />
        <Route path="/Main" element={<Home />} />
        <Route path="/Galeria" element={<Gallery />} />
        <Route path="/Certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}

export default App;
