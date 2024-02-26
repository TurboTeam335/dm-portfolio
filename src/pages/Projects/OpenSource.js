import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import './Projects.css';
import react from '../Skills/img/react.png';

const openSourceData = [
  {
    title: "Alarm-Clock",
    description: "UF Alarm Clock: Transform your wake-up routine with the UF Alarm Clock, an innovative solution that combines the reliability of traditional alarm clocks with cutting-edge features. Designed to motivate punctuality and improve sleep habits, this alarm clock goes beyond the norm by offering customizable consequences for oversleeping and pioneering wakefulness detection. Embrace a morning revolution that not only wakes you up but keeps you up.",
    contribution: "I have actively contributed to enhancing the UF Alarm Clock by refactoring and modularizing the alarm selection interface, which improved navigation and component management. I spearheaded the user experience design, creating a user-friendly alarm setting interface with an intuitive flow reminiscent of iOS, and gave the app a consistent, modern look. By breaking down the alarm functionality into manageable components and organizing styles into a dedicated folder, I've streamlined the codebase for easier maintenance and scalability. On the home screen, I implemented a new alarm display that allows users to view and interact with their alarms seamlessly, thanks to a fresh card design and the addition of a direct delete function on the AlarmCard for efficient alarm management.",
    technologies: [react], 
    link: "https://github.com/ufosc/Alarm-Clock",
  },

];

function OpenSource() {
  return (
    <Container className='py-4'>
      <h3>Open-Source Projects</h3>
      {openSourceData.map((project, index) => (
        <Card className='my-3' key={index}>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text><strong>My Contribution:</strong> {project.contribution}</Card.Text>

            {/* Technology Icons */}
            <div className='project-technologies'>
              {project.technologies &&
                project.technologies.map((tech, idx) => (
                  // Assuming you have the technology icons/images similar to your project data
                  // You may need to adjust this part to render icons as you have in your ProjectData
                  <img key={idx} src={tech} alt='Technology' className='tech-icon' />
                ))}
            </div>

            <div className='project-links'>
              {project.link && (
                <Button className='btn-proj mx-1' href={project.link} target='_blank'>
                  Visit Repository
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default OpenSource;
