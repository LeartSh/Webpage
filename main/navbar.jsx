import { Link } from "react-router-dom";
import "./NavBar.css"; // optional styling

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Shop">Shop</Link></li>
        <li><Link to="/History">History</Link></li>
        <li><Link to="/Wineyards">Wineyards</Link></li>
        <li><Link to="/Galeria">Gallery</Link></li>
        <li><Link to="/Certificates">Certificates</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;