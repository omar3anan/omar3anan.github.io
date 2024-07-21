import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiDocker,
  DiDatabase,
  DiTerminal,
  DiOpensource,
  DiGithub,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiApachetomcat,
  SiAmazonaws,
  SiAmazons3,
  SiAmazonec2,
  SiMicrosoftazure,
  SiApachekafka,
  SiSpringsecurity,
} from "react-icons/si";

function TechstackOverall() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachetomcat />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringsecurity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonec2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTerminal />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <DiOpensource />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
      </Col>
    </Row>
  );
}

export default TechstackOverall;
