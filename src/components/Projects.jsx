import React from 'react';
import "./Projects.css";

// Import images from the assets folder
import agricultural from '../assets/agrimart1.jpg';
import pizza from '../assets/project1.jpeg';
import blog from '../assets/blog.jpeg';
import footware from '../assets/project2.jpeg';
import { useNavigate } from "react-router-dom";


const Projects = () => {
  const navigate = useNavigate();
  // Function to handle button click


  return (
    <div>
      <section className="portfolio" id="projects">
        <h2 className="heading">
          MY <span>PROJECTS</span>
        </h2>
        <div className="portfolio-container">
          <div className="portfolio-item">
            <img src={agricultural} alt="Pizza Website" />
            <p>Agrimart</p>
            <button onClick={() => navigate('/details-page')} className='view_btn'>View Project</button>
            
          </div>

       
          
          <div className="portfolio-item">
            <img src={pizza} alt="Grow Website Clone" />
            <p>Pizza Hub</p>
            <button onClick={() => navigate('/details-page')} className='view_btn'>View Project</button>
          </div>
          
          <div className="portfolio-item">
            <img src={blog} alt="Portfolio" />
            <p>Blogify</p>
            <button onClick={() => navigate('/details-page')} className='view_btn'>View Project</button>
          </div>

          <div className="portfolio-item">
            <img src={footware} alt="Footwear Website" />
            <p>Footwear Website</p>
            <button onClick={() => navigate('/details-page')} className='view_btn'>View Project</button>
          </div>
       
         
        </div>
      </section>
    </div>
  );
};

export default Projects;