import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import headshot from "./img/headshot.png";

function About() {
  return (
    <Container id="about" className="py-4 about">
      <Row>
        <Col sm={8}>
          <h1 className="mb-3 mx-4 about-title">
            Hello, I'm Daniel <span className="wave">👋</span>
          </h1>
          <h3 className="mb-3 mx-4">Welcome to my ePortfolio</h3>
        </Col>
        <Col sm={4} className="order-1 order-md-2">
          <Image src={headshot} roundedCircle className="navbar-headshot" />
        </Col>
        <Col xs={12} md={8} className="order-2 order-md-1">
          <p className="about-me mx-4">
            I am a Full Stack Software Developer with a keen eye for detail and
            a propensity for creative problem-solving. Driven by enthusiasm and
            the desire to continuously learn, I tackle coding challenges with a
            unique approach, influenced by my background in music. My goal is to
            leverage my technical skills and creative expression to craft
            visually appealing, innovative websites and applications.
          </p>
        </Col>
      </Row>

      <a
        className="btn btn-custom shadow-custom mx-4 resume"
        href="https://raw.githubusercontent.com/TurboTeam335/dm-portfolio/main/Daniel%20Mascali%20JrDev%20Resume%20.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </Container>
  );
}

export default About;
