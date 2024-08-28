import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import projects from "../assets/projects"; // Correct path
import "../assets/styles/project.css"; // Import custom CSS for additional styling if needed

const Projects = () => {
  return (
    <Container className="my-5">
      <Row>
        {projects.map((project) => (
          <Col md={6} lg={3} className="mb-4" key={project.id}>
            <Card className="project-card border-dark text-light">
              <Card.Img
                variant="top"
                src={project.imgSrc}
                alt={project.title}
                className="project-card-img"
              />
              <Card.Body className="project-card-body d-flex flex-column">
                <Card.Title className="project-card-title">
                  {project.title}
                </Card.Title>
                <Card.Text className="project-card-text">
                  {project.description}
                </Card.Text>
                <div className="d-flex justify-content-between mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary project-card-btn"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.webpageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-card-btn"
                  >
                    Visit Website
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
