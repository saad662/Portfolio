
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/header.PNG";
import Button from "react-bootstrap/Button";

export const Banner = () => {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1EFACdQbL4V5z71Xc15fYJzXBdfrTNtNw/view?usp=drive_link";
  };
  const [loopNum, setLoopnum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["MERN STACk DEVELOPER", "BACKEND DEVELOPER", "FRONTEND DESIGNER"];
  const [text, setText] = useState("");
  const period = 1000;
  const [delta, setDelta] = useState(100 - Math.random() * 400);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopnum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> -WELCOME TO MY PORTFOLIO</span>
            <h1>
              {`HI, I'M SAAD AMIN `}
              <span className="wrap">{text}</span>
            </h1>
            <p>Based in Karachi, Pakistan</p>
            <Button variant="outline-light" onClick={handleDownload}>
              Download My Resume <Download />
            </Button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
