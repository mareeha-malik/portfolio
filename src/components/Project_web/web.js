import React from 'react';
import './web.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import project1 from '../../assets/image.png';
import project2 from '../../assets/MWApp.png';

const projects = [
  {
    title: "E-commerce store",
    img: project1,
    link: "https://github.com/mareeha-malik/Web_Project.git"
  },
  {
    title: "MW Sports App",
    img: project2,
    link: "https://www.figma.com/design/RON7d70s3K6FiHtIOzHP0l/Landscape-Login?m=auto&t=d3OfOfYpEATOEOOj-1"
  },
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
            <a href="https://github.com/mareeha-malik/MW_App_final.git" target="_blank" rel="noopener noreferrer">
              <FiGithub className="web-icon" />
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="web-icon" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebProjectCards;
