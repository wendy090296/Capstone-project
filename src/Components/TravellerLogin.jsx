import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const TravellerLogin = ({ onChildClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleTravellerSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      const id = data.id;
      const token = data.accessToken;
      localStorage.setItem("token", token);
      localStorage.setItem("user_id ", id);
      onChildClick();
      navigate(`/traveler/${id}`);
    } else {
      alert("Login failed, try again or register the account!");
    }
  };

  return (
    <>
      <Form onSubmit={handleTravellerSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="button-modal" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default TravellerLogin;
