import React from 'react';
// import './Clients.css'; // if you're styling it separately
import Navbar from '../components/NavBar/navbar';
import About_ from '../components/about';
import Footer from '../components/Footer/footer';
import Contact from '../components/Contact/contact';
const About = () => {
  return (
    
    <section id="about">
      <Navbar />
      <About_/>
            <Contact/>

      <Footer/>
     </section>
  );
};

export default About;
