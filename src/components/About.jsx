import React from 'react'
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about sec-pad">
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-med">
        <span className="heading-sec__main">About Me</span>
        <span className="heading-sec__sub">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </span>
      </h2>
      <div className="about__content">
        <div className="about__content-main">
          <h3 className="about__content-title">Get to know me!</h3>
          <div className="about__content-details">
            <p className="about__content-details-para">
            I am a professional <strong>Web Developer</strong> with expertise in <strong>database</strong> administration and building dynamic, responsive websites. I specialize in creating seamless digital experiences, combining modern   <strong>front-end</strong> frameworks with robust   <strong>back-end</strong> solutions.
           
            </p>
            <p className="about__content-details-para">
            With a strong command over
            <strong> React,</strong> I craft dynamic and interactive user interfaces, ensuring a smooth and engaging experience. My skill set extends across a range of front-end and back-end technologies, allowing me to develop 
            <strong> full-stack</strong> applications that are both efficient and scalable.
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/bhargav-sirja-540aaa247/"
                target="_blank"
                >Linkedin</a>
              and
              <a
                rel="noreferrer"
                href="https://github.com/Bhargav-153"
                target="_blank"
                >Github</a>
               where I post useful content related to Web Development and
              Programming
            </p>
          </div>
          <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr"
            >Contact</a>
        </div>
        <div className="about__content-skills"id="skills" >
          <h3 className="about__content-title" >My Skills</h3>
          <div className="skills">
            <div className="skills__skill">HTML</div>
            <div className="skills__skill">CSS</div>
            <div className="skills__skill">JavaScript</div>
            <div className="skills__skill">React</div>
            <div className="skills__skill">Bootstrap </div>
            <div className="skills__skill">Tailwind CSS</div>
            <div className="skills__skill">MySQL</div>
            <div className="skills__skill">Mongodb</div>
            <div className="skills__skill">Django</div>
            <div className="skills__skill">Express Js</div>
            <div className="skills__skill">Node js</div>
            <div className="skills__skill">Python</div>
            <div className="skills__skill">Java</div>
            <div className="skills__skill">Git & Github</div>
            <div className="skills__skill">RESTful API</div>
            <div className="skills__skill">Data Structure & Algoritham</div>
          
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default About