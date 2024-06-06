import React, { useState } from "react";
import { Form, Button, Container, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

const TravellerRegistration = ({ onChildClick }) => {
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
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [flag, setFlag] = useState("");
  const [travelDestination, setTravelDestination] = useState("");
  const [description, setDescription] = useState("");
  const [spokenLanguages, setSpokenLanguages] = useState("");
  const [interests, setInterests] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      alert("The passwords do not match! Try again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/travellers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          email,
          password,
          confirmedPasswordVisible,
          age,
          country,
          flag,
          avatar,
          description,
          travelDestination,
          spokenLanguages,
          interests,
        }),
      });

      const result = await response.json();
      console.log("Server response:", result);

      if (response.ok) {
        alert("Successfully registered!");
        resetForm();
        onChildClick();
        navigate("/");
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
    setAge("");
    // setCountry("");
    // // setFlag("");
    setTravelDestination("");
    setSpokenLanguages("");
    // setAvatar("");
    setDescription("");
    setInterests("");
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

        <Form.Group className="m-2">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Profile picture</Form.Label>
          <Form.Control
            type="file"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="file"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>travelDestination</Form.Label>
          <Form.Control
            type="text"
            value={travelDestination}
            onChange={(e) => setTravelDestination(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Interests</Form.Label>
          <Form.Control
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Spoken Languages</Form.Label>
          <Form.Control
            type="text"
            value={spokenLanguages}
            onChange={(e) => setSpokenLanguages(e.target.value)}
            required
          />
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
