import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/styles/experience.css"; // Import custom CSS for additional styling

const Experience = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {/* Card for Apiary Investment Fund */}
        <Col md={6} lg={4} className="mb-4">
          <Card className="experience-card border-dark">
            <Card.Header as="h2" className="experience-card-header text-center">
              The Church of Jesus Christ of Latter-Day-Saints
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                Software QA Enginner
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                February 2022 – Present
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card className="experience-card border-dark">
            <Card.Header as="h2" className="experience-card-header text-center">
              Apiary Investment Fund
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                Software Enginner
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                Jan 2018 – Feb - 2022
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="experience-card border-dark">
            <Card.Header as="h2" className="experience-card-header text-center">
              Serveng Civilsan
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                Functional Business Analyst
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                Mar 2014 – Feb - 2016
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="experience-card border-dark">
            <Card.Header as="h2" className="experience-card-header text-center">
              Totvs Ibirapuera
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                Software Implementation Specialist
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                Sep 2013 – Mar - 2014
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="experience-card border-dark">
            <Card.Header as="h2" className="experience-card-header text-center">
              Conexao Sistemas de Protese
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                Software Engineer
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                Nov 2006 – Sep - 2013
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="experience-card border-dark">
            <Card.Header as="h2" className="experience-card-header text-center">
              TOTVS
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                Software Developer
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 experience-card-subtitle text-center">
                Aug 2004 – Nov - 2006
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
