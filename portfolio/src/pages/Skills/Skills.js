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


function Skills({ schools }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 300); 
  }, []);

      return (
        <Container id='' className='py-4'>
          <Row>
            <Col lg={6}>
              <h2>Skills</h2>
              <Row className='skills-container'>
                {skills.map((skill, index) => (
                  <Col sm={12} key={index} className='skill-row'>
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      id='skill-logo'
                      fluid
                    />
                    <div className="skill-bar-container">
                    <div className="skill-bar" style={{width: loaded ? `${skill.level}%` : '0%'}}></div>

                    </div>
                    {/* <p className='skill-name'>{skill.name}</p> */}
                  </Col>
                ))}
              </Row>
            </Col>
        <Col lg={6}>
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
