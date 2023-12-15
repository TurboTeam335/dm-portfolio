import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import headshot from './img/Frame.png';

function Home() {
  return (
    <Container className='home py-4 '>
      <Row className="align-items-center justify-content-center">
        <Col sm={8}>
          <div className="text-block mx-2" >
            <h1 className="about-title">
              Hello, I'm Daniel <span className="wave">👋</span>
            </h1>
            <h3>Welcome to my ePortfolio</h3>
            <p className="about-me ">
              I am a Full Stack Software Developer with a keen eye for detail and
              a propensity for creative problem-solving. Driven by enthusiasm and
              the desire to continuously learn.
            </p>
          </div>
        </Col>
        <Col sm={4} className="text-center">
          <Image src={headshot}  className="navbar-headshot" />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
