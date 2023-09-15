// import "../../components/index.css";
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <footer>
//       <div>
//         <img
//           src={require("../../assets/images/logo.png")}
//           alt="Little Lemon Logo"
//           height="50"
//           width="100"
//         />
//       </div>
//       <div>
//         <nav className="nav-container">
//           <Link to="/" className="footer-nav-item">
//             Home
//           </Link>
//           <Link to="/about" className="footer-nav-item">
//             About
//           </Link>
//           <Link to="/menu" className="footer-nav-item">
//             Menu
//           </Link>
//           <Link to="/reservations" className="footer-nav-item">
//             Reservations
//           </Link>
//           <Link to="/order-online" className="footer-nav-item">
//             Order Online
//           </Link>
//           <Link to="/login" className="footer-nav-item">
//             Login
//           </Link>
//         </nav>
//       </div>
//       <div>
//         <h4>Contact</h4>
//         <ul>
//           <li>Address</li>
//           <li>Phone</li>
//           <li>email</li>
//         </ul>
//       </div>
//       <div>
//         <h4>Social Media Links</h4>
//         <div>
//           <ul>
//             <li>
//               <img
//                 src={require("../../assets/images/twitter.png")}
//                 alt="Little Lemon Logo"
//                 height="50"
//                 width="50"
//               />
//             </li>
//             <li>
//               <img
//                 src={require("../../assets/images/facebook.png")}
//                 alt="Little Lemon Logo"
//                 height="50"
//                 width="50"
//               />
//             </li>
//             <li>
//               <img
//                 src={require("../../assets/images/linkedin.png")}
//                 alt="Little Lemon Logo"
//                 height="50"
//                 width="50"
//               />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "../components/styles/Footer.css";
import classes from "./Footer.module.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className={classes["footer-background"]}>
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
          <div className={classes["footer-content"]}>
            <div className={classes.locations}>
              <h5>LOCATIONS</h5>
              <ul>
                <li>Accra</li>
                <li>Kumasi</li>
                <li>Cape Coast</li>
                <li>Tamale</li>
              </ul>
            </div>
            <div className={classes["footer-content"]}>
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </div>
            <div className={classes.contact}>
              <h5>CONTACT US</h5>
              <ul>
                <li>96 Abafom Road, North Ridge - Accra</li>
                <li>Tel: 020 7928 0678</li>
                <li>Email: info@littlelemon.com</li>
              </ul>
            </div>
          </div>
          <div className={classes.copyright}>
            <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
