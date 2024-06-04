import { useState } from "react";
import { Form, Button, Container, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

const HostRegistration = ({ onChildClick }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmedPasswordVisible, setConfirmedPasswordVisible] =
    useState(false);
  const [projectDescription, setProjectDescription] = useState("");
  const [spokenLanguages, setSpokenLanguages] = useState("");
  const [maxOccupancy, setMaxOccupancy] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [wifi, setWifi] = useState("");
  const [pets, setPets] = useState("");
  const navigate = useNavigate();

  const handleHostFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      alert("The passwords do not match! Try again.");
    }

    try {
      const response = await fetch("http://localhost:3001/hosts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          email,
          password,
          age,
          location,
          projectDescription,
          spokenLanguages,
          maxOccupancy,
          workingHours,
          wifi,
          pets,
        }),
      });

      if (response.ok) {
        alert("Successfully registered!");
        resetForm();
        onChildClick();
        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        console.log("ERROR", errorData);
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
    setLocation("");
    setProjectDescription("");
    setSpokenLanguages("");
    setMaxOccupancy("");
    setWorkingHours("");
    setWifi("");
    setPets("");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmedPasswordVisibility = () => {
    setConfirmedPasswordVisible(!confirmedPasswordVisible);
  };

  return (
    <Container>
      <Form onSubmit={handleHostFormSubmit}>
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
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            type="text"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
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

        <Form.Group className="m-2">
          <Form.Label>Max Occupancy</Form.Label>
          <Form.Control
            type="number"
            value={maxOccupancy}
            onChange={(e) => setMaxOccupancy(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Daily working hours</Form.Label>
          <Form.Control
            type="number"
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Wify</Form.Label>
          <Form.Control
            type="boolean"
            value={wifi}
            onChange={(e) => setWifi(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="m-2">
          <Form.Label>Pets</Form.Label>
          <Form.Control
            type="text"
            value={pets}
            onChange={(e) => setPets(e.target.value)}
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

export default HostRegistration;
