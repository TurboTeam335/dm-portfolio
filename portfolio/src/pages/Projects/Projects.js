import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import smirk from "./img/smirk2.png"
import bookends from "./img/bookends.png"
import portfolio from '../../assets/img/portfolio-img3.png'
import appointme from './img/appointme.png'
import weatherHub from './img/weatherHub.png'
import quote from './img/quote.png'
import './Projects.css'

function Projects() {
  const projectData = [
    {
      title: "Quote Generator.",
      image: quote,
      description: "Quote Generator is a full-stack application that allows users to save and generate quotes. It is crafted with a modern React frontend, powered by a Python microservice, and backed by SQLite. The application features a user-friendly interface that enables users to effortlessly save their favorite quotes and generate random ones at their leisure. Quote Generator is a robust and scalable application that showcases my skills in developing and deploying full-stack applications, utilizing a variety of technologies and frameworks.",
      link: "https://github.com/TurboTeam335/quote-generator",
      deployedLink: "https://6513747a847336316b8e4aa9--relaxed-biscuit-401065.netlify.app/"
    },
    {
      title: "WeatherHub.",
      image: weatherHub,
      description: "WeatherHub is a user-friendly weather forecasting application designed to provide users with real-time climatic insights. Utilizing the Open Weather API, it offers detailed weather conditions and forecasts, aiding in informed planning and preparation. This project showcases my ability to integrate third-party APIs and develop intuitive interfaces, handling a diverse range of meteorological data.",
      link: "https://github.com/TurboTeam335/weather-react",
      deployedLink: "https://turboteam335.github.io/weather-react/"
    },
    // {
    //   title: "appointme.",
    //   image: appointme,
    //   description: "appointme. offers a comprehensive and efficient solution for vendors by providing them with a user-friendly dashboard. This dashboard allows vendors to easily schedule clients, manage a comprehensive client database, and create detailed profiles showcasing the range of services offered along with associated costs to potential clients. With appointme., vendors can streamline their operations and enhance their ability to attract and serve clients effectively.",
      // link: "https://github.com/EFP18/AppointMe",
    //   deployedLink: "https://appointme-deploy-73ae09842608.herokuapp.com/"
    // },
    {
      title: "SMIRK: Stock Market Insights & Ridiculous Knowledge",
      image: smirk,
      description: "SMIRK is a comprehensive stock analysis tool designed to empower investors with real-time data and insights. Leveraging an advanced stock exchange API, the application presents users with up-to-the-minute market trends, facilitating informed investment decisions. This project showcases my proficiency in using third-party APIs and creating user-friendly interfaces that handle a wide array of data.",
      link: "https://github.com/TurboTeam335/smirk",
      deployedLink: "https://turboteam335.github.io/smirk/"
    },
    {
      title: "BookEnds",
      image: bookends,
      description: "BookEnds is a community-driven platform that connects book lovers and fosters a culture of sharing within neighborhoods. The platform allows users to search for available books in book-share boxes across their neighborhood. It demonstrates my skills in creating full-stack applications, focusing on user experience, and promoting community interaction.",
      link: "https://github.com/TurboTeam335/BookEnd",
      deployedLink: "https://frozen-castle-12259.herokuapp.com/"
    },
    // {
    //   title: "Portfolio",
    //   image: portfolio,
    //   description: "This Portfolio is a showcase of my latest accomplishments and endeavors. It epitomizes my dedication to creating polished web experiences, incorporating the latest web technologies and design principles. Feel free to explore the repository for this site to gain insights into my coding practices and design sensibilities.",
    //   link: "https://github.com/TurboTeam335/dm-portfolio",
    //   // deployedLink: "https://turboteam335.github.io/Weather-Dashboard/"
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
                  <Button className="btn-custom shadow-custom mx-1" variant="custom" href={project.deployedLink} target="_blank">Visit Site</Button>
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