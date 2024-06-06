import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const HostsSection = ({ host }) => {
  const [hosts, setHosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedHost, setSelectedHost] = useState(null);
  const [visibleHosts, setVisibleHosts] = useState(4); // Initially show 4 hosts
  const navigate = useNavigate();

  const myUrl = "http://localhost:3001/hosts";

  const fetchHosts = () => {
    fetch(myUrl)
      .then((response) => {
        console.log("response", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in fetching data");
        }
      })
      .then((arrayOfHosts) => {
        console.log("arrayOfHosts", arrayOfHosts.content);
        setHosts(arrayOfHosts.content);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchHosts();
  }, []);

  useEffect(() => {
    console.log("hosts:", hosts);
    console.log("visibleHosts:", visibleHosts);
  }, [hosts, visibleHosts]);

  const handleHostSelection = (host) => {
    console.log("Selected Host:", host);
    setSelectedHost(host);
    navigate(`/host/${host.id}`);
  };

  const handleShowMoreHosts = () => {
    setVisibleHosts((prevVisibleHosts) => prevVisibleHosts + 4);
  };

  return (
    <Container fluid style={{ backgroundColor: "#f5f5f5" }}>
      <Row className="justify-content-center">
        <h3 className="text-center pt-5 fw-bold" style={{ color: "#3d605b" }}>
          Find your best host
        </h3>
      </Row>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "200px" }}
        >
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row className="justify-content-center">
          {hosts.slice(0, visibleHosts).map((host) => (
            <Col
              xs={12}
              md={4}
              lg={3}
              className="text-center pt-3"
              key={host.id}
            >
              <Card
                className="h-100 d-flex flex-column mb-3 card-animated"
                onClick={() => handleHostSelection(host)}
              >
                <Card.Img
                  variant="top"
                  src={host.avatar}
                  className="image-card"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ color: "#818181" }} className="fs-6">
                    {host.location}
                  </Card.Title>
                  <Card.Text style={{ color: "#3d605b", flexGrow: 1 }}>
                    {host.projectDescription}
                  </Card.Text>
                  <Button variant="success" className="button fs-6 mt-auto">
                    Let's connect
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {visibleHosts < hosts.length && (
        <Row className="justify-content-center my-5">
          <Col md={3} lg={2}>
            <Button
              className="show-more border border-none text-dark fw-bold mb-3"
              onClick={handleShowMoreHosts}
            >
              Show more hosts
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default HostsSection;
