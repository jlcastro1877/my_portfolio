import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import education from "../assets/education"; // Correct path to education data
import "../assets/styles/Education.css"; // Import custom CSS for additional styling if needed

const Education = () => {
  return (
    <Container className="my-5">
      <Row>
        {education.map((item) => (
          <Col md={6} lg={3} className="mb-4" key={item.id}>
            <Card className="education-card border-dark h-100">
              <Card.Img
                variant="top"
                src={item.imgSrc}
                alt={item.title}
                className="education-card-img"
              />
              <Card.Body className="education-card-body d-flex flex-column">
                <Card.Title className="education-card-title">
                  {item.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 education-card-subtitle">
                  {item.degree}
                </Card.Subtitle>
                <Card.Text className="education-card-text">
                  {item.description}
                </Card.Text>
                <Card.Text className="education-card-text">
                  {item.Local}
                </Card.Text>
                <Card.Text className="education-card-text">
                  <strong>Start Date:</strong> {item.dateFrom}
                  <br />
                  <strong>End Date:</strong> {item.dateEnd}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;
