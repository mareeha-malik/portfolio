import React from 'react';
import './projects.css';
import project1 from '../../assets/MWApp.png';
import project2 from '../../assets/K.png';
import project3 from '../../assets/grey.png';
import project4 from '../../assets/cameleon.png';
import project5 from '../../assets/lms.png';
import project6 from '../../assets/image.png';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {[project1, project2, project3,project5, project4, project6].map((img, index) => (
          <div key={index} className="project-card">
            <img src={img} alt={`Project ${index + 1}`} className="projects-img" />
            <div className="overlay">
              <span className="view-text">View Project</span>
            </div>
          </div>
        ))}
      </div>
  <Link to="/graphic">
  <div className="see-more-container">
    <button className="see-more-btn">See More</button>
  </div>
</Link>

    </section>
  );
};

export default Projects;
