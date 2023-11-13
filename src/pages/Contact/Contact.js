import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import './Contact.css'


function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: "",
    });
  };

  const validateEmail = (email) => {
    // Simple email regex pattern
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if inputs are valid
    let tempErrors = {};
    if (state.name === "") {
      tempErrors = { ...tempErrors, name: "Name is required" };
    }
    if (state.email === "") {
      tempErrors = { ...tempErrors, email: "Email is required" };
    } else if (!validateEmail(state.email)) {
      tempErrors = { ...tempErrors, email: "Please enter a valid email" };
    }
    if (state.message === "") {
      tempErrors = { ...tempErrors, message: "Message is required" };
    }
    setErrors(tempErrors);

    // Only log the data if it's valid
    if (Object.keys(tempErrors).length === 0) {
      console.log(state);
    }
  };

  return (
    <Container className="py-4">
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            onChange={handleInputChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="btn-custom shadow-custom" id="contact-btn" variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
