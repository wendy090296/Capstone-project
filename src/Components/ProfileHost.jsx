import React from "react";
import { Container, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
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
    projectDescription,
    spokenLanguages,
    maxOccupancy,
    workingHours,
    wifi,
    pets,
    avatar,
  } = host;
  return (
    <Container fluid className="px-5 profile-host">
      <div>
        <h1>
          {name} {surname}
        </h1>
        <Col>
          <img
            src={avatar}
            alt="profile-pic"
            className="rounded-circle"
            width={300}
            height={300}
          />
        </Col>

        <section>
          <h2>Informazioni Personali</h2>
          <p>
            <strong>Nome:</strong> {name}-{surname}
          </p>
          <p>
            <strong>Età:</strong> {age}
          </p>
          <p>
            <strong>Paese di Origine:</strong> {location}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>

          <p>
            <strong>Lingue Parlate:</strong> {spokenLanguages}
          </p>
        </section>

        <section>
          <h2>Project</h2>
          <p>{projectDescription}</p>
        </section>

        <section>
          <h2>Occupancy</h2>
          <p>{maxOccupancy}</p>
        </section>

        <section>
          <h2>Working hours</h2>
          <div>{workingHours}</div>
        </section>

        <section>
          <h2>Wifi</h2>
          <div>{wifi}</div>
        </section>

        <section>
          <h2>Pets</h2>
          <div>{pets}</div>
        </section>
      </div>
    </Container>
  );
};

export default ProfileHost;
