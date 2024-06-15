import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import 'animate.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Laravel from "../assets/img/Laravel.png"
import React from "../assets/img/React.png"
import Bootstrap from "../assets/img/Bootstrap.png"
import Jquery from "../assets/img/jQuery.png"
import Livewire from "../assets/img/Livewire.png"

import PHP from "../assets/img/PHP.png"
import Python from "../assets/img/Python.png"
import MySQL from "../assets/img/MySQL.png"
import Js from "../assets/img/JavaScript.png"
import Ts from "../assets/img/TypeScript.png"
import Html from "../assets/img/HTML5.png"
import Css from "../assets/img/CSS3.png"
import Xml from "../assets/img/XML.png"
import Arduino from "../assets/img/Arduino.png"

import VS from "../assets/img/VS.png"
import Postman from "../assets/img/Postman.png"
import Git from "../assets/img/Git.png"
import Composer from "../assets/img/Composer.png"
import NPM from "../assets/img/NPM.png"
import Docker from "../assets/img/Docker.png"
import Gcloud from "../assets/img/Gcloud.png"
import Apache from "../assets/img/Apache.png"


export const Skills = () => {

  const frameworks = [
    { src: Laravel, alt: "Laravel" },
    { src: React, alt: "React" },
    { src: Bootstrap, alt: "Bootstrap" },
    { src: Jquery, alt: "jQuery" },
    { src: Livewire, alt: "Livewire" },
  ]
  const languages = [
    { src: PHP, alt: "PHP" },
    { src: Python, alt: "Python" },
    { src: MySQL, alt: "MySQL" },
    { src: Js, alt: "JavaScript" },
    { src: Ts, alt: "TypeScript" },
    { src: Html, alt: "HTML5" },
    { src: Css, alt: "CSS3" },
    { src: Xml, alt: "XML" },
    { src: Arduino, alt: "Arduino" },
  ];

  const tools = [
    { src: VS, alt: "Visual Studio" },
    { src: Postman, alt: "Postman" },
    { src: Git, alt: "Git" },
    { src: Composer, alt: "Composer" },
    { src: NPM, alt: "NPM" },
    { src: Docker, alt: "Docker" },
    { src: Gcloud, alt: "Google Cloud" },
    { src: Apache, alt: "Apache" },
  ];

  const responsiveFrameworks = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: frameworks.length
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: frameworks.length
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsiveLanguages = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: languages.length
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: languages.length
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsiveTools = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: tools.length
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: tools.length
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className="mb-5">Skills</h2>
                        <span className="tagline mb-4">Frameworks & Libraries</span>
                        <Carousel responsive={responsiveFrameworks} infinite={false} className="owl-carousel owl-theme skill-slider">
                            {frameworks.map((image, index) => (
                              <div className="item" key={index}>
                                <img src={image.src} alt={image.alt} />
                                <br/>
                                <br/>
                                <span>{image.alt}</span>
                              </div>
                            ))}
                        </Carousel>
                        <br/>
                        <br/>
                        <span className="tagline mb-4">Languages</span>
                        <Carousel responsive={responsiveLanguages} arrows={false} infinite={false} className="owl-carousel owl-theme skill-slider">
                            {languages.map((image, index) => (
                              <div className="item" key={index}>
                                <img src={image.src} alt={image.alt} />
                                <br/>
                                <br/>
                                <span>{image.alt}</span>
                              </div>
                            ))}
                        </Carousel>
                        <br/>
                        <br/>
                        <span className="tagline mb-4">Tools & Services</span>
                        <Carousel responsive={responsiveTools} arrows={false} infinite={false} className="owl-carousel owl-theme skill-slider">
                            {tools.map((image, index) => (
                              <div className="item" key={index}>
                                <img src={image.src} alt={image.alt} />
                                <br/>
                                <br/>
                                <span>{image.alt}</span>
                              </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}