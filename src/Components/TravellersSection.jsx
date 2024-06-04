import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router";

const TravellersSection = ({ traveller }) => {
  const [travellers, setTravellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTraveler, setSelectedTraveler] = useState(null);
  const navigate = useNavigate();

  const myUrl = "http://localhost:3001/travellers";

  const fetchTravellers = () => {
    fetch(myUrl)
      .then((response) => {
        console.log("response", response);

        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in fetching data");
        }
      })
      .then((arrayOfTravellers) => {
        console.log("arrayOfTravellers", arrayOfTravellers);
        setTravellers(arrayOfTravellers);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchTravellers();
  }, []);

  const handleSelection = (traveller) => {
    console.log("Selected Traveller:", traveller);
    setSelectedTraveler(traveller);
    navigate(`/traveler/${traveller.id}`);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <h3 className="text-center py-5 fw-bold" style={{ color: "#3d605b" }}>
          Connect with volunteers
        </h3>
      </Row>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "200px" }}
        >
          <Spinner
            animation="border"
            role="status"
            variant="success
          "
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Carousel>
          {travellers.length > 0 ? (
            travellers
              .reduce((acc, traveller, i) => {
                if (i % 4 === 0) {
                  acc.push([]);
                }
                acc[acc.length - 1].push(traveller);
                return acc;
              }, [])
              .map((travellerGroup, index) => (
                <Carousel.Item key={index}>
                  <Row className="justify-content-center align-items-center">
                    {travellerGroup.map((traveller) => (
                      <Col
                        key={traveller.id}
                        xs={12}
                        md={4}
                        lg={3}
                        className="text-center"
                      >
                        <Card
                          className="card border-0 w-75 px-2"
                          onClick={() => handleSelection(traveller)}
                        >
                          <Card.Img
                            variant="top"
                            src={traveller.avatar}
                            className="image rounded-circle"
                          />
                          <Card.Body className="card-body">
                            <Card.Title style={{ color: "#3d605b" }}>
                              {traveller.name}
                            </Card.Title>
                            <Card.Img
                              src={traveller.country}
                              className="flag"
                            />
                            <Button variant="success" className="button">
                              Let's connect
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))
          ) : (
            <div>No travellers found</div>
          )}
        </Carousel>
      )}
    </Container>
  );
};

export default TravellersSection;
