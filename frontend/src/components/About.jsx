import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
              <Card.Text>
                <Card.Text>
                  Hello, I'm <strong>Jorge Castro</strong>, a seasoned{" "}
                  <strong>Software Developer</strong> with a deep-seated passion
                  for crafting innovative solutions and advancing technology. My
                  journey in software development began in 2002 with{" "}
                  <strong>Visual Basic 6</strong>, a foundational experience
                  that set the stage for my career in technology. As my career
                  evolved, I transitioned to <strong>C#</strong>, which enabled
                  me to tackle complex projects and broaden my expertise. Today,
                  I specialize in Fullstack Web Development, excelling in both
                  frontend and backend technologies to deliver comprehensive web
                  solutions.
                </Card.Text>
              </Card.Text>
              <Card.Text>
                During my time at <strong>Apiary Investment Fund</strong> in
                Lindon, Utah, I was responsible for maintaining{" "}
                <strong>Forex applications</strong> developed in{" "}
                <strong>C#</strong>. I managed associated{" "}
                <strong>MySQL databases</strong> and contributed to a
                significant project where we rebuilt the company’s website. This
                project was my initial exposure to{" "}
                <strong>Full Stack technologies</strong>, including{" "}
                <strong>React</strong>, <strong>CSS</strong>, and{" "}
                <strong>JavaScript</strong>. Over time, I became fluent in{" "}
                <strong>React</strong>, <strong>JavaScript</strong>, and{" "}
                <strong>jQuery</strong>, and developed expertise in
                <strong>MongoDB</strong>, <strong>Mongoose</strong>, and{" "}
                <strong>REST API</strong>. These skills have greatly enhanced my
                capability to develop and manage dynamic web applications.
              </Card.Text>
              <Card.Text>
                Currently, I work as a <strong>QA Engineer</strong> for the{" "}
                <strong>Church of Jesus Christ of Latter-day Saints</strong> in
                the <strong>Education Department</strong>, focusing on the{" "}
                <strong>Seminary and Institute programs</strong>. In this role,
                I am responsible for comprehensive testing, including{" "}
                <strong>regression</strong>,<strong>REST API</strong>, and{" "}
                <strong>UI testing</strong>. I also handle{" "}
                <strong>SQL queries</strong> and engage in{" "}
                <strong>automation testing</strong> using <strong>C#</strong>,
                including <strong>Unit</strong> and <strong>Selenium</strong>
                testing. This position allows me to leverage my technical skills
                while contributing to impactful projects.
              </Card.Text>
              <Card.Text>
                In August 2024, I completed an intensive{" "}
                <strong>BootCamp in Full Stack Web Development</strong> at the
                University of Utah, further honing my skills and expanding my
                knowledge across both <strong>front-end</strong> and
                <strong>back-end technologies</strong>. I am now seeking
                opportunities as a<strong>Front-End</strong> or{" "}
                <strong>Back-End Developer</strong>, or in a combined{" "}
                <strong>Full Stack</strong>
                role. My strongest asset is <strong>backend development</strong>
                , where I excel in creating efficient, scalable, and reliable{" "}
                <strong>server-side</strong>
                solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
