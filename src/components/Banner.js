import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, TypeUnderline } from 'react-bootstrap-icons';
import Profile from "../assets/img/profile.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Laravel Developer", "Full Stack Developer", "Back End Developer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container className="text-center">
        <Row className="aligh-items-center">
            <Col>
            <img className="profile-image" src={Profile} alt="Profile Image" />
              <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                      <span className="tagline">Welcome to my Portfolio</span>
                      <h1 className="my-name"><span className="yellow">{`Hi! I'm`}</span> {`Sankalpa`} {`Hettiarchchi`}</h1>
                      <h2>{`{ `}<span className="txt-rotate brackets" dataPeriod="1000" data-rotate='[ "Laravel Developer", "Full-Stack Developer", "Back-End Developer" ]'><span className="wrap">{text}</span></span>{` }`}</h2>
                      <p>I am an undergraduate pursuing a Bachelor of Information and Communication Technology (Hons) at Rajarata University, Sri Lanka. With two years of experience in web application development and a solid foundation in software engineering, I am dedicated to delivering high-quality solutions that prioritize customer satisfaction.</p>
                      <div className="see-project-btn">
                      <a className="no-underline" href="https://docs.google.com/document/d/1_CMB6kR2BBvdpkN59NM4qV6wsLg3ltT2/edit?usp=drive_link&ouid=104559434813021285975&rtpof=true&sd=true"><button>My Resume<ArrowRightCircle size={25} /></button></a>
                      </div>
                  </div>}
              </TrackVisibility>
            </Col>
        </Row>
      </Container>
    </section>
  )
}