import { Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "aos/dist/aos.css";

export const Resume = () => {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/12dyShQB7p3e3cWsm1-5ZtpC9WhajSBdG/view?usp=drive_link";
  };
  return (
    <Router>
      <div data-aos="fade-in" data-aos-duration="20000">
        <section className="resume" id="resume">
          <Row>
            <Col className="reume_text">
              <h2>More About me</h2>
              <div className="about_text">
                <h3>Hi, I'm Muhammad Saad Amin</h3>
                <p>
                  I am a dedicated Computer Science student at DHA Suffa University in Karachi, Pakistan, with a passion for crafting innovative digital solutions. As a skilled MERN Stack developer, I've honed my abilities by creating and contributing to various personal projects showcased on my GitHub profile. My expertise encompasses React JS, Node JS, and MongoDB, allowing me to build dynamic and robust web applications. Beyond the realm of web development, I've also undertaken significant university projects utilizing Java and C++, highlighting my versatility and commitment to excellence. With a strong foundation in programming and a drive for continuous learning, I'm excited to contribute my skills to the ever-evolving tech landscape.
                </p>
                <Button variant="outline-light" onClick={handleDownload}>
                  Download My Resume <Download />
                </Button>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </Router>
  );
};
