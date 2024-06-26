import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "./AuthContext";

const HostLogin = ({ onChildClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();
  const handleSubmit = async (e) => {
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
      const name = data.name;
      const surname = data.surname;

      localStorage.setItem("token", token);
      localStorage.setItem("user_id", id);
      localStorage.setItem("role", data.role);

      login(data);
      localStorage.setItem("name", name);
      localStorage.setItem("surname", surname);
      onChildClick();
      navigate(`/host/${id}`);
    } else {
      alert("Login failed, try again or register the account!");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            placeholder="Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password "
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

export default HostLogin;
