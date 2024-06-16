import React from "react";
import Dasun from "../assets/img/dasun.jpg"
import Charith from "../assets/img/charith.jpg" 
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

export const Clients = () =>{

    return (
        <section className="skill" id="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2 className="mb-5">Testimonials</h2>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                    <MDBRow className="text-center d-flex align-items-stretch">
                                        <MDBCol md="6" className="mb-5 mb-md-0 d-flex align-items-stretch">
                                            <MDBCard className="testimonial-card">
                                                <div className="card-up"></div>
                                                <div className="avatar mx-auto bg-white">
                                                    <img src={Charith} className="rounded-circle img-fluid"/>
                                                </div>
                                                <MDBCardBody className="testimonial-card-body">
                                                <h4>Charith Godage</h4>
                                                <span className="testi-sub-heading">CEO | MARA Solutions</span>
                                                <hr />
                                                <p className="dark-grey-text mt-4 testi-msg">
                                                    <MDBIcon fas icon="quote-left"/>
                                                    <FontAwesomeIcon icon={faQuoteLeft} className="message-quote" />
                                                    I highly recommend Sankalpa for software development projects. During his 
                                                    two years at MARA Solutions, he consistently delivered high-quality 
                                                    projects on time and exceeded client expectations. his technical skills, 
                                                    dedication, and professionalism make them a valuable asset to any team.
                                                </p>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol md="6" className="mb-5 mb-md-0 d-flex align-items-stretch">
                                            <MDBCard className="testimonial-card">
                                                <div className="card-up"></div>
                                                <div className="avatar mx-auto bg-white">
                                                    <img src={Dasun}className="rounded-circle img-fluid"/>
                                                </div>
                                                <MDBCardBody className="testimonial-card-body">
                                                <h4> Dasun Tharanga</h4>
                                                <span className="testi-sub-heading">Laravel Developer</span>
                                                <hr />
                                                <p className="dark-grey-text mt-4 testi-msg">
                                                    <FontAwesomeIcon icon={faQuoteLeft} className="message-quote" />
                                                    Sankalpa has extensive knowledge of the Laravel framework, and 
                                                    we've been working together on a recent open-source application 
                                                    that can deploy Laravel apps with zero downtime. He is also an 
                                                    excellent problem solver, and his communication skills are strong. 
                                                    I highly recommend hiring him for your next project.
                                                </p>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </div>}
                            </TrackVisibility>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}