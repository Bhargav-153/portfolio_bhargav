import React from "react";
import "./Footer.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="social">
          <a href="https://x.com/SirjaBhargav" target="_blank" rel="noreferrer">
            <FaSquareXTwitter className="social-twitter" />
          </a>

          <a href="https://www.linkedin.com/in/bhargav-sirja-540aaa247/" target="_blank" rel="noreferrer">
            <FaLinkedin className="social-twitter" />
          </a>

          <a href="https://github.com/Bhargav-153" target="_blank" rel="noreferrer">
            <FaGithub className="social-twitter" />
          </a>

          <a href="https://www.instagram.com/bhargav_sirja/" target="_blank" rel="noreferrer">
            <GrInstagram className="social-twitter" />
          </a>

          <a href="#" className="scrollToTop">
            <FaChevronUp className="social-twitter" />
          </a>
        </div>

        <div className="main-footer__lower">
          &copy; {new Date().getFullYear()} Created by
          <a rel="noreferrer" target="_blank" href="/">
            Bhargav Sirja
          </a>
          - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
