import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navbarLinks } from "../../data";
import NavLogo from "../../images/logo.png";

import "./navbar.css";
import "./responsive.css";

const Navbar = () => {
  const [click, SetClick] = useState(false);

  const handleClick = () => SetClick(!click);
  const closeMobileMenu = () => SetClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link className="navbar-logo" to="#">
            <img src={NavLogo} alt="NavLogo" />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <div className="nav-links-wrapper">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to="/fans"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
