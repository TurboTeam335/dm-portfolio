import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import uiuxProjectData from './UIUXProjectData';
import '../Projects.css';

function UIUXProjects() {
  return (
    <Container className='py-4'>
      <h3>UI/UX Design Projects</h3>
      {uiuxProjectData.map((project, index) => (
        <Card
          className={`my-3 horizontal-card ${
            index % 2 === 0 ? 'even-uiux' : 'odd-uiux'
          }`}
          key={index}
        >
          <div className='d-flex flex-column flex-md-row'>
            <div className='image-container'>
              <Card.Img className='project-img' src={project.image} />
            </div>
            <Card.Body className='project-details'>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <div className='project-links'>
                {project.figmaLink && (
                  <Button
                    className='btn-uiux mx-1'
                    href={project.figmaLink}
                    target='_blank'
                  >
                    Figma
                  </Button>
                )}
                {project.researchLink && (
                  <Button
                    className='btn-uiux mx-1'
                    href={project.researchLink}
                    target='_blank'
                  >
                    Case Study
                  </Button>
                )}
              </div>
            </Card.Body>
          </div>
        </Card>
      ))}
    </Container>
  );
}

export default UIUXProjects;
