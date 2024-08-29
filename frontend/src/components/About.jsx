import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/styles/About.css"; // Ensure the path to your CSS file is correct

const About = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="about-card text-light-about">
            <Card.Header as="h1" className="about-card-header text-center">
              About Me
            </Card.Header>
            <Card.Body>
              <Card.Text className="about-card-text">
                Hello, I'm <strong>Jorge Castro</strong>, a seasoned{" "}
                <strong>Software Developer</strong> with a deep-seated passion
                for crafting innovative solutions and advancing technology. My
                journey in software development began in 2002 with{" "}
                <strong>Visual Basic 6</strong>, a foundational experience that
                set the stage for my career in technology. As my career evolved,
                I transitioned to <strong>C#</strong>, which enabled me to
                tackle complex projects and broaden my expertise. Today, I
                specialize in Fullstack Web Development, excelling in both
                frontend and backend technologies to deliver comprehensive web
                solutions.
              </Card.Text>
              <Card.Text className="about-card-text">
                In August 2024, I completed an intensive{" "}
                <strong>BootCamp in Full Stack Web Development</strong> at the
                University of Utah, further honing my skills and expanding my
                knowledge across both <strong>front-end</strong> and
                <strong>back-end technologies</strong>. I am now seeking
                opportunities as a <strong>Front-End</strong> or{" "}
                <strong>Back-End Developer</strong>, or in a combined{" "}
                <strong>Full Stack</strong> role.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
