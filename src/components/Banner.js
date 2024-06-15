import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
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
              <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                      <span className="tagline">Welcome to my Portfolio</span>
                      <h1><span className="yellow">{`Hi! I'm`}</span> {`Sankalpa Hettiarachchi`}</h1>
                      <h2>{`{ `}<span className="txt-rotate brackets" dataPeriod="1000" data-rotate='[ "Laravel Developer", "Full-Stack Developer", "Back-End Developer" ]'><span className="wrap">{text}</span></span>{` }`}</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      <div className="see-project-btn">
                          <button onClick={() => console.log('connect')}>See My Works <ArrowRightCircle size={25} /></button>
                      </div>
                  </div>}
              </TrackVisibility>
            </Col>
        </Row>
      </Container>
    </section>
  )
}