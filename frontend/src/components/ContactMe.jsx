import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/styles/ContactMe.css"; // Import custom CSS for additional styling if needed

const ContactMe = () => {
  // State to handle form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle form submission status
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setStatus("Failed to submit form. Please try again.");
        console.error("Error:", error);
      });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Contact Me</h1>
          <Form
            onSubmit={handleSubmit}
            className="bg-dark text-light p-4 border border-dark rounded"
          >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className="form-container">
              <div className="btn-container">
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </div>
            </div>
            {status && <p className="mt-3 text-success">{status}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
