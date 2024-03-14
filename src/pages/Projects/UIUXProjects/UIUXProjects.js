import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import uiuxProjectData from './UIUXProjectData'; 

function UIUXProjects() {
  return (
    <Container className='py-4'>
      <h2>UI/UX Design Projects</h2>
      {uiuxProjectData.map((project, index) => (
        <Card className={`my-3 ${index % 2 === 0 ? 'even-uiux' : 'odd-uiux'}`} key={index}>
          <div className='d-flex flex-column flex-md-row'>
            <div className='image-container'>
              <Card.Img className='project-img' src={project.image} />
            </div>
            <Card.Body className='project-details'>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <div className='project-links'>
                {project.figmaLink && (
                  <Button className='btn-uiux mx-1' href={project.figmaLink} target='_blank'>
                    View Figma
                  </Button>
                )}
                {project.researchLink && (
                  <Button className='btn-uiux mx-1' href={project.researchLink} target='_blank'>
                    View Research
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
