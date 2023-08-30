import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Node from "../assets/img/node.jpg";
import Mongo from "../assets/img/mongodb.png";
import html5 from "../assets/img/html5.svg";
import css from "../assets/img/css.svg";
import react from "../assets/img/react.svg";
import java from "../assets/img/java.svg";
import c from "../assets/img/Cplus.png";
import figma from "../assets/img/figma.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div data-aos="fade-in" data-aos-duration="2000">
      <section className="skill" id="skills">
        <Container className="skill-container">
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>Discover the Range of my Skills:</p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={Node} alt="Node skill" />
                    <h5>Node.JS</h5>
                  </div>
                  <div className="item">
                    <img src={react} alt="ReactJS skill" />
                    <h5>React.JS</h5>
                  </div>
                  
                  <div className="item">
                    <img src={Mongo} alt="MongoDB skill" />
                    <h5>MongoDB</h5>
                  </div>
                  <div className="item">
                    <img src={html5} alt="HTML skill" />
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    <img src={css} alt="CSS skill" />
                    <h5>CSS</h5>
                  </div>

                  <div className="item">
                    <img src={java} alt="Java skill" />
                    <h5>Java</h5>
                  </div>
                  <div className="item">
                    <img src={c} alt="C++ programming skill" />
                    <h5>C++</h5>
                  </div>
                  <div className="item">
                    <img src={figma} alt="Figma skill" />
                    <h5>Figma</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
