import React, { createRef } from "react";
import { Card, Image } from "react-bootstrap";
import vanderbiltLogo from "../../assets/img/vanderbilt.webp"
import googleCloudLogo from "../../assets/img/googleAssistantLogo.webp";
import uncgLogo from "../../assets/img/uncg.png";

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

  return (
    <Card className="shadow-custom" style={{ marginBottom: "1em" }}>
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
          <Card.Title>{school.schoolName}</Card.Title>
          <div className="education-info">
            <p className="subheader">{school.subHeader}</p>
            <p className="duration">{school.duration}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
