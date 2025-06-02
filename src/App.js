// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Services from './components/Services/services';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import WebProjects from './Pages/web'; // Your UI/UX Projects page
import GraphicDesign from './Pages/GraphicDesign';
import UIUXProjects from './Pages/UiUx'; // Your UI/UX Projects page
import Clients from './Pages/Clients';
import About from './Pages/About';
function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route with all main sections */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Intro />
              <Services />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* UI/UX Projects Route */}
        <Route path="/uiux" element={<UIUXProjects />} />
        <Route path="/webdev" element={<WebProjects />} />
        <Route path="/graphic" element={<GraphicDesign/>} />
        <Route path="/home" element={<App />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/portfolio" element={<Services />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
