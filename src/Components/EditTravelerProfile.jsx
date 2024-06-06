import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditTravelerProfile = ({ user }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [interests, setInterests] = useState("");
  const [spokenLanguages, setSpokenLanguages] = useState("");
  const [travelDestination, setTravelDestination] = useState("");
  const [description, setDescription] = useState("");
  const [userData, setUserData] = useState(null);
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const id = localStorage.getItem("user_id");
      const token = localStorage.getItem("token");
      //   console.log(token);
      //   console.log(localStorage.getItem("user_id"));
      console.log("fetchuserdata traveller");

      try {
        const response = await fetch(`http://localhost:3001/travellers/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
          setName(userData.name || "");
          setSurname(userData.surname || "");
          setEmail(userData.email || "");
          setPassword(userData.password || "");
          setInterests(userData.interests || "");
          setSpokenLanguages(userData.spokenLanguages || "");
          setTravelDestination(userData.travelDestination || "");
          setDescription(userData.description || "");
        } else {
          console.error("Errore nel caricamento dei dati dell'utente");
        }
      } catch (error) {
        console.error("Errore nel caricamento dei dati dell'utente:", error);
      }
    };

    fetchUserData();
  }, []);

  const updateUser = async (updatedData) => {
    const id = localStorage.getItem("user_id");
    try {
      const response = await fetch(
        `http://localhost:3001/travellers/me/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updatedData),
        }
      );
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
        interests,
        age,
        country,
        avatar,
        spokenLanguages,
        travelDestination,
        description,
      });
      console.log("Dati del profilo aggiornati:", updatedUser);

      setName("");
      setSurname("");
      setEmail("");
      setPassword("");
      setInterests("");
      setSpokenLanguages("");
      setTravelDestination("");
      setDescription("");
      setAge("");
      setCountry("");
      setAvatar("");
      alert("You succesfully modified your information!");
      navigate(`/traveler/${userData.id}`);
    } catch (error) {
      console.error("Errore durante l'aggiornamento del profilo:", error);
    }
  };

  return (
    <Container className="edit-container">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mt-4">Edit Profile</h2>
          <Form onSubmit={handleFormSubmit} className="mt-5">
            <Form.Group controlId="formName">
              <Form.Label className="form-label my-2">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formSurname">
              <Form.Label className="form-label my-2">Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>
            {/* 
            <Form.Group controlId="formEmail">
              <Form.Label className="form-label my-2">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Edit email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group> */}

            <Form.Group controlId="formInterests">
              <Form.Label className="form-label my-2">Interests</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit interests"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
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

            <Form.Group controlId="formDestination">
              <Form.Label className="form-label my-2">
                Upcoming destination
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit travel destinations"
                value={travelDestination}
                onChange={(e) => setTravelDestination(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label className="form-label my-2">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

export default EditTravelerProfile;
