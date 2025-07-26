import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Your Navbar component
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage'; // Your Contact Page component

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Your navigation component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HISTORY" element={<HistoryPage />} />
        <Route path="/SHOP" element={<ShopPage />} />
        <Route path="/CONTACT" element={<ContactPage />} /> 
        <Route path="/WINEYARDS" element={<WineyardsPage />} />
        <Route path="/Certificates" element={<Certificatespage />} />
        <Route path="/Gallery" element={<Gallerypage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);