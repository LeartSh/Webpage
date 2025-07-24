import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import History from './pages/History';
import Vreshtat from './pages/Vreshtat';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Search from './pages/Search';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/history" element={<History />} />
            <Route path="/vreshtat" element={<Vreshtat />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 