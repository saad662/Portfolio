import { Container, Row, Col } from "react-bootstrap";
import linkedin from '../assets/img/linkedin.svg';
import git from '../assets/img/git.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-left" >
          <Col size={12} sm={6} id="footerContainer">
            <p>EMAIL : saadamin662@gmail.com </p>
            <p>Designed and Developed by Muhammad Saad Amin</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" id="footerContainer">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/saadamin662/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Icon" /></a>
              <a href="https://github.com/saad662" target="_blank" rel="noreferrer"><img src={git} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}