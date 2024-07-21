import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dstny from "../../Assets/Projects/webchatt.png";
import graduation from "../../Assets/Projects/LogoBlackText.png";
import ebook from "../../Assets/Projects/e-book-store-logo-education-and-emblem-vector-18869250.jpg";
import vetemenets from "../../Assets/Projects/photo-2-900x620-1 (1).jpg";
import deployVetment from "../../Assets/Projects/MS.png";
import trippy from "../../Assets/Projects/LogoTrippyy.png";
import money from "../../Assets/Projects/money.png";
import TSR from "../../Assets/Projects/tsr.jpg";
import car from "../../Assets/Projects/carr.png";
import marvel from "../../Assets/Projects/marvel.png";
import color from "../../Assets/Projects/color.jpg";
import Health from "../../Assets/Projects/SH.jpg";
import webService from "../../Assets/Projects/dotnet.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dstny}
              isBlog={false}
              title="Efficient OnBoarding and Troubleshooting ChatBot"
              description="
              Data Integration: Responsible for integrating data across platforms such as Slack, Discord, Microsoft Teams, Atlassian Confluence, and Google Docs.
              Frontend Chatbot Integration: Integrated a frontend chatbot using the company's automation SDK, enhancing integration processes and providing users with valuable assistance.
              Search Functionality: Implemented search capabilities within these platforms to enable efficient querying and information retrieval.
              Backend Development: Developed a backend server using Node.js and Express.js to handle requests from the frontend chatbot.
              "
              ghLink="https://github.com/omar3anan/on-Boarding-Troublshooting-Bot"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graduation}
              isBlog={false}
              title="!Yet Project - Graduation Project"
              description="notYet is a Technical Platform that aspires to help all who seek improvement in problem-solving and develop an ability to think out side the box and think strategically by providing them with an organized environment guided by professionals"
              ghLink="https://github.com/omar3anan/notYet-Platform"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebook}
              isBlog={false}
              title="E-Book Server  with Node.js and
              Express"
              description="Building Backend Server with MVC Architecture using Postman to Test the CRUD Operation APIs and MongoDB to store the data."
              ghLink="https://github.com/omar3anan/IBM-developing-backend-apps-with-nodejs-and-express"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vetemenets}
              isBlog={false}
              title="VETEMENTS E-Commerce website"
              description="Build an E-Commerce website with MERN Stack and Microservices with API Gateway and http calls between the Frontend as React and the Backend as NodeJS"
              ghLink="https://github.com/omar3anan/VETEMENTS-E-Commerce-website-with-MERN-Stack"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deployVetment}
              isBlog={false}
              title="Deployment VETEMENTS as Microservices"
              description="Deployment The MERN stack VETEMENTS-E-Commerce website using Docker-Compose and NGINX as the API Gateway to Connect between the Frontend and the Microservices Backend"
              ghLink="https://github.com/omar3anan/Deployment-VETEMENTS-E-Commerce-website"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Health}
              isBlog={false}
              title="Smart Health System Website"
              description=" online platform that integrates technology and healthcare services to provide users with convenient and personalized healthcare solutions. It offers a wide range of features and functionalities to enhance the user experience, improve accessibility to healthcare resources, and promote overall wellness."
              ghLink="https://github.com/omar3anan/Smart-Health-System"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marvel}
              isBlog={false}
              title="Marvel Mobile Application"
              description="Native Mobile Application with an implmentation of Design (Adobe XD) for Marvel Memes and Comics."
              ghLink="https://github.com/omar3anan/MARVEL"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trippy}
              isBlog={false}
              title="Trippy Website"
              description="
              that culture is what makes a difference between countries, as we see in Egypt the ancient Egyptians and Igbo in Nigeria.
              So we decided to try to cover most of the tourism places around Africa in one Web Application   
              "
              ghLink="https://github.com/omar3anan/TrippyTravel"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={money}
              isBlog={false}
              title="Egyptian Money Detection"
              description="Egyptian money detection refers to the task of automatically recognizing and classifying Egyptian currency notes in images or video streams. It is an important application in areas such as banking, retail, and automated cash handling systems. Here's an overview of how Egyptian money detection can be approached"
              ghLink="https://github.com/omar3anan/Egyptian-Currency-Recognition"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TSR}
              isBlog={false}
              title="Traffic Sign Detection"
              description=" Traffic sign detection is a computer vision task that involves detecting and recognizing traffic signs in images or video streams. It plays a crucial role in autonomous driving systems, advanced driver assistance systems (ADAS), and intelligent transportation systems."
              ghLink="https://github.com/omar3anan/Traffic-Sign-Detection"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car Rental Website"
              description=" Building a frontend for a car rental website involves designing and developing the user interface and user experience components that allow users to browse, search, select, and book cars.              "
              ghLink="https://github.com/omar3anan/Conquer-Car-Rental"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color}
              isBlog={false}
              title="Color Identification in Images"
              description="Color identification in images is a task that involves automatically determining the colors present in an image. It is a fundamental problem in computer vision and has applications in various fields, including image processing, object recognition, and scene understanding. Here's an overview of how color identification in images can be approached"
              ghLink="https://github.com/omar3anan/Color-Identification-in-Images"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webService}
              isBlog={false}
              title="Web Service Application"
              description="Calculate Mathematical Operations in a .NET web application, you can utilize the built-in mathematical functions and operators provided by the .NET framework"
              ghLink="https://github.com/omar3anan/Web-Service-with-Web-Application"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
