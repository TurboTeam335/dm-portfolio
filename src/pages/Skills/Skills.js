import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import htmlLogo from './img/html.png';
import cssLogo from './img/css.png';
import jsLogo from './img/js.png';
import reactLogo from './img/react.png';
import nodeLogo from './img/node.png';
import mysqlLogo from './img/mysql.png';
import mongodbLogo from './img/mongodb.png';
import gpt from './img/gpt.png';
import php from './img/php.png';
import wordpress from './img/wordpress2.png';
import python from './img/python.png';
import './Skills.css';

const skills = [
  { name: 'HTML', logo: htmlLogo, level: 90 },
  { name: 'CSS', logo: cssLogo, level: 90 },
  { name: 'JavaScript', logo: jsLogo, level: 80 },
  { name: 'React', logo: reactLogo, level: 85 },
  { name: 'Python', logo: python, level: 55 },
  { name: 'WordPress', logo: wordpress, level: 50 },
  { name: 'PHP', logo: php, level: 60 },
  { name: 'Node.js', logo: nodeLogo, level: 60 },
  { name: 'MySQL', logo: mysqlLogo, level: 60 },
  { name: 'MongoDB', logo: mongodbLogo, level: 60 },
  { name: 'Prompt Engineering', logo: gpt, level: 100 },
];
const skillsDescriptions = [
  '⚡ Proficient in designing and developing responsive, user-friendly web interfaces using React.',
  '⚡ Proficient in implementing SPA (Single Page Applications) and PWA (Progressive Web Applications) for optimized user experience.',
  '⚡ Experience in integrating third-party services and APIs for enhanced functionality.',
  '⚡ Skilled in prompt engineering for large language models, focusing on generating precise and contextually relevant outputs.',
];


function Skills() {
  return (
    <Container className='py-4'>
      <Row>
        <Col lg={6}>
          <h2>Skills</h2>
          <Row className='skills-container'>
            {skills.map((skill, index) => (
              <Col xs={3} md={3} key={index} className='skill-col'>
                <div className='skill-item'> {/* New wrapper */}
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    className='skills-logo'
                    fluid
                  />
                  <p className='skill-name'>{skill.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={6}>
          <h2 className='proficiencies'>Proficiencies</h2>
          <ul className='skill-descriptions'>
            {skillsDescriptions.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;


