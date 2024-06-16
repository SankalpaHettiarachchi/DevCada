import { Container, Row, Col } from "react-bootstrap";
import gitIcon from '../assets/img/git.svg';
import linkedinIcon from '../assets/img/linkedIn.svg';
import fbIcon from '../assets/img/facebook.svg';
import devcada_logo from '../assets/img/Devcada_Logo.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="footer-logo text-center">
            <img src={devcada_logo} alt="Logo" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="text-center">
            <div className="social-icon">
              <a href="#"><img src={gitIcon} alt="Icon" /></a>
              <a href="#"><img src={linkedinIcon} alt="Icon" /></a>
              <a href="#"><img src={fbIcon} alt="Icon" /></a>
            </div>
            <p>DevCada Copyright® 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}