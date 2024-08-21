import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import experienceData from "../assets/experienceData"; // Import the experience data
import "../assets/styles/experience.css"; // Import custom CSS for additional styling

const Experience = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Professional Experience</h1>
      <Row>
        {experienceData.map((item) => (
          <Col md={6} lg={4} className="mb-4" key={item.id}>
            <Card className="border-dark text-light h-100">
              <Card.Img
                variant="top"
                src={item.imgSrc}
                alt={item.company}
                className="card-img-top"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title
                  className="card-title"
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }} // Inline styles for the title
                >
                  {item.company}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 card-subtitle"
                  style={{ color: "#e9ecef", fontSize: "1.2rem" }} // Inline styles for the subtitle
                >
                  {item.title}
                </Card.Subtitle>
                <Card.Text className="mb-2">
                  <strong>From:</strong> {item.dateFrom} <br />
                  <strong>To:</strong> {item.dateEnd} <br />
                  <strong>Location:</strong> {item.Local}
                </Card.Text>
                <Card.Text
                  className="description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
