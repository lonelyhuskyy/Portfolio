import { Container, Row, Col } from "react-bootstrap";
// import { useState } from "react";
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/github-mark-white.svg';
import navicon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {   

    // const [buttonText, setButtonText] = useState("Download CV");


  return (
    <section className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={4} className="colFooter">
            <a href="#home" className="footer-brand"><span>Raghav Khanna</span></a>
            {/* <Row>
                <button className="download" type="submit">
                    <span>{buttonText}</span>
                </button>
            </Row> */}
          </Col>
          <Col sm={4} className="colFooter">
            <Row>
                <h3>Important Links</h3>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                </ul>
            </Row>
          </Col>
          <Col sm={4} className="colFooter text-center">
            <h3>Connect on Social</h3>
            <div className=" align-items-center social-icon-footer" >
              <a href="https://www.linkedin.com/in/raghav-khanna-446895199/">
                <img src={navicon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/lonelyhuskyy">
                <img src={navicon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/raghhavkhannaa/">
                <img src={navicon3} alt="Instagram" />
              </a>
            </div>
            <p>CopyRight 2023, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
