import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

const myUrl = "http://localhost:3001/travellers";

class TravellersSection extends Component {
  state = {
    travellers: [],
    isLoading: true,
  };

  fetchTravellers = () =>
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
        this.setState({
          travellers: arrayOfTravellers,
          isLoading: false,
        });
      })

      .catch((err) => {
        console.log("error", err);
        this.setState({
          isLoading: false,
        });
      });

  componentDidMount() {
    this.fetchTravellers();
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h3 className="text-center py-5 fw-bold" style={{ color: "#3d605b" }}>
            Connect with volunteers
          </h3>
        </Row>
        <Carousel>
          {this.state.travellers
            .reduce((acc, traveller, i) => {
              if (i % 4 === 0) {
                acc.push([]);
              }
              acc[acc.length - 1].push(traveller);
              return acc;
            }, [])
            .map((traveller) => (
              <Carousel.Item key={traveller.id}>
                <Row className="justify-content-center align-items-center">
                  {traveller.map((traveller) => (
                    <Col
                      key={traveller.id}
                      xs={12}
                      md={4}
                      lg={3}
                      className="text-center"
                    >
                      <Card className="card border-0 w-75 px-2">
                        <Card.Img
                          variant="top"
                          src={traveller.avatar}
                          className="image rounded-circle"
                        />
                        <Card.Body className="card-body">
                          <Card.Title style={{ color: "#3d605b" }}>
                            {traveller.name} {traveller.surname}
                          </Card.Title>
                          <Card.Img src={traveller.country} className="flag" />
                          <Button variant="success" className="button">
                            Let's connect
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
        </Carousel>
      </Container>
    );
  }
}

export default TravellersSection;
