import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TechnicalCards from "./TechnicalCards";
import Particle from "../Particle";

import Dstny from "../../Assets/Technical/DE.jpeg";
import iti from "../../Assets/Technical/iti.png";
import Siemens from "../../Assets/Technical/siem.png";
import AYS from "../../Assets/Technical/ays.png";
import fossasia from "../../Assets/Technical/fos.png";
import alx from "../../Assets/Technical/alx.jpg";

function Technical() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Technical Experience </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <TechnicalCards
              imgPath={Dstny}
              isBlog={false}
              title="Software Engineer"
              description="
              Responsible for integrating data across platforms such as Slack, Discord, Microsoft Teams, Atlassian Confluence, and Google Docs.
              Frontend Chatbot Integration: Integrated a frontend chatbot using the company's automation SDK, enhancing integration processes 
              
              Backend Development: Developed a backend server using Node.js and Express.js to handle requests from the frontend chatbot.  
              "
            />
          </Col>
          <Col md={4} className="project-card">
            <TechnicalCards
              imgPath={alx}
              isBlog={false}
              title="Software Engineer"
              description="Real world application and experience-based learning and Problem-solve using coding and other forms of technology. "
            />
          </Col>
          <Col md={4} className="project-card">
            <TechnicalCards
              imgPath={Siemens}
              isBlog={false}
              title="Embedded Software with DevOps Guide"
              description=" ISO 26262 · RCC · Continuous Integration and Continuous Delivery
              (CI/CD) · Controller Area Network (CAN) · Bootloader ·
              Microcontrollers · Real-Time Operating Systems (RTOS) · OSEK ·
              AUTOSAR · C"
            />
          </Col>

          <Col md={4} className="project-card">
            <TechnicalCards
              imgPath={iti}
              isBlog={false}
              title="
              Linux System Administration"
              description=" Red Hat Linux · Linux System Administration · Shell Scripting"
            />
          </Col>

          <Col md={4} className="project-card">
            <TechnicalCards
              imgPath={AYS}
              isBlog={false}
              title="Information Technology"
              description="Virtual Private Network (VPN) · Database Administration · Hardware Diagnostics · Computer Hardware Troubleshooting"
            />
          </Col>

          <Col md={4} className="project-card">
            <TechnicalCards
              imgPath={fossasia}
              isBlog={false}
              title="Software Developer"
              description="Cooperation with partners and companies we involve developers through coding programs"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Technical;
