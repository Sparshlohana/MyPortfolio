import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav id="home" className="navBar">
        <ul className="navList">
          <li className="navItems">
            <a className="navAnchor" href="#home">
              Home
            </a>
          </li>

          <li className="dropdown navItems">
            <a href="#about" className="navAnchor">
              About Me
            </a>
          </li>
          <li className="navItems">
            <a className="navAnchor" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
