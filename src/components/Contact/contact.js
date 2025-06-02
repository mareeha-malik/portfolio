import React from 'react';
import './contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact-title">Let's Connect</h2>
      <div className="contact-icons">
        <a href="https://github.com/mareeha-malik" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/mareeha-malik-556956274/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
