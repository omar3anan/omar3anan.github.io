import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import TechstackOverall from "./TechstackOverall";
import Toolstack from "./ToolStack";
import { ImPointRight } from "react-icons/im";
import Github from "./Github";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">ami</strong>
            </h1>
            <p className="home-about-body">
              I Graduated From
              <br />
              <i>
                <b className="purple">
                  {" "}
                  Alexandria University - Faculty of Science (2019~2023){" "}
                </b>
              </i>
              <br />
              Software Industry and Multimedia Department
              <br />
              <i>
                <b className="purple">GPA : 3.5968 ~ 3.6 / 4 (Distinct)</b>
                {/* <b className="purple">Grade : Distinct </b> */}
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple">
                  continuously exploring new technologies and pushing the
                  boundaries of what can be achieved through innovative software
                  solutions{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">
                  Deployment and Hosting of Web Applications.
                </b>
              </i>
              <br />
              <br />
              Through various software projects and their successful deployment
              &nbsp;
              <i>
                <b className="purple">
                  I have honed my skills in leading teams, managing deadlines,
                  and fostering collaboration{" "}
                </b>{" "}
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with &nbsp; &nbsp;
              <b className="purple">Node.js</b> &nbsp; and
              <i>
                <b className="purple"> Java Spring Boot</b>
              </i>
              &nbsp; and &nbsp;
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Problem Solving
                </li>
                <li className="about-activity">
                  <ImPointRight /> Designing and Developing Web Applications
                </li>
                <li className="about-activity">
                  <ImPointRight /> Integrating Third Party Services
                </li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
            <TechstackOverall />
            <h1 className="project-heading">
              Tools <strong className="purple">I Use </strong>
            </h1>
            <Toolstack />
            <Github />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
