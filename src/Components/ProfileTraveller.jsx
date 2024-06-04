import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { BiWorld } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import { MdInterests } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { MdEmojiPeople } from "react-icons/md";
const ProfileTraveller = () => {
  const { id } = useParams();
  const [traveller, setTraveller] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTravellerData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/travellers/${id}`);
        if (!response.ok) {
          throw new Error("Errore nel caricamento dei dati del viaggiatore");
        }
        const data = await response.json();
        setTraveller(data);
        setLoading(false);
      } catch (error) {
        console.error(
          "Errore nel caricamento dei dati del viaggiatore:",
          error
        );
        setLoading(false);
      }
    };

    fetchTravellerData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!traveller) {
    return <div>Errore nel caricamento dei dati del viaggiatore.</div>;
  }

  const {
    name,
    surname,
    age,
    email,
    country,
    spokenLanguages,
    travelDestination,
    description,
    interests,
    avatar,
  } = traveller;
  return (
    <>
      <Container fluid className=" traveler-profile px-5">
        <Row className="justify-content-center align-items-center">
          <Col md={4} lg={4} className="d-flex justify-content-center">
            <img
              src={avatar}
              alt="profile-pic"
              width={300}
              height={300}
              className="rounded-circle justify-content-center"
            />
          </Col>
          <Col md={4} lg={6} className="text-center">
            <img
              src={country}
              alt="country-pic"
              width={100}
              height={50}
              className="mb-3"
            />

            <h1 className="profile-traveler  mb-3">
              {name} {surname}
            </h1>
            <div>
              {" "}
              <a href={`mailto:${email}`} className="text-center">
                {email}
              </a>
            </div>
          </Col>
        </Row>

        <div className="info-box border px-5 rounded mt-3">
          <h2 className="mt-3">Profile information</h2>
          <div className="d-flex align-items-center">
            <span>
              <BiWorld className="world-icon fs-3 " />
            </span>

            <span className="travel-info fw-bold fs-5 mx-2">
              Travel information
            </span>
          </div>
          {/* <strong>Età:</strong> {age} */}
          <div>
            <strong>My next destination:</strong>
          </div>
          <div>{travelDestination}</div>

          <hr />
          <div className="d-flex align-items-center">
            <span>
              <MdOutlineDescription className="info-icon fs-3" />
            </span>

            <span className="description fw-bold fs-5 mx-2">Description</span>
          </div>
          <p>{description}</p>
          <hr />

          <section className="d-flex align-items-center">
            <span>
              <MdInterests className="activity-icon fs-3" />
            </span>
            <span className="interest fw-bold fs-5 mx-2">Interests</span>
          </section>
          <div>{interests}</div>
          <hr />
          <div className="d-flex align-items-center"></div>
          <span>
            <LiaLanguageSolid className="language-icon fs-3" />
          </span>
          <span className="language fw-bold fs-5 mx-2">Spoken languages</span>

          <div>{spokenLanguages}</div>
          <hr />

          <div className="d-flex align-items-center">
            <span>
              <MdEmojiPeople className="age-icon fs-3" />
            </span>
            <span className="age fw-bold fs-5 mx-2">Age</span>
          </div>
          <div>{age}</div>
        </div>
      </Container>
    </>
  );
};

export default ProfileTraveller;
