import React from 'react';
import './web.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import project1 from '../../assets/image.png';
import project2 from '../../assets/MWApp.png';
import project3 from '../../assets/velora.png';
import project4 from '../../assets/xoverse.png'; 
// import project5 from '../../assets/planly_.png'; // Assuming you have a fifth project image
const projects = [
  {
    title: "E-commerce store",
    img: project1,
    link: "https://ecommerce-store.vercel.app/", 
    github: "https://github.com/mareeha-malik/Web_Project.git"
  },
  {
    title: "MW Sports App",
    img: project2,
    link: "https://github.com/mareeha-malik/MW_App_final.git",
    github: "https://github.com/mareeha-malik/MW_App_final.git"
  },
  { 
    title: "Velora-A Digital Clock",
    img: project3,
    link: "https://veloraclock.vercel.app/",
    github: "https://github.com/mareeha-malik/Velora"
  },
  {
    title: "x-overse",
    img: project4,
    link: "https://x-overse.vercel.app/",
    github: "https://github.com/mareeha-malik/XOverse"
  },
  {
    title: "Planly - A Task Management App",
    img: "https://res.cloudinary.com/dugqqxf20/image/upload/v1751730732/planly__nx4toz.png",
   link: "https://planly-five.vercel.app/",
  github: "https://github.com/mareeha-malik/Planly.git"
    } 
];


const WebProjectCards = () => {
  return (
    <div className="web-grid">
  {projects.map((project, index) => (
    <div className="web-card" key={index}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img src={project.img} alt={project.title} className="web-image" />
        <h3 className="web-card-title">{project.title}</h3>
      </a>
      <div className="web-icons">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FiGithub className="web-icon" title="GitHub Repo" />
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="web-icon" title="Live Preview" />
          </a>
        )}
      </div>
    </div>
  ))}
</div>

  );
};

export default WebProjectCards;
