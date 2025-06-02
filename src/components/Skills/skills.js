import React from 'react';
import './skills.css';

// Import all 15 skill images
import a from '../../assets/skills/1.png';
import b from '../../assets/skills/2.png';
import c from '../../assets/skills/3.png';
import d from '../../assets/skills/4.png';
import e from '../../assets/skills/5.png';
import f from '../../assets/skills/6.png';
import g from '../../assets/skills/7.png';
// import h from '../../assets/skills/8.png';
import i from '../../assets/skills/9.png';
import j from '../../assets/skills/10.png';
import k from '../../assets/skills/11.png';
import l from '../../assets/skills/12.png';
import m from '../../assets/skills/13.png';
import n from '../../assets/skills/14.png';
import o from '../../assets/skills/15.png';

const Skills = () => {
  const logos = [a, b, c, d, e, f, g, i, j, k, l, m, n, o];

  return (
    <section id="skills">
      <h2 className="skills-title">Tech Stack & Tools</h2>
      <div className="skills-logos">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`skill-${index + 1}`} className="skill-logo" />
        ))}
      </div>
    </section>
  );
};

export default Skills;
