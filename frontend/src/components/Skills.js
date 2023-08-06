import React from "react";
import colorSharp from "../assets/img/color-sharp.png";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cpp from "../assets/img/c++.svg";
import csharp from "../assets/img/csharp.svg";
import python from "../assets/img/python.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import script from "../assets/img/javascript.svg";
import sql from "../assets/img/sql.png";

export const Skills = () => {
  const languages = [
    { name: "C++", img: cpp, progressValue: 90 }, // Customize the progress value for each language
    { name: "Python", img: python, progressValue: 90 },
    { name: "HTML", img: html, progressValue: 95 },
    { name: "CSS", img: css, progressValue: 90 },
    { name: "JavaScript", img: script, progressValue: 85 },
    { name: "SQL", img: sql, progressValue: 90 },
    { name: "C#", img: csharp, progressValue: 80 },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Programming Languages</h2>
              <Carousel
                className="owl-carousel owl-theme skill-slider"
                responsive={responsive}
                infinite={true}
              >
                {languages.map((language, index) => (
                    <div key={index} className="item">
                      <img src={language.img} alt={language.name} />
                      <p className="legend">{language.name}</p>
                    </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};
