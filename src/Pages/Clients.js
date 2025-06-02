import React from 'react';
import './Clients.css'; // if you're styling it separately
import Navbar from '../components/NavBar/navbar';
import Footer from '../components/Footer/footer';
import Contact from '../components/Contact/contact';
const Clients = () => {
  return (
    
    <section id="clients">
      <Navbar />
      <h2 className="clients-title">Worked With</h2>

      <div className="client-proof-container">
        <a href="https://www.etsy.com/shop/reelandroyl" target="_blank" rel="noopener noreferrer">

        <img
          src="reel.png"
          alt="Client Website Screenshot"
          className="client-proof-img"
        />
        </a>

        <p className="client-proof-caption">
         I had the opportunity to work as a graphic designer with Reel and Royl, a creative Etsy store specializing in unique, custom-made products.
        </p>
         <a href="https://www.etsy.com/shop/reelandroyl" target="_blank" rel="noopener noreferrer">

        <img
          src="MW.svg"
          alt="Client Website Screenshot"
          className="client-proof-img"
        />
        </a>

        <p className="client-proof-caption">
Teaming up with MW Sports as their Graphic Designer — managing everything from social media creatives to full branding visuals        </p>
      </div>
      <Contact/>
      <Footer/>

    </section>
  );
};

export default Clients;
