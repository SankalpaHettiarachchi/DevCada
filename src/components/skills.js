import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

import Laravel from "../assets/img/Laravel.png"
import React from "../assets/img/React.png"
import Bootstrap from "../assets/img/Bootstrap.png"
import Jquery from "../assets/img/Jquery.png"
import Livewire from "../assets/img/Livewire.png"

import PHP from "../assets/img/PHP.png"
import Python from "../assets/img/Python.png"
import MySQL from "../assets/img/MySQL.png"
import Js from "../assets/img/JavaScript.png"
import Ts from "../assets/img/TypeScript.png"
import Html from "../assets/img/HTML5.png"
import Css from "../assets/img/CSS3.png"
import Arduino from "../assets/img/Arduino.png"
import Xml from "../assets/img/XML.png"

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
    { src: Arduino, alt: "Arduino" },
    { src: Xml, alt: "XML" },
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
                    <div className="skill-bx">
                      <h2 className="mb-5">Skills</h2>
                      <span className="tagline">Frameworks & Libraries</span>
                      <div className='row align-items-center mb-5'>
                          {frameworks.map((image, index) => (
                            <div className="col item">
                              <img key={index} src={image.src} alt={image.alt} />
                            </div>
                          ))}
                      </div>
                      <span className="tagline">Languages</span>
                      <div className='row align-items-center mb-5'>
                          {languages.map((image, index) => (
                            <div className="col item">
                              <img key={index} src={image.src} alt={image.alt} />
                            </div>
                          ))}
                      </div>
                      <span className="tagline">Tools & Services</span>
                        <div className='row align-items-center mb-5'>
                          {tools.map((image, index) => (
                            <div className="col item">
                              <img key={index} src={image.src} alt={image.alt} />
                            </div>
                          ))}
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}