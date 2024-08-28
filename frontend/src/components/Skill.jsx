import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import skillsData from "../assets/skills"; // Import the correct skills data
import "../assets/styles/skill.css"; // Import custom CSS for additional styling

const Skills = () => {
  return (
    <Container className="my-5">
      <Row>
        {skillsData.map((skill) => (
          <Col md={6} lg={3} className="mb-4" key={skill.id}>
            <Card className="skill-card border-dark">
              <Card.Img
                variant="top"
                src={skill.imgSrc}
                alt={skill.title}
                className="skill-card-img"
              />
              {/* Optionally include Card.Body and other details if needed */}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
