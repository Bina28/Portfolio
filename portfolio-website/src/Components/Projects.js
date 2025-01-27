import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../Assets/img/color-sharp2.png";
import { Tab, Nav } from 'react-bootstrap';
import projImg1 from "../Assets/img/project-img1.png";
import projImg2 from "../Assets/img/project-img2.png";
import projImg3 from "../Assets/img/project-img3.png";

export const Projects = () => {

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
      return (
        <section className="project" id="projects">
<Container>
    <Row>
        <Col>
        <h2>Projects</h2>
        <p>Pam param</p>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="first">Tab One</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab Two</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">Tab Three</Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey="first">
            <Row>
                {
                    projects.map((projects, index) => {
                         return(
                            <ProjectCard 
                            key={index}
                            {...projects}
                            />
                         )
                    })
                }
            </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second">Pam param</Tab.Pane>
        <Tab.Pane eventKey="third">Param pam</Tab.Pane>
    </Tab.Content>
    </Tab.Container>
        </Col>
    </Row>
</Container>
<img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
}