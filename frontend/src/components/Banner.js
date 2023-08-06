import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = useMemo(
    () => ["Data Scientist", "Machine Learning Engineer", "Web Developer"],
    []
  );
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;
  const [buttonText, setButtonText] = useState("Download CV");

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoop(loopNum + 1);
      setDelta(500);
    }
  }, [text, isDeleting, loopNum, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my PortFolio</span>
            <h1>{`Hi I'm Raghav Khanna`}</h1>
            <span className="wrap">{text}</span>
            <p>
              Currently exploring fields of Machine Learning and Data Science.
              Possessing good Interpersonal Communication and Problem solving
              skills. Pursuing Bachelor of Engineering in Electronics and
              Computer Science from Thapar Institute of Engineering and
              Technology.
            </p>
            <Row>
              <Col md={4}>
                <a href="#contact">
                  <button id="connect-btn" onClick={() => console.log("connect")}>
                    <span>Let's Connect</span>
                    <ArrowRightCircle size={25} />
                  </button>
                </a>
              </Col>
              <Col md={4}>
                <button className="download" type="submit">
                  <span>{buttonText}</span>
                </button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
