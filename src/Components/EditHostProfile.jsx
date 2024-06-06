import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditHostProfile = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [spokenLanguages, setSpokenLanguages] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [userData, setUserData] = useState(null);
  const [age, setAge] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const [maxOccupancy, setMaxOccupancy] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [wifi, setWifi] = useState("");
  const [pets, setPets] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const id = localStorage.getItem("user_id");
      const token = localStorage.getItem("token");

      if (!id || !token) {
        navigate("/"); // Redirect to homepage if no id or token
        return;
      }
      console.log("fetchuserdata");
      try {
        const response = await fetch(`http://localhost:3001/hosts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const userData = await response.json();
          console.log("response", response);
          setUserData(userData);
          setName(userData.name || "");
          setSurname(userData.surname || "");
          setEmail(userData.email || "");
          setPassword(userData.password || "");
          setLocation(userData.location || "");
          setSpokenLanguages(userData.spokenLanguages || "");
          setMaxOccupancy(userData.maxOccupancy || "");
          setProjectDescription(userData.projectDescription || "");
          setAge(userData.age || "");
          setAvatar(userData.avatar || "");
          setWorkingHours(userData.workingHours || "");
          setWifi(userData.wifi || "");
          setPets(userData.pets || "");
        } else {
          console.error("Errore nel caricamento dei dati dell'utente");
        }
      } catch (error) {
        console.error("Errore nel caricamento dei dati dell'utente:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const updateUser = async (updatedData) => {
    const id = localStorage.getItem("user_id");
    try {
      const response = await fetch(`http://localhost:3001/hosts/me/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error("Errore durante l'aggiornamento del profilo");
      }
      return response.json();
    } catch (error) {
      console.error("Errore:", error);
      throw error;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUser({
        name,
        surname,
        email,
        password,
        location,
        age,
        workingHours,
        avatar,
        spokenLanguages,
        maxOccupancy,
        projectDescription,
        wifi,
        pets,
      });
      console.log("Dati del profilo aggiornati:", updatedUser);
      setName("");
      setSurname("");
      setEmail("");
      setPassword("");
      setLocation("");
      setSpokenLanguages("");
      setWifi("");
      setProjectDescription("");
      setMaxOccupancy("");
      setAge("");
      setAvatar("");

      navigate(`/host/${userData.id}`);
    } catch (error) {
      console.error("Errore durante l'aggiornamento del profilo:", error);
      setError("Errore durante l'aggiornamento del profilo");
    }
  };

  return (
    <Container className="edit-container">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mt-4">Edit Host Profile</h2>
          <Form onSubmit={handleFormSubmit} className="mt-5">
            {/* <Form.Group controlId="formName">
              <Form.Label className="form-label my-2">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group> */}

            <Form.Group controlId="formSurname">
              <Form.Label className="form-label my-2">Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className="form-label my-2">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Edit email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label className="form-label my-2">Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formLanguages">
              <Form.Label className="form-label my-2">
                Spoken Languages
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit languages"
                value={spokenLanguages}
                onChange={(e) => setSpokenLanguages(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label className="form-label my-2">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit description"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formMaxOccupancy">
              <Form.Label className="form-label my-2">Max Occupancy</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit max occupancy"
                value={maxOccupancy}
                onChange={(e) => setMaxOccupancy(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formWorkingHours">
              <Form.Label className="form-label my-2">Working Hours</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit working hours"
                value={workingHours}
                onChange={(e) => setWorkingHours(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formWifi">
              <Form.Label className="form-label my-2">Wifi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit wifi"
                value={wifi}
                onChange={(e) => setWifi(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPets">
              <Form.Label className="form-label my-2">Pets</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit pets"
                value={pets}
                onChange={(e) => setPets(e.target.value)}
              />
            </Form.Group>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <Row className="justify-content-center mt-3">
              <Col xs="auto">
                <Button type="submit" className="save-changes">
                  Save Changes
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditHostProfile;
