import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard, { schoolInfo, certification } from "../../components/EducationCard/EducationCard";
import './Education.css'

function Education() {
  return (
    <Container id="" className="py-4">
      <Row>
        <Col>
          <h2>Education</h2>
          {schoolInfo.map((school, index) => (
            <EducationCard school={school} key={index} />
          ))}
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2>Certifications</h2>
          {certification.map((cert, index) => (
            <EducationCard school={cert} key={index} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
