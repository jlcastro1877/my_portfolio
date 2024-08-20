import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../assets/images/hero-img.jpeg"; // Update with the correct path
import "../assets/styles/hero.css"; // Make sure this CSS file is correctly imported

const Hero = () => {
  return (
    <div className="hero-container">
      <Container fluid className="h-100">
        <Row noGutters className="h-100">
          <Col md={6} className="text-column">
            <div className="text-content text-center">
              <h1 className="display-4">Full Stack Web Developer</h1>
              <p className="lead">
                Passionate about building innovative solutions and crafting
                user-centric experiences.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/jlcastro1877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jorge-castro-mba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="image-column">
            <img
              src={myPhoto}
              alt="Jorge Castro"
              className="img-fluid rounded-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
