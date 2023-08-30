import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import pro1 from "../assets/img/Inventory.PNG";
import pro2 from "../assets/img/Chef-App.PNG";
import pro5 from "../assets/img/Chatapp.png"
import pro6 from '../assets/img/Contacts.PNG'
import "react-multi-carousel/lib/styles.css";

export const Projects = () => {
  const projects = [
    {
      title: "Inventory-Man-Backend",
      description: "MERN Project",
      img: pro1,
      projectUrl: "https://github.com/saad662/Inventory-Man-Back-end",
    },
    {
      title: "NODEJS-REACTJS-CHATAPP-Frontend",
      description: "using chatengine.io",
      img: pro5,
      projectUrl: "https://github.com/saad662/NODEJS-REACTJS-CHATAPP-frontend",
    },
    {
      title: "myContacts-Backend",
      description: "Pure Node.JS Project",
      img: pro6,
      projectUrl: "https://github.com/saad662/myContacts-backend",
    },
  ];
  const projectsdesigns = [
    {
      title: "Chef Recipe App Design",
      description: "USING FIGMA",
      img: pro2,
      projectUrl: "https://www.figma.com/file/aX12gwTTRdjXW8yD8hC2ZR/Chef_Recipe_app?type=design&node-id=0%3A1&mode=design&t=oH12kvKN2eBKlxcn-1",
    },
  ];

  return (
    <div data-aos="fade-in" data-aos-duration="20000">
      <section className="project" id="project">
        <Row>
          <Col>
            <h2>PROJECTS</h2>
            <p>Check out some of my recent projects:</p>
            <Tabs defaultActiveKey="development" id="uncontrolled-tab-example">
              <Tab eventKey="development" title="Development">
                <Row>
                  {projects.map((project, index) => (
                    <Col md={6} lg={4} key={index}>
                      <Card className="project-card">
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Card.Img
                            variant="top"
                            src={project.img}
                            className="project-card-image"
                          />
                          <Card.ImgOverlay className="project-card-overlay">
                            <div className="project-card-title">
                              {project.title}
                              <br />
                              {project.description}
                            </div>
                          </Card.ImgOverlay>
                        </a>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="design" title="Design">
                <Row>
                  {projectsdesigns.map((project, index) => (
                    <Col md={6} lg={4} key={index}>
                      <Card className="project-card">
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Card.Img
                            variant="top"
                            src={project.img}
                            className="project-card-image"
                          />
                          <Card.ImgOverlay className="project-card-overlay">
                            <div className="project-card-title">
                              {project.title}
                              <br />
                              {project.description}
                            </div>
                          </Card.ImgOverlay>
                        </a>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <br />
      </section>
    </div>
  );
};