import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import Quotes from '../../components/Quotes/Quotes';
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
              I’m a Full Stack Developer with a background in music, bringing a
              unique approach to software development. My transition from
              musician to tech enthusiast is driven by my love for learning and
              problem-solving. Although new to the tech scene, my continuous
              learning and hands-on experience have given me a strong foundation
              in front-end technologies like React, CSS, and HTML.
            </p>

            <p>
              I have a keen interest in UI/UX design, aiming to create visually
              captivating and effective user experiences. I’m also proficient in
              backend technologies like Node.js and Python, allowing me to
              contribute to a wider range of projects.
            </p>

            <p>
              Away from the screen, I enjoy music and cooking, hobbies that have
              sharpened my attention to detail, adaptability, and teamwork. As I
              start this new phase of my career, I aim to specialize in UI/UX
              design and programming. I’m excited about the tech world’s endless
              possibilities and look forward to merging my artistic background
              with technological innovation.
            </p>
          </div>
        </Col>
      </Row>
      <Quotes quoteIndex={0} />
    </Container>
  );
}

export default About;
