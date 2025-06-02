// src/Pages/GraphicDesign.jsx
import React from 'react';
import Navbar from '../components/NavBar/navbar';
import Footer from '../components/Footer/footer';
import GraphicProjectCards from '../components/GraphicProjectCards';
import './GraphicDesign.css';

const GraphicDesign = () => {
  return (
    <>
      <Navbar />
      <section className="graphic-section">
        <h2 className="graphic-title">Graphic Design Projects</h2>

        <div className="graphic-category">
          <h3>Logo Designs</h3>
          <GraphicProjectCards type="logo" />
        </div>

        <div className="graphic-category">
          <h3>T-Shirt Designs</h3>
          <GraphicProjectCards type="tshirt" />
        </div>

        <div className="graphic-category">
          <h3>Alphabets</h3>
          <GraphicProjectCards type="alphabet" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GraphicDesign;
