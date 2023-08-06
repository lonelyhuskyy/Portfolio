import colorSharp from "../assets/img/color-sharp2.png";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import flask from "../assets/img/flask.png"
import react from "../assets/img/React.png"
import node from "../assets/img/node.png"
import github from "../assets/img/github.png"
import oracledb from "../assets/img/oracledb.png";

import nltk from "../assets/img/nltk.png";
import tf from "../assets/img/tf.png";
import numpy from "../assets/img/numpy.svg";
import pandas from "../assets/img/pandas.png";
import sklearn from "../assets/img/sklearn.jpg";
import xgboost from "../assets/img/xgboost.png";


export const Technologies = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="technology" id="technologies">
      <Container>
        <Row>
          <Col>
            <div className="tech-bx wow zoomIn">
              <h2>Tech Stack</h2>

              <Carousel
                className="owl-carousel owl-theme tech-slider"
                responsive={responsive}
                infinite={true}
              >
                <div className="item">
                  <img src={flask} alt="" />
                  <p className="legend">Flask</p>
                </div>
                <div className="item">
                  <img src={react} alt="" />
                  <p className="legend">React</p>
                </div>
                <div className="item">
                  <img src={node} alt="" />
                  <p className="legend">Node</p>
                </div>
                <div className="item">
                  <img src={oracledb} alt="" />
                  <p className="legend">Oracle DB</p>
                </div>
                <div className="item">
                  <img src={github} alt="" />
                  <p className="legend">GitHub</p>
                </div>
                <div className="item">
                  <img src={nltk} alt="" />
                  <p className="legend">NLTK</p>
                </div>
                <div className="item">
                  <img src={tf} alt="" />
                  <p className="legend">TensorFlow</p>
                </div>
                <div className="item">
                  <img src={sklearn} alt="" />
                  <p className="legend">Scikit-Learn</p>
                </div>
                <div className="item">
                  <img src={numpy} alt="" />
                  <p className="legend">NumPy</p>
                </div>
                <div className="item">
                  <img src={pandas} alt="" />
                  <p className="legend">Pandas</p>
                </div>
                <div className="item">
                  <img src={xgboost} alt="" />
                  <p className="legend">XGBoost</p>
                </div>


              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-right" />
    </section>
  );
};