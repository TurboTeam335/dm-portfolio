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
  <div className="about-me mx-4">
    <p>
    As an emerging Full Stack Developer with a background in music, I bring a unique blend of creativity and technical skill to the world of web development. Specializing in front-end technologies like React, CSS, and HTML, I have a keen interest in UI/UX design, aiming to create visually appealing and user-friendly digital experiences. My journey from touring musician to tech enthusiast is marked by a passion for learning and adapting, qualities that I apply in every project. Off-screen, my love for cooking and music enriches my attention to detail and collaborative spirit. Eager to explore the vast possibilities in tech, I am on a mission to combine my artistic flair with practical coding skills to make a meaningful impact in the digital realm.
    </p>
  </div>
</Col>

      </Row>

      <a
        className="btn btn-custom  mx-4 resume"
        href="https://raw.githubusercontent.com/TurboTeam335/dm-portfolio/76c43e8bb892d542dd4c7677e0f24ab4a4dd4636/Daniel%20Mascali%20JrDev%20Resume%20.pdf"
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
