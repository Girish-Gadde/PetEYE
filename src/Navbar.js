import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <NavLink to="/" className="nav__logo">
          <h3>EYE</h3>
        </NavLink>

        <h2>PetEYE</h2>

        <div className={"nav__menu"} id="nav-menu">
          <ul className="nav__list">
            <NavLink to="/" className="nav__link">
              Go to Home
            </NavLink>

            <NavLink to="/news" className="nav__link">
              Need Help
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
