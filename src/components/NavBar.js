import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import linkedin from "../assets/img/linkedin.svg";
import git from "../assets/img/git.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" activeKey={activeLink}>
              <Nav.Link href="#home" onClick={() => onUpdateActiveLink("home")}>
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#resume"
                onClick={() => onUpdateActiveLink("resume")}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                href="#project"
                onClick={() => onUpdateActiveLink("project")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/saadamin662/" target="_blank"  rel="noreferrer">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/saad662" target="_blank"  rel="noreferrer">
                  <img src={git} alt="GitHub" />
                </a>
              </div>
              <HashLink to="#form">
                <Button variant="outline-light" size="lg">
                  Let's connect
                </Button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

