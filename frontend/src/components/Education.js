import { Container, Row, Col } from "react-bootstrap";
import { PortFolioCard } from "./PortfolioCard";
import college from "../assets/img/college1.png";
import school from "../assets/img/school1.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E)",
      field: "Electronics and Computers Engineering",
      institution: "Thapar institue of Engineering and Technology",
      img: college,
      grade: "9.36",
    },
    {
      degree: "Higher Secondary School Diploma",
      field: "PCM with Economics",
      institution: "SLS DAV Public School, Mausam Vihar",
      img: school,
      grade: "92.8%",
    },
    {
      degree: "Senior Secondary School Diploma",
      field: "General",
      institution: "SLS DAV Public School, Mausam Vihar",
      img: school,
      grade: "93.4%",
    },
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="education-bx">
              <h2>Education</h2>
              <Row >
                {education.map((educ, index) => {
                  return <PortFolioCard key={index} {...educ} />;
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};
