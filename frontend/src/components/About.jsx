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
                Over the years, I have worked extensively on maintaining and
                enhancing web pages using <strong>React</strong>. This involved
                regularly updating and optimizing the company's web pages to
                ensure top-notch functionality and performance. I implemented
                performance optimizations with <strong>React’s useMemo</strong>{" "}
                and <strong>React.memo</strong>, and addressed bugs reported by
                users.
              </Card.Text>
              <Card.Text className="about-card-text">
                I have also designed and implemented new features using{" "}
                <strong>React</strong>, including reusable components and
                complex state management with <strong>Redux</strong>. My work
                involved utilizing <strong>React Router</strong> for seamless
                navigation and integrating <strong>CSS-in-JS</strong> for
                styling.
              </Card.Text>
              <Card.Text className="about-card-text">
                A significant part of my experience includes contributing to a
                major project to rebuild the company’s web application. I
                re-architected the application with <strong>React</strong> and{" "}
                <strong>Redux</strong> to enhance state management, performance,
                and user experience. I also implemented form handling and
                validation to improve user interactions.
              </Card.Text>
              <Card.Text className="about-card-text">
                I integrated <strong>user authentication</strong> and
                authorization using <strong>JWT (JSON Web Tokens)</strong>,
                ensuring secure user sessions and data protection. I managed
                authentication state with <strong>Redux</strong> and{" "}
                <strong>React Context API</strong> to deliver a seamless user
                experience.
              </Card.Text>
              <Card.Text className="about-card-text">
                Additionally, I handled <strong>database operations</strong>{" "}
                with <strong>MongoDB</strong> and integrated it with the{" "}
                <strong>Node.js</strong> backend. I utilized{" "}
                <strong>Mongoose</strong> for schema validation and efficient
                data querying.
              </Card.Text>
              <Card.Text className="about-card-text">
                Finally, I developed and maintained{" "}
                <strong>user profile</strong> functionality, allowing users to
                create, view, and edit their profiles. I leveraged{" "}
                <strong>React’s state management</strong> and{" "}
                <strong>Redux</strong> to handle user data, enhancing
                personalization and user satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
