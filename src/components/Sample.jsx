import React from "react";
import { Link } from "react-router-dom";
import "./Sample.css";
import agricultural from '../assets/agrimart.jpg';
import project1 from '../assets/project1.jpeg';
import blogify from '../assets/blog.jpeg';
import footware from '../assets/shivay-footware.png';

const Sample = () => {
  return (
    <div>
      <section className="about">
        <div className="new">

          <div className="row">
            <div className="image">
              <img src={agricultural} alt="About Pizza Shop" />
            </div>
            <div className="content">
              <h3>Welcome to our <span>Agrimart</span> </h3>

              <p>Agrimart is an e-commerce platform designed specifically for farmers. It provides a marketplace for agricultural products like seeds, fertilizers, and tools</p>

              <p>while also offering resources such as government scheme information, weather updates, and crop cultivation tips. Farmers can network through a contact directory, compare prices, track orders, and connect with nurseries for seedlings.</p>
              <p>The platform aims to empower farmers by streamlining access to essential products and information.</p>
           
            
              <Link to="/" className="btn">Back to Home</Link>
              <Link to="https://github.com/Bhargav-153"className="btn">Go to Project</Link>
            </div>
          </div>

          <div className="row">
            <div className="image">
              <img src={project1} alt="About Pizza Shop" />
            </div>
            <div className="content">
              <h3>Welcome to our <span>Pizza Hub</span> </h3>
              <p>Pizza Delight is a visually appealing and user-friendly pizza ordering website built with HTML, CSS, and JavaScript. It features a dynamic menu section showcasing delicious pizzas with descriptions and an "Order Now" button for easy selection.</p>
              <p> The website also includes a contact form, allowing customers to reach out for inquiries. With a responsive design, it ensures a seamless experience across all devices.</p>
              <Link to="/"  className="btn">Back to Home</Link>
              <Link to="https://github.com/Bhargav-153" className="btn">Go to Project</Link>
            </div>
          </div>

          <div className="row">
            <div className="image">
              <img src={blogify} alt="About Pizza Shop" />
            </div>
            <div className="content">
              <h3>Welcome to our <span>Blogify</span> </h3>
              <p>Blogify is a dynamic and fully responsive blog platform built using the MongoDB, Express.js, React.js, Node.js. It allows users to create, read, update, and delete blog posts.  🚀</p>
              <p>The website features user authentication, rich text editing, and a comment system, providing an engaging experience for writers and readers. With a modern UI/UX, fast performance, and secure backend.</p>
              <p>Blogify is designed to be a seamless platform for content sharing.</p>
              <Link to="/" className="btn">Back to Home</Link>
              <Link to="https://github.com/Bhargav-153"className="btn">Go to Project</Link>
            </div>
          </div>

          <div className="row">
            <div className="image">
              <img src={footware} alt="About Pizza Shop" />
            </div>
            <div className="content">
              <h3>Welcome to our <span>Footware</span> website </h3>
              <p> Footware website is a stylish and responsive e-commerce platform for footwear, offering a wide range of shoes, sneakers, sandals, and more.</p>
              <p> Designed for a seamless shopping experience, the website features intuitive navigation, product filtering, and secure checkout.</p>
              <p>Built with a modern tech stack, it ensures fast performance, mobile-friendly design, and engaging UI/UX.</p>
              <Link to="/" className="btn">Back to Home</Link>
              <Link to="https://github.com/Bhargav-153"className="btn">Go to Project</Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Sample;
