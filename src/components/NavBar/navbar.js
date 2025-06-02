import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import msg from '../../assets/msg.png';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <img src="MM.png" alt="Logo" className="logo" />

      <div className={`desktopMenu ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="desktopMenuItem" onClick={toggleMenu}>
  Home
</Link>

        <Link to="/about" smooth={true} duration={500} className="desktopMenuItem" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/graphic" smooth={true} duration={500} className="desktopMenuItem" onClick={toggleMenu}>
          Portfolio
        </Link>
        <Link to="/clients" smooth={true} duration={500} className="desktopMenuItem" onClick={toggleMenu}>
          Clients
        </Link>
      </div>

     <button
  className="desktopMenuButton"
  onClick={() => window.location.href = 'mailto:mareehamalik95@gmail.com'}
>
  <img src={msg} alt="Message Icon" className="desktopMenuIcon" />
  Contact Me
</button>


      <div className="menuToggleIcon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} color="#fff" /> : <FiMenu size={24} color="#fff" />}
      </div>
    </nav>
  );
};

export default Navbar;
