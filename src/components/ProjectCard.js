import { Row,Col } from "react-bootstrap";
import Github from "../assets/img/Project-github.svg";
import Link from "../assets/img/Project-link.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ProjectCard = ({ title, description, imgUrl, giturl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <TrackVisibility>
        {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__pulse" : ""}>
          <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
              <Col><a href={giturl}><img className="project-link" src={Github} alt="" /></a></Col>
              <Col><a href={link}><img className="project-link" src={Link} alt="" /></a></Col>
            </div>
          </div>
        </div>}
      </TrackVisibility>
    </Col>
  )
}