import React, { createRef } from "react";
import { Card, Image } from "react-bootstrap";
import vanderbiltLogo from "./img/vanderbilt.webp"
import googleCloudLogo from "./img/googleAssistantLogo.webp";
import uncgLogo from "./img/uncg.png";
import './EducationCard.css'

export const schoolInfo = [
  {
    schoolName: "Vanderbilt University Full Stack Developer Bootcamp",
    logo: vanderbiltLogo,
    subHeader: "",
    duration: "2023",
  },
  {
    schoolName: "Google Cloud Skill Boost Course on Generative AI",
    logo: googleCloudLogo,
    subHeader: "",
    duration: "2023",
    url: "https://www.cloudskillsboost.google/public_profiles/9215599e-7388-43e6-8cf2-346d775e53c6"
  },
  {
    schoolName: "University of North Carolina at Greensboro",
    logo: uncgLogo,
    subHeader: "Bachelor of Music, Jazz Studies, Guitar Performance, cum laude",
    duration: "2009",
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
  }


  return (
    <Card className="shadow-custom" style={{ marginBottom: "1em" }} onClick={navigateToUrl}>
      <Card.Body>
        {school.logo && (
          <div className="education-card-left">
            <Image
              className="skill-logo"
              ref={imgRef}
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
        )}
        <div className="education-card-right">
          <Card.Title className="school-name">{school.schoolName}</Card.Title>
          <div className="education-info">
            <p className="subheader">{school.subHeader}</p>
            <p className="duration">{school.duration}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
