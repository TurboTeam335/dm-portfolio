import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import smirk from "./img/smirk.png"
import bookends from "./img/bookends.png"
import weather from "./img/weather.png"
import './Projects.css'

function Projects() {
  const projectData = [
    {
      title: "SMIRK: Stock Market Insights & Ridiculous Knowledge",
      image: smirk,
      description: "SMIRK is a comprehensive stock analysis tool designed to empower investors with real-time data and insights. Leveraging an advanced stock exchange API, the application presents users with up-to-the-minute market trends, facilitating informed investment decisions. This project showcases my proficiency in using third-party APIs and creating user-friendly interfaces that handle a wide array of data.",
      link: "https://github.com/TurboTeam335/smirk",
      // deployedLink: "https://turboteam335.github.io/smirk/"
    },
    {
      title: "BookEnds",
      image: bookends,
      description: "BookEnds is a community-driven platform that connects book lovers and fosters a culture of sharing within neighborhoods. The platform allows users to search for available books in book-share boxes across their neighborhood. It demonstrates my skills in creating full-stack applications, focusing on user experience, and promoting community interaction.",
      link: "https://github.com/SidneyEdwards/GreenPage",
      // deployedLink: "https://frozen-castle-12259.herokuapp.com/"
    },
    // {
    //   title: "Weather Dashboard",
    //   image: weather,
    //   description: "A simple and user-friendly weather dashboard that provides current weather conditions, as well as a 5-day forecast for any city you search.",
    //   link: "https://github.com/TurboTeam335/Weather-Dashboard",
    //   deployedLink: "https://turboteam335.github.io/Weather-Dashboard/"
    // },

  ]

  return (
    <Container  className="py-4">
      <h2>Projects</h2>
      <Row>
        {projectData.map((project, index) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
            <Card className='shadow-custom h-100'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={project.image} />
              </a>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
                <div className="mt-auto d-flex justify-content-center">
                  <Button className="btn-custom shadow-custom mx-1" variant="primary" href={project.link} target="_blank">Visit Repository</Button>
                  {/* <Button className="btn-custom shadow-custom mx-1" variant="primary" href={project.deployedLink} target="_blank">Visit Deployed Site</Button> */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
