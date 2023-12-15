import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <Container id='about' className='py-4 about'>
      <Row>
        <Col sm={8}>
          <h2>About</h2>
        </Col>
        <Col xs={12} className='order-2 order-md-1'>
          <div className='about-me mx-1'>
            <p>
              As a budding Full Stack Developer with a rich history in music and
              an adventurous spirit, I bring a fresh and dynamic approach to
              software development. My journey from touring musician to tech
              enthusiast is fueled by a love for learning and a natural
              inclination towards creative problem-solving. While I'm relatively
              new to the professional tech scene, my commitment to continuous
              learning and my hands-on experience through intensive educational
              programs have equipped me with a strong foundation in front-end
              technologies like React, CSS, and HTML.
            </p>

            <p>
              My keen interest in UI/UX design is driven by a desire to blend
              aesthetics with functionality, creating user experiences that are
              not just effective but also visually captivating. While my primary
              focus has been on front-end development, I'm also skilled in
              backend technologies like Node.js and Python, which enables me to
              understand and contribute to the broader scope of projects.
            </p>

            <p>
              Off the screen, my life revolves around music and cooking –
              hobbies that demand precision, creativity, and an open mind. These
              passions have honed my attention to detail, adaptability, and
              collaborative skills – attributes that I bring to every project I
              undertake.
            </p>

            <p>
              As I embark on this new phase of my career, my goal is to
              specialize in UI/UX design and programming. I'm excited about the
              endless possibilities in the tech world and eager to make my mark
              by crafting unique digital experiences. My journey from stages to
              screens is just beginning, and I am enthusiastic about the
              opportunities to merge my artistic background with technological
              innovation.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
