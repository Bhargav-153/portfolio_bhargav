import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaFileAlt, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Hero.css";
import Typed from "typed.js"; // Import Typed.js
import resume from "../assets/Resume.pdf";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Frontend Developer...', 'Backend Developer...', 'Full Stack Developer...'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1100,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup Typed instance on component unmount
    };
  }, []);

  return (
    <div>
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">Hey, I'm Bhargav Sirja</h1>
          <h3 className="multiple-text-container">
            And I'm a <span ref={typedRef} className="multiple-text"></span>
          </h3>

          <div className="home-hero__info">
            <p className="text-primary">
              Welcome to my portfolio! I specialize in creating engaging, user-friendly websites that not only look great but also deliver exceptional functionality.
            </p>
          </div>

          <div className="home-hero__cta">
            <a href="./#projects" className="btn btn--bg">Projects</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a
              href="https://www.linkedin.com/in/bhargav-sirja-540aaa247/"
              className="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin className="home-hero__social-icon" size={30} color="#000" />
            </a>
          </div>

          <div className="home-hero__social">
            <a
              href="https://github.com/Bhargav-153"
              className="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub className="home-hero__social-icon" size={30} color="#000" />
            </a>
          </div>

          <div className="home-hero__social">
            <a
              href="https://x.com/SirjaBhargav"
              className="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <FaSquareXTwitter className="home-hero__social-icon" size={30} color="#000" />
            </a>
          </div>

          {/* Resume Download */}
          <div className="home-hero__social">
            <a
              href={resume}
              className="home-hero__social-icon-link"
              download="Bhargav_CV"
            >
              <FaFileAlt className="home-hero__social-icon" size={30} color="#000" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
