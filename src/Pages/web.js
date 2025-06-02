// src/Pages/UIUXProjects.jsx
import React from 'react';
import Navbar from '../components/NavBar/navbar';
import Footer from '../components/Footer/footer';
import WebProjectCards from '../components/Project_web/web';
import './web.css';
import img from '../assets/webdesign.png';
const WebProjects = () => {
  return (
    <>
      <Navbar />
      <section className="web-section">
        <div className="web-header">
          <div className="header-image-container">
            <img src={img} alt="Web Development" className="project-img" />
          </div>
          <h2 className="web-title">Web Development Projects</h2>
        </div>  
        <div className='content'>
          <WebProjectCards/>
        </div>     
      </section>
      <Footer />
    </>
  );
};
export default WebProjects;
