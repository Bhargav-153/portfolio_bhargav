import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section id="contact" className="contact sec-pad dynamicBg">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          </h2>
          <div className="contact__form-container">
            <form 
              action="https://formspree.io/f/movenbjj" 
              method="POST" 
              className="contact__form"
            >
              <input type="hidden" name="form-name" value="form 1" />
              
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="name">Name</label>
                <input
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  className="contact__form-input"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="email">Email</label>
                <input
                  required
                  placeholder="Enter Your Email"
                  type="email"
                  className="contact__form-input"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="message">Message</label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Enter Your Message"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn--theme contact__btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
