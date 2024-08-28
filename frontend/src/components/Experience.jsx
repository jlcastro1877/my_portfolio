import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/styles/experience.css"; // Import custom CSS for additional styling

const Experience = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {/* First Card */}
        <Col xs={12} className="mb-4">
          <Card className="experience-card border-dark">
            <Card.Header as="h2" className="experience-card-header text-center">
              Fullstack Developer at Apiary Investment Fund
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                January 2018 – February 2022
              </Card.Subtitle>
              <Card.Text className="experience-card-text">
                <ul>
                  <li>
                    <strong>Maintained and Enhanced Web Pages:</strong>{" "}
                    Regularly updated and maintained the company’s web pages to
                    ensure functionality and performance, fixing bugs and
                    addressing user-reported issues.
                  </li>
                  <li>
                    <strong>Developed New Features:</strong> Designed and
                    implemented new features using React, CSS, and HTML,
                    contributing to an improved user experience and increased
                    user engagement.
                  </li>
                  <li>
                    <strong>Participated in Page Redesign Project:</strong>{" "}
                    Actively involved in a major project to rebuild the
                    company’s web page, collaborating with the team to
                    re-architect the application with modern technologies and
                    best practices.
                  </li>
                  <li>
                    <strong>Implemented User Authentication:</strong> Integrated
                    user authentication and authorization using JWT (JSON Web
                    Tokens) to enhance security and manage user sessions
                    effectively.
                  </li>
                  <li>
                    <strong>Managed Database Operations:</strong> Utilized
                    MongoDB for data management, ensuring efficient data storage
                    and retrieval, and integrating it with the application
                    backend.
                  </li>
                  <li>
                    <strong>Created User Profiles:</strong> Developed user
                    profile functionality, allowing users to create, view, and
                    edit their profiles, enhancing personalization and user
                    satisfaction.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col xs={12} className="mb-4">
          <Card className="experience-card border-dark">
            <Card.Header as="h2" className="experience-card-header text-center">
              QA Engineer at The Church of Jesus Christ of Latter-day Saints
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                February 2022 – Present
              </Card.Subtitle>
              <Card.Text className="experience-card-text">
                As a Quality Assurance Engineer at The Church of Jesus Christ of
                Latter-day Saints, I was responsible for testing user interfaces
                and RESTful APIs to ensure their functionality and performance.
                I collaborated with developers working on React applications to
                troubleshoot and resolve issues. I also created detailed use
                cases and test plans and employed DevOps practices to streamline
                the testing and deployment processes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
