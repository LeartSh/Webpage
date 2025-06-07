import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'; // Import the Main component
import Shop from './pages/Shop'; // Import the Shop component
import Contact from './pages/Contact'; // Import the Contact component
import History from './pages/History'; // Import the History component
import Galeria from './pages/Galeria'; // Import the Galeria component
import Vreshtat from './pages/Vreshtat'; // Import the Vreshtat component
import Login from './pages/Login'; // Import the Login component
import Search from './pages/Search'; // Import the Search component
import Certificates from './pages/Certificates'; // Import the Certificates component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/vreshtat" element={<Vreshtat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/galeria/certificates" element={<Certificates />} />
        {/* We will add routes for other pages here later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;