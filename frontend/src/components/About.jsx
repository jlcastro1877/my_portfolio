import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/styles/About.css"; // Import custom CSS for additional styling if needed

const About = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-light bg-dark border-dark">
            <Card.Header as="h1" className="text-center">
              About Me
            </Card.Header>
            <Card.Body>
              {/* <Card.Title className="text-center">About Me</Card.Title> */}
              <Card.Text>
                Hello, I'm Jorge Castro, a seasoned Software Developer with a
                passion for crafting innovative solutions and driving
                technological advancements. My journey in software development
                began in 2002, when I started working with Visual Basic 6. This
                early experience laid a strong foundation for my career in
                technology. As my career progressed, I migrated to C#, which
                enabled me to tackle more complex projects and expand my
                expertise in a broader range of applications.
              </Card.Text>
              <Card.Text>
                I also have valuable experience from my time at Apiary Fund
                Investment, based in Lindon, Utah. During my tenure there, I was
                responsible for maintaining Forex applications developed in C#.
                I managed the associated MySQL databases and was part of a team
                that rebuilt the company's website. This project provided my
                first exposure to Full Stack technologies, including React, CSS,
                and JavaScript, and marked the beginning of my journey into
                modern web development.
              </Card.Text>
              <Card.Text>
                Today, I am working as a QA Engineer for the Church of Jesus
                Christ of Latter-day Saints in the Education Department,
                specifically for the Seminary and Institute programs. In this
                role, I am responsible for testing, including regression
                testing, REST API testing, and UI testing. I also conduct SQL
                queries and engage in automation testing using C#, including
                Unit and Selenium testing. This role allows me to leverage my
                technical skills while contributing to meaningful projects.
              </Card.Text>
              <Card.Text>
                In August 2024, I completed an intensive BootCamp in Full Stack
                Web Development, where I honed my skills and expanded my
                knowledge across both front-end and back-end technologies. I am
                currently seeking opportunities as a Front-End or Back-End
                Developer, or in a combined Full Stack role. My greatest
                strength lies in backend development, where I excel in creating
                efficient, scalable, and reliable server-side solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
