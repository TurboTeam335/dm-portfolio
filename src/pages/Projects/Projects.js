import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import projectData from './ProjectData';
import OpenSource from './OpenSource';
import Quotes from '../../components/Quotes/Quotes';
import './Projects.css';

function Projects() {
  return (
    <Container className='py-4'>
      <h2>Projects</h2>
      {projectData.map((project, index) => (
        <Card className={`my-3 horizontal-card ${index % 2 === 0 ? 'even-project' : 'odd-project'}`} key={index}>
          <div className={`d-flex flex-column flex-md-row ${index % 2 === 0 ? 'flex-md-row-reverse' : ''}`}>
            <div className='image-container'>
              <Card.Img className='project-img' src={project.image} />
            </div>
            <Card.Body className='project-details'>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>

              {/* Technology Icons */}
              <div className='project-technologies'>
                {project.technologies &&
                  project.technologies.map((tech, idx) => (
                    <img key={idx} src={tech} alt='Technology' className='tech-icon' />
                  ))}
              </div>

              <div className='project-links'>
                {project.link && (
                  <Button className='btn-proj mx-1' href={project.link} target='_blank'>
                    Visit Repository
                  </Button>
                )}
                {project.deployedLink && (
                  <Button className='btn-proj mx-1' href={project.deployedLink} target='_blank'>
                    Visit Site
                  </Button>
                )}
              </div>
            </Card.Body>
          </div>
        </Card>
      ))}
      <OpenSource />
      <Quotes quoteIndex={1} />
    </Container>
  );
}

export default Projects;
