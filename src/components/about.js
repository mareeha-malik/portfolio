import React from 'react';
import './about.css';

const About_ = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="intro.png" alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
  Hi, I'm <strong className='name'>Mareeha Malik</strong>, a creative professional with a passion for both <strong className='design'>Graphic Design</strong> and <strong className='web'>Web Application Development</strong>. I enjoy bringing ideas to life — whether it’s through designing eye-catching visuals or developing functional and user-friendly digital experiences.
</p>
<p>
  I’ve had the opportunity to work with diverse brands such as <strong className='mw'>MW Sports</strong> and <strong className='reel'>Reel & Royl</strong> (an Etsy store), where I contributed as a Graphic Designer and Web Development support. My work ranges from designing brand identities and social media content to building responsive websites and applications.
</p>
<p>
  With a strong focus on creativity, detail, and clean execution, I aim to deliver impactful designs and smooth-performing digital solutions tailored to client needs.
</p>

        </div>
      </div>
    </section>
  );
};

export default About_;
