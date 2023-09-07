import "../../components/index.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
        <img
          src={require("../../assets/images/logo.png")}
          alt="Little Lemon Logo"
          height="50"
          width="100"
        />
      </div>
      <div>
        <nav className="nav-container">
          <Link to="/" className="footer-nav-item">
            Home
          </Link>
          <Link to="/about" className="footer-nav-item">
            About
          </Link>
          <Link to="/menu" className="footer-nav-item">
            Menu
          </Link>
          <Link to="/reservations" className="footer-nav-item">
            Reservations
          </Link>
          <Link to="/order-online" className="footer-nav-item">
            Order Online
          </Link>
          <Link to="/login" className="footer-nav-item">
            Login
          </Link>
        </nav>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>Address</li>
          <li>Phone</li>
          <li>email</li>
        </ul>
      </div>
      <div>
        <h4>Social Media Links</h4>
        <div>
          <ul>
            <li>
              <img
                src={require("../../assets/images/twitter.png")}
                alt="Little Lemon Logo"
                height="50"
                width="50"
              />
            </li>
            <li>
              <img
                src={require("../../assets/images/facebook.png")}
                alt="Little Lemon Logo"
                height="50"
                width="50"
              />
            </li>
            <li>
              <img
                src={require("../../assets/images/linkedin.png")}
                alt="Little Lemon Logo"
                height="50"
                width="50"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
