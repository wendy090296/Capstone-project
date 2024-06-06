import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { MdOutlineDescription } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { BsPeopleFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa6";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { MdPets } from "react-icons/md";

const ProfileHost = () => {
  const { id } = useParams();
  const [host, setHost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHostsData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/hosts/${id}`);
        if (!response.ok) {
          throw new Error("Errore nel caricamento dei dati dell'host");
        }
        const data = await response.json();
        setHost(data);
        setLoading(false);
      } catch (error) {
        console.error(
          "Errore nel caricamento dei dati del viaggiatore:",
          error
        );
        setLoading(false);
      }
    };

    fetchHostsData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!host) {
    return <div>Errore nel caricamento dei dati dell'host.</div>;
  }

  const {
    name,
    surname,
    age,
    email,
    location,
    flag,
    projectDescription,
    spokenLanguages,
    maxOccupancy,
    workingHours,
    wifi,
    pets,
    avatar,
  } = host;
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
              src={flag}
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
          <h2 className="mt-3">Details</h2>

          <div className="d-flex align-items-center">
            <span>
              <MdOutlineDescription className="info-icon-host fs-3" />
            </span>

            <span className="description-host fw-bold fs-5 mx-2">
              Project description
            </span>
          </div>
          <p>{projectDescription}</p>
          <hr />

          <div className="d-flex align-items-center"></div>
          <span>
            <LiaLanguageSolid className="language-icon-host fs-3" />
          </span>
          <span className="language-host fw-bold fs-5 mx-2">
            Spoken languages
          </span>

          <div>{spokenLanguages}</div>
          <hr />

          <div className="d-flex align-items-center">
            <span>
              <BsPeopleFill className="age-icon-host fs-3" />
            </span>
            <span className="age-host fw-bold fs-5 mx-2">Age</span>
          </div>
          <div>{age}</div>
          <hr />

          <div className="d-flex align-items-center">
            <span>
              <FaBed className="acc-icon-host fs-4" />
            </span>
            <span className="accommodation fw-bold fs-5 mx-2">
              How many backpackers can stay?
            </span>
          </div>
          <div>{maxOccupancy}</div>
          <hr />

          <div className="d-flex align-items-center">
            <span>
              <BsFillStopwatchFill className="acc-icon-host fs-4" />
            </span>
            <span className="accommodation fw-bold fs-5 mx-2">
              Hours expected
            </span>
          </div>
          <div>{workingHours}</div>
          <hr />

          <div className="d-flex align-items-center">
            <span>
              <FaWifi className="acc-icon-host fs-4" />
            </span>
            <span className="accommodation fw-bold fs-5 mx-2">
              Do you provide internet connection to backpackers?
            </span>
          </div>
          <div>{wifi}</div>

          <hr />

          <div className="d-flex align-items-center">
            <span>
              <MdPets className="acc-icon-host fs-4" />
            </span>
            <span className="accommodation fw-bold fs-5 mx-2">
              Are there any pets?
            </span>
          </div>
          <div>{pets}</div>
        </div>
      </Container>
    </>
  );
};

export default ProfileHost;
