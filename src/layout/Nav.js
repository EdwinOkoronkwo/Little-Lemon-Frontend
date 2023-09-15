import "../../components/index.css";

import { Routes, Route, Link } from "react-router-dom";

import About from "../page/about/About";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Menu from "../page/menu/Menu";
import OrderOnline from "../page/order_online/OrderOnline";
import Reservations from "../page/reservations/Reservations";

const Nav = () => {
  return (
    <>
      <nav className="container">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/menu" className="nav-item">
          Menu
        </Link>
        <Link to="/reservations" className="nav-item">
          Reservations
        </Link>
        <Link to="/order-online" className="nav-item">
          Order Online
        </Link>
        <Link to="/login" className="nav-item">
          Login
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Nav;
