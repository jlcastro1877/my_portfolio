import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import education from "../assets/education"; // Correct path to education data
import "../assets/styles/project.css"; // Import custom CSS for additional styling if needed

const Education = () => {
  return (
    <Container className="my-5">
      <Row>
        {education.map((item) => (
          <Col md={6} lg={3} className="mb-4" key={item.id}>
            <Card className="border-dark text-light h-100">
              <Card.Img
                variant="top"
                src={item.imgSrc}
                alt={item.title}
                className="card-img-top"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 card-subtitle">
                  {item.degree}
                </Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.Local}</Card.Text>
                <Card.Text>
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
