import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import AMC from "../assets/img/AMC.png";
import ROST from "../assets/img/ROST.png";
import CT from "../assets/img/CT.png";
import CushyK from "../assets/img/CushyK.png";
import Elite from "../assets/img/Elite.png";
import Smart from "../assets/img/Smart.png";

export const Projects = () => {

  const all_projects = [
    {
      title: "AMC Clinical Guide",
      description: "Web Appication",
      imgUrl: AMC,
      giturl: 'https://github.com/SankalpaHettiarachchi/AMC-ClinicalGuide.git',
      link: 'https://amcclinicalguide.com.au/',
    },
    {
      title: "ROST",
      description: "Web Application (University Academic Project)",
      imgUrl: ROST,
      giturl: 'https://github.com/SankalpaHettiarachchi/AMC-ClinicalGuide.git',
      link: 'https://github.com/SankalpaHettiarachchi/AMC-ClinicalGuide.git',
    },
    {
      title: "CT Tours & Travels",
      description: "Bussiness Profle Website",
      imgUrl: CT,
      giturl: 'https://github.com/SankalpaHettiarachchi/CT-Tours.git',
      link: 'https://cttravelsandtours.com/',
    },
    {
      title: "Cushy K Photography",
      description: "Bussiness Profle Website",
      imgUrl: CushyK,
      giturl: 'https://github.com/SankalpaHettiarachchi/CushyK.git',
      link: 'https://cushyk.com.au/',
    },
    {
      title: "Elite Global",
      description: "Bussiness Profle Website",
      imgUrl: Elite,
      giturl: 'https://github.com/SankalpaHettiarachchi/EliteGlobal.git',
      link: 'https://eliteglobedu.com/',
    },
    {
      title: "Smart Door Lock",
      description: "IOT Application (University Academic Project)",
      imgUrl: Smart,
      giturl: 'https://github.com/SankalpaHettiarachchi/Smart_door_lock.git',
      link: 'https://github.com/SankalpaHettiarachchi/Smart_door_lock.git',
    },
  ];

  const webapps = [
    {
      title: "AMC Clinical Guide",
      description: "Web Appication",
      imgUrl: AMC,
      giturl: 'https://github.com/SankalpaHettiarachchi/AMC-ClinicalGuide.git',
      link: 'https://amcclinicalguide.com.au/',
    },
    {
      title: "ROST",
      description: "Web Application (University Academic Project)",
      imgUrl: ROST,
      giturl: 'https://github.com/SankalpaHettiarachchi/AMC-ClinicalGuide.git',
      link: 'https://github.com/SankalpaHettiarachchi/AMC-ClinicalGuide.git',
    },
  ];

  const websites = [
    {
      title: "CT Tours & Travels",
      description: "Bussiness Profle Website",
      imgUrl: CT,
      giturl: 'https://github.com/SankalpaHettiarachchi/CT-Tours.git',
      link: 'https://cttravelsandtours.com/',
    },
    {
      title: "Cushy K Photography",
      description: "Bussiness Profle Website",
      imgUrl: CushyK,
      giturl: 'https://github.com/SankalpaHettiarachchi/CushyK.git',
      link: 'https://cushyk.com.au/',
    },
    {
      title: "Elite Global",
      description: "Bussiness Profle Website",
      imgUrl: Elite,
      giturl: 'https://github.com/SankalpaHettiarachchi/EliteGlobal.git',
      link: 'https://eliteglobedu.com/',
    },
  ];

  const other = [
    {
      title: "Smart Door Lock",
      description: "IOT Application (University Academic Project)",
      imgUrl: Smart,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container className="">
        <Row>
          <Col size={12}>
          <h2 className="mb-5">Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="all">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="webapps">Web Apps</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="websites">Web Sites</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="other">Other</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="all">
                  <Row>
                    {
                      all_projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="websites">
                  <Row>
                    {
                      websites.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>                    
                </Tab.Pane>
                <Tab.Pane eventKey="webapps">
                  <Row>
                    {
                      webapps.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>                    
                </Tab.Pane>
                <Tab.Pane eventKey="other">
                  <Row>
                    {
                      other.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>                    
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}