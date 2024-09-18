import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertficateCard from "./CertficateCard";
import Particle from "../Particle";

import Dstny from "../../Assets/Certificates/Dstny Engage.png";
import IBM from "../../Assets/Certificates/IBM.png";
import AYS from "../../Assets/Certificates/ALEXANDRIA SHIPYARD (AYS)-page-00001.jpg";
import AWS1 from "../../Assets/Certificates/AWS Cloud Practitioner Essentials  Cloud Essentials-page-00001.jpg";
import AWS2 from "../../Assets/Certificates/AWS Technical Essentials  Cloud Essentials-page-00001.jpg";
import AWS3 from "../../Assets/Certificates/Exam Readiness AWS Certified DevOps Engineer – Professional  DevOps-page-00001.jpg";
import iti from "../../Assets/Certificates/Linux System Administration (ITI)-page-00001.jpg";
import Siemens from "../../Assets/Certificates/Siemens-page-00001.jpg";
import spring from "../../Assets/Certificates/AmigosCodeSpring.png";
import gmind from "../../Assets/Certificates/gmin.png";
import G from "../../Assets/Certificates/Huawei- (HCIA-5G)-1.png";
import GMobile from "../../Assets/Certificates/Huawei - (5G-Mobile Communication)-1.png";
import game from "../../Assets/Certificates/Summer Training-Into the Game Design Verse-page-00001.jpg";
import pyt from "../../Assets/Certificates/Huawei - Python-1.png";
import kaggle from "../../Assets/Certificates/Kaggle- intro to Machine Learning-1.png";
import postqres from "../../Assets/Certificates/SQL.png";
import jwt from "../../Assets/Certificates/jwt.png";
import secuirty from "../../Assets/Certificates/Spring Secuirty.png";
import JP from "../../Assets/Certificates/JP.png";
import Google from "../../Assets/Certificates/google.png";

function Certficates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certficates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certficates I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={JP}
              isBlog={false}
              title="Software Enigneering Lite Job Simulation"
              description="Completed a simulation focused on the process of completing an engineering ticket for a system in the credit-card rewards department of JPMorgan Chase & Co."
              ghLink="https://drive.google.com/file/d/1CF7D2gHTm5wIuO6Z7NC6RY0qGGOD1maQ/view?usp=sharing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>{" "}<Col md={4} className="project-card">
            <CertficateCard
              imgPath={Google}
              isBlog={false}
              title=" Google Cloud Training Online"
              description="Building Scalable Java Microservices with Spring Boot and Spring CloudBuilding Scalable Java Microservices with Spring Boot and Spring Cloud"
              ghLink="https://drive.google.com/file/d/1e4vpx4yFZGeHNTp9ynSL940bLwHM1dxV/view?usp=sharing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>{" "}<Col md={4} className="project-card">
            <CertficateCard
              imgPath={secuirty}
              isBlog={false}
              title=" Spring Security"
              description=" Spring Boot · Spring Security · Spring MVC · Spring Data JPA User Management System · User Permissions System  · User Management System · User Roles System · User Permissions System · User Access Control System · User Privileges System · User CRUD System · User Registration System · User Login System · User Logout System · User Authentic "
              ghLink="https://drive.google.com/file/d/1SEve80hxfQ2vSlj5gUJukF_oBRn7ncZc/view?usp=sharing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={jwt}
              isBlog={false}
              title="Securing Your Spring Boot 3.0 Applications with JSON Web Tokens (JWT)"
              description="JWT · Spring Boot · Spring Security · User Authorization System · User Registration System · User Login System · User Logout System  "
              ghLink="https://drive.google.com/file/d/1nm1HVcsFfcbU_n_0mYFHKwyxTUTwh8n0/view?usp=sharing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>{" "}

          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={postqres}
              isBlog={false}
              title="Relational Database and SQL Essentials"
              description="
              PostgreSQL · SQL · Database Design · Database Normalization ·  
             Database Development · Database
              "
              ghLink="https://drive.google.com/file/d/1s7USxfDut-aM5fV-10rZs58Ca3YdX_Wb/view?usp=sharing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={spring}
              isBlog={false}
              title="Spring Boot For Beginners"
              description="
              Spring Boot · Spring Data JPA · Spring MVC · Spring Security ·
                Spring REST · Spring Cloud · Spring Data REST · Spring Boot
              "
              ghLink="https://drive.google.com/file/d/1G49GbhGFWHg-c7hbjA-PUbxqukunmGM6/view?usp=sharing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={Dstny}
              isBlog={false}
              title="Software Engineer"
              description="
              Integration · Microsoft Azure · NodeJS · ExpressJS ·
                AutomationSDK · ChatBot Flow
              "
              ghLink="https://drive.google.com/file/d/1WhTiFEARahOuyfVaCJ9v2OnCm2RJqZEB/view?usp=sharing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={IBM}
              isBlog={false}
              title="IBM-Developing Back-End Apps  with Node.js and
              Express"
              description="Building Backend Server with MVC Architecture using Postman to Test the CRUD Operation APIs and MongoDB to store the data."
              ghLink="https://drive.google.com/file/d/1BOIwYUT3YWfMzpT0HMjBuTk3DKYf6WTO/view?usp=sharing"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={Siemens}
              isBlog={false}
              title="Siemens 
              - Embedded Software with DevOps Guide"
              description=" ISO 26262 · RCC · Continuous Integration and Continuous Delivery
              (CI/CD) · Controller Area Network (CAN) · Bootloader ·
              Microcontrollers · Real-Time Operating Systems (RTOS) · OSEK ·
              AUTOSAR · C"
              ghLink="https://drive.google.com/file/d/1eUcqm0wyAuSJ1exK50ovNx4pkMz78FrI/view?usp=sharing"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={iti}
              isBlog={false}
              title="Information Technology Institue (ITI) - 
              Linux System Administration"
              description=" Red Hat Linux · Linux System Administration · Shell Scripting"
              ghLink="https://drive.google.com/file/d/1ZmqAedjIHpY3DvHr8eSj8xOVt6jChLX9/view?usp=sharing"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={AYS}
              isBlog={false}
              title="ALEXANDRIA SHIPYARD - Information Technology"
              description="Virtual Private Network (VPN) · Database Administration · Hardware Diagnostics · Computer Hardware Troubleshooting"
              ghLink="https://drive.google.com/file/d/1hYmCVrfb6HLYD3fqxT_tKIbWr7ofYrKJ/view?usp=sharing"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={AWS1}
              isBlog={false}
              title="AWS "
              description="  
              Cloud Practitioner Essentials"
              ghLink="https://drive.google.com/file/d/12okfkhgn5XatTHi2VuTAtj0MYrzSVGJb/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={AWS2}
              isBlog={false}
              title="AWS "
              description="  Technical Essentials
              "
              ghLink="https://drive.google.com/file/d/1LUI93QkvwoN2sKOKVt5l1T2M2M6oMnHP/view?usp=sharing"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={AWS3}
              isBlog={false}
              title="AWS "
              description="Certified DevOps Engineer"
              ghLink="https://drive.google.com/file/d/1QJ1OjHdPSY3AvuJbab7vMnHo-XpG1AgR/view?usp=sharing"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={game}
              isBlog={false}
              title="SRTA "
              description="  Into Game Design Verse
                "
              ghLink="https://drive.google.com/file/d/1MmkltiWRBUcvy6fiiLkXTgLlRaOVzunN/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={gmind}
              isBlog={false}
              title="GMind "
              description="   Game Development
              "
              ghLink="https://drive.google.com/file/d/1ftK6PaJi4Bs-08OTmzSnaN3YZTPCg6KP/view?usp=sharing"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={G}
              isBlog={false}
              title="Huawei "
              description=" HCIA-5G"
              ghLink="https://drive.google.com/file/d/1dSBrjRN_kUQXdI-QLJ4VjluYlzcl5jyv/view?usp=sharing"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={GMobile}
              isBlog={false}
              title="Huawei  "
              description=" 5G Mobile Communication 
              "
              ghLink="https://drive.google.com/file/d/1-bxWjjUr6ptAWiBJQyY645-hAUNzRN9v/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={pyt}
              isBlog={false}
              title="Huawei "
              description="  Python
              "
              ghLink="https://drive.google.com/file/d/1HEBGZyvorPiQS5nPaCUt84XdQ0HdYoGR/view?usp=sharing"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <CertficateCard
              imgPath={kaggle}
              isBlog={false}
              title="Kaggle "
              description=" Intro to Machine Learning"
              ghLink="https://drive.google.com/file/d/1EHIdI5KLwPP_op72GIrwwPgNuw5iZjbg/view?usp=sharing"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>{" "}
        </Row>
      </Container>
    </Container>
  );
}

export default Certficates;
