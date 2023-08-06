import {
  Container,
  Row,
  Col,
  TabContainer,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/thumbnail.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/thumbnail2.png";
import colorSharp from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Cine Alchemy",
      description: "Movie Recommender System",
      imgUrl: projImg1,
      Url: "https://cine-alchemy.onrender.com"
    },
    {
      title: "Boston House price Predictor",
      description: "Machine Learning and Deployment",
      imgUrl: projImg2,
      Url: "",
    },
    {
      title: "Open Weather App",
      description: "Web Development",
      imgUrl: projImg3,
      Url: "https://weather-app-mpci.onrender.com",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <h2>Projects</h2>
              <p>
                My projects specializes in various fields like Machine Learning
                and Web Development.
              </p>
              <TabContainer id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                  <NavItem>
                    <NavLink eventKey="first">Tab One</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey="second">Tab Second</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey="third">Tab Third</NavLink>
                  </NavItem>
                </Nav>
                <TabContent>
                  <TabPane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </TabPane>
                  <TabPane eventKey="second">Lorem Ipsum</TabPane>
                  <TabPane eventKey="third">Lorem Ipsum</TabPane>
                </TabContent>
              </TabContainer>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-right" />
    </section>
  );
};
