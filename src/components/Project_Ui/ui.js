import React from 'react';
import './ui.css';
import { FiExternalLink } from 'react-icons/fi';
import project1 from '../../assets/Blue_Blob.png';
import project2 from '../../assets/UI2.png';
import project3 from '../../assets/portfolio.png';
import project4 from '../../assets/planly.png';
import project5 from '../../assets/appstore.png';


const projects = [
  {
    title: "Login Page Design",
    img: project1,
    link: "https://www.figma.com/design/8j4NVvXvfBxHqCLHiJXOzQ/Blue_Blob_Authentication?m=auto&t=d3OfOfYpEATOEOOj-1"
  },
  {
    title: "Landscape Login Page",
    img: project2,
    link: "https://www.figma.com/design/RON7d70s3K6FiHtIOzHP0l/Landscape-Login?m=auto&t=d3OfOfYpEATOEOOj-1"
  },
  {
    title: "Portfolio Design",
    img: project3,
    link: "https://https://www.figma.com/design/cT6z9DBmJdHwWU2F1nv6pM/Portfolio-Design?node-id=0-1&p=f&t=S9qUli5qSVKjgkuT-0.figma.com"
  },
  {
    title: "Planly 'Task Management App'",
    img: project4,
    link: "https://www.figma.com/design/Myw09ZiCnfL3Kh6iBFnd8V/Untitled?node-id=0-1&p=f&t=P7B9XUI0hXJzbVmp-0"
  },
  {
    title: "App Store Design",
    img: project5,
    link: "https://www.figma.com/design/lTsrcaNqAzeezM9qg9gxzZ/Untitled?node-id=0-1&p=f&t=mCGBMh7fYmLjx4Dl-0"
  }
];

const UIProjectCards = () => {
  return (
    <div className="uiux-grid">
      {projects.map((project, index) => (
        <div className="uiux-card" key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.img} alt={project.title} className="uiux-image" />
            <h3 className="uiux-card-title">{project.title}</h3>
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-arrow"
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default UIProjectCards;
