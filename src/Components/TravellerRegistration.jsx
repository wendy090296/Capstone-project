import React, { useState } from "react";
import { Form, Button, Container, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const TravellerRegistration = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmedPasswordVisible, setConfirmedPasswordVisible] =
    useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      alert("The passwords do not match! Try again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          email,
          password,
        }),
      });

      const result = await response.json();
      console.log("Server response:", result);

      if (response.ok) {
        alert("Successfully registered!");
        resetForm();
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.log("Error while registering:", error);
    }
  };

  const resetForm = () => {
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setConfirmedPassword("");
    setFailureMessage("");
    setError("");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmedPasswordVisibility = () => {
    setConfirmedPasswordVisible(!confirmedPasswordVisible);
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="m-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <InputGroup.Text onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={confirmedPasswordVisible ? "text" : "password"}
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
              required
            />
            <InputGroup.Text onClick={toggleConfirmedPasswordVisibility}>
              {confirmedPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Button type="submit" className="m-2">
          Register
        </Button>
      </Form>
      {successMessage && <p>{successMessage}</p>}
      {failureMessage && <p style={{ color: "red" }}>{failureMessage}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Container>
  );
};

export default TravellerRegistration;
