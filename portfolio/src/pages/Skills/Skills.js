import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import EducationCard, {
  schoolInfo,
} from "../../components/EducationCard/EducationCard";
import htmlLogo from "./img/html.png";
import cssLogo from "./img/css.png";
import jsLogo from "./img/js.png";
import reactLogo from "./img/react.png";
import nodeLogo from "./img/node.png";
import mysqlLogo from "./img/mysql.png";
import mongodbLogo from "./img/mongodb.png";
import "./Skills.css";

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "MongoDB", logo: mongodbLogo },
];
const skillsDescriptions = [
  "⚡ Proficient in designing and developing responsive, user-friendly web interfaces using React.",
  "⚡ Proficient in implementing SPA (Single Page Applications) and PWA (Progressive Web Applications) for optimized user experience.",
  "⚡ Experience in integrating third-party services and APIs for enhanced functionality.",
];

function Skills({ schools }) {
  return (
    <Container id="" className="py-4">
      <Row>
        <Col md={6}>
          <h2>Skills</h2>
          <Row className="skills-container">
            {skills.map((skill, index) => (
              <Col sm={6} md={3} key={index} className="skill-col">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  className="skill-logo"
                  fluid
                />
                <p className="skill-name">{skill.name}</p>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={6}>
          <ul className="skill-descriptions">
            {skillsDescriptions.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Education</h2>
          {schoolInfo.map((school, index) => (
            <EducationCard school={school} key={index} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
