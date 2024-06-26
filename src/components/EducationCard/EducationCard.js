import React, { createRef } from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import vanderbiltLogo from './img/vanderbilt.webp';
import googleCloudLogo from './img/googleAssistantLogo.webp';
import uncgLogo from './img/uncg.png';
import coursera from './img/coursera.png';
import udemy from './img/udemy.png';
import googleUI from './img/googleUI.png'
import './EducationCard.css';

export const schoolInfo = [
  {
    schoolName: 'Vanderbilt University Full Stack Developer Bootcamp',
    logo: vanderbiltLogo,
    subHeader:
      'Intensive program, specializing in HTML5, CSS3, Javascript, ReactJS, and Node Js',
    // duration: '2023',
  },

  {
    schoolName: 'University of North Carolina at Greensboro',
    logo: uncgLogo,
    subHeader: 'Bachelor of Music, Jazz Studies, Guitar Performance, cum laude',
    // duration: '2009',
  },
];

export const certification = [
  {
    schoolName: 'Google UX Design Professional Certificate',
    logo: googleUI,
    subHeader: 'UX Design',
    // duration: '2023',
    url: 'https://www.credly.com/badges/b2768c24-4a55-4399-b0b9-8c1b73f6bcc4/linked_in_profile',
  },
  {
    schoolName: 'Google Cloud Skill Boost Course',
    logo: googleCloudLogo,
    subHeader: 'Generative AI',
    // duration: '2023',
    url: 'https://www.cloudskillsboost.google/public_profiles/9215599e-7388-43e6-8cf2-346d775e53c6',
  },
  {
    schoolName: 'Coursera',
    logo: coursera,
    subHeader: 'Prompt Engineering for ChatGPT',
    // duration: '2023',
    url: 'https://www.coursera.org/account/accomplishments/verify/9HSHSSNW4GEK',
  },
];

export default function EducationCard({ school }) {
  const imgRef = createRef();

  if (!school.logo) {
    console.error(
      `Image of ${school.name} is missing in the education section`
    );
  }

  const navigateToUrl = () => {
    if (school.url) {
      window.open(school.url, '_blank');
    }
  };

  return (
    <Card style={{ marginBottom: '1em' }}>
      <Card.Body>
        <div className='row'>
          {school.logo && (
            <div className='col-auto d-flex align-items-center'>
              <Image
                className='education-logo'
                ref={imgRef}
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className='col'>
            <Card.Title className='school-name'>{school.schoolName}</Card.Title>
            <div className='education-info'>
              <p className='subheader'>{school.subHeader}</p>
              <p className='duration'>{school.duration}</p>
            </div>
          </div>
        </div>
        <div className='mt-auto d-flex justify-content-center'>
          {school.url && (
            <Button
              className='btn btn-custom  mx-1'
              variant='custom'
              onClick={navigateToUrl}
              target='_blank'
            >
              View Certification
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
