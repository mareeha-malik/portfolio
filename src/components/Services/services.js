import React from 'react';
import './services.css';
import uiIcon from '../../assets/uiux.png';
import webIcon from '../../assets/webdesign.png';
import designIcon from '../../assets/graphicdesign.png';
import { Link } from 'react-router-dom';
// import UIUXProjects from '../Pages/UiUx';
const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services-title">What I do</h2>
      <p className="services-description">
        I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
        I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as
        design software such as Adobe Photoshop and Illustrator.
      </p>

      <div className="services-cards">
       <Link to="/uiux" className="service-card" title="Explore UI/UX Projects">
  <img src={uiIcon} alt="UI/UX Design" />
  <h3>UI/UX design</h3>
  <p>Crafting intuitive interfaces and seamless experiences for web and mobile platforms.</p>
</Link>

        <a href="/webdev" className="service-card" title="Explore Web & App Projects">
          <img src={webIcon} alt="Website Design" />
          <h3>Web & Mobile App Development</h3>
          <p>From websites to mobile apps, I craft smooth, responsive, and fast experiences users love—on any screen.</p>
        </a>

        <a href="/graphic" className="service-card" title="Explore Graphic Design Work">
          <img src={designIcon} alt="Graphic Design" />
          <h3>Graphic design</h3>
          <p>Creating bold, eye-catching visuals that bring ideas to life—logos, branding, posters, and everything in between.</p>
        </a>
      </div>
      <div className="text">Click to open</div>
    </section>
  );
};

export default Services;
