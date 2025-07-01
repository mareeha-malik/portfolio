import React from 'react';
import './intro.css';
import intro from '../../assets/intro2.png';
import bag from '../../assets/bag.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContainer">
        <div className="introContent">
          <span className="Hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Mareeha Malik</span><br />
            Designer & Developer
          </span>
          <p className="introDescription">
            a developer by logic, a graphic designer by heart, building sleek apps and stunning visuals.
          </p>
          <a href="https://www.linkedin.com/in/mareeha-malik-556956274/" target="_blank" rel="noopener noreferrer">
            <div className="introButton">
              <img src={bag} alt="Intro Icon" className="introButtonIcon" />
              <span className="introButtonText">Hire Me</span>
            </div>
          </a>
        </div>
        <img src={intro} alt="Intro" className="introImage" />
      </div>
    </section>
  );
};

export default Intro;
