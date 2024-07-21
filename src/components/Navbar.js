import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsList } from "react-icons/bs";

function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [navVisible, setNavVisible] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const updateWindowSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const scrollHandler = () => {
    updateNavbar(window.scrollY >= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const toggleNavbar = () => {
    setNavVisible(!navVisible);
  };

  return (
    <Navbar
      expanded={navVisible}
      fixed="top"
      expand="md"
      className={`navbar ${navColour ? "sticky" : ""} ${
        isMobile ? "mobile-navbar" : ""
      }`}
    >
      <Container>
        {isMobile && (
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleNavbar}
            className="custom-navbar-toggle"
          >
            <BsList
              style={{
                fontSize: "2em", // Adjust the font size to make it bigger
                fontWeight: "bold",
                color: "white",
                backgroundColor: "#4B0082", // Dark purple color
                borderRadius: "5px", // Add rounded corners
              }}
            />
          </Navbar.Toggle>
        )}

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className={isMobile ? "mobile-nav" : "ms-auto"}
            defaultActiveKey="#home"
          >
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setNavVisible(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/technical-experience"
                onClick={() => setNavVisible(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Technical
                Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setNavVisible(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certficates"
                onClick={() => setNavVisible(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Certficates
              </Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setNavVisible(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/omar3anan"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
