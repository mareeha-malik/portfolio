// src/Pages/UIUXProjects.jsx
import React from 'react';
import Navbar from '../components/NavBar/navbar';
import Footer from '../components/Footer/footer';
import UIProjectCards from '../components/Project_Ui/ui';
import './UIUXProjects.css';
import img from '../assets/uiux.png';
const UIUXProjects = () => {
  return (
    <>
      <Navbar />
      <section className="uiux-section">
        <div className="uiux-header">
         <div className="uiux-header">
  <img src={img} alt="" className="project-image" />
  <h2 className="uiux-title">UI/UX Projects</h2>
</div>

          </div>       
        <UIProjectCards />
      </section>
      <Footer />
    </>
  );
};

export default UIUXProjects;
