import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { skills, skillsDescriptions, settings } from './SkillsData';
import './Skills.css';

function Skills() {
  return (
    <Container className='py-4'>
      <Row>
        <Col xs={12}>
          <h2>Skills</h2>
          <div
          // className="skills-box"
          >
            <Slider {...settings}>
              {skills.map((skill, index) => (
                <div key={index} className='skill-item'>
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    className='skills-logo'
                    fluid
                  />
                  <p className='skill-name'>{skill.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Row>

      <Row className='py-4'>
        <Col xs={12}>
          <ul className='skill-descriptions mx-2'>
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
