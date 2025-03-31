import React, { useState } from "react";
import "./Header.css"; // Ensure you have correct styles
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__content">
        {/* Logo Section */}
        <div className="header__logo-container" onClick={() => (window.location.href = "/")}>
          <div className="header__logo-img-cont">
            <img
              src="https://i.postimg.cc/FK2cPpFp/Bhargav-photo.jpg"
              alt="Bhargav Logo"
              className="header__logo-img"
            />
          </div>
          <a href="#" className="header__logo-sub">Bhargav Sirja</a>
        </div>

        {/* Desktop Menu */}
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="./" className="header__link">Home</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#about" className="header__link">About</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#skills" className="header__link">Skills</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link">Projects</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link">Contact</a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
        
              <FaBars  className={`header__main-ham-menu ${menuOpen ? "d-none" : ""}`}/>
           
              <IoClose   className={`header__main-ham-menu-close ${menuOpen ? "" : "d-none"}`}/>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`header__sm-menu ${menuOpen ? "header__sm-menu--active" : ""}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link" onClick={toggleMenu}>
              <a href="./">Home</a>
            </li>
            <li className="header__sm-menu-link" onClick={toggleMenu}>
              <a href="./#about">About</a>
            </li>
            <li className="header__sm-menu-link" onClick={toggleMenu}>
              <a href="./#about">Skills</a>
            </li>
            <li className="header__sm-menu-link" onClick={toggleMenu}>
              <a href="./#projects">Projects</a>
            </li>
            <li className="header__sm-menu-link" onClick={toggleMenu}>
              <a href="./#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
