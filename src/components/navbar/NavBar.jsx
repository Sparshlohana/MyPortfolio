import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <ul className="navList">
          <li className="navItems">
            <a className="navAnchor" href="#home">
              Home
            </a>
          </li>

          <li className="dropdown navItems">
            <a href="/" className="navAnchor">
              About Me
            </a>
            <ul className="dropdown-content">
              <li className="dropdown-content-items">
                <a href="/">My Projects</a>
              </li>
              <hr />
              <li className="dropdown-content-items">
                <a href="/">My Resume</a>
              </li>
              <hr />
            </ul>
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
