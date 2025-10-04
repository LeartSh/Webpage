import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Galeria from '../Galeria/Galeria';
import History from '../History/History';
import Vreshtat from '../vreshtat/Vreshtat';
import Certificates from '../certificates/Certificates';
import Contact from '../contact/Contact';
import Search from '../search/Search';
import Login from '../Login/Login';
import Shop from '../shop/Shop';
import Main from '../main/Main';
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