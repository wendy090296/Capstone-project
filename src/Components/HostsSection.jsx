import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const myUrl = "http://localhost:3001/hosts";

class HostsSection extends Component {
  state = {
    hosts: [],
    isLoading: true,
  };

  fetchHosts = () =>
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
        this.setState({
          hosts: arrayOfHosts.content,
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
    this.fetchHosts();
  }

  render() {
    return (
      <>
        <Container fluid style={{ backgroundColor: "#f5f5f5" }}>
          <Row className="justify-content-center">
            <h3
              className="text-center pt-5 fw-bold"
              style={{ color: "#3d605b" }}
            >
              {" "}
              Find your best host
            </h3>
            {this.state.hosts.map((host) => {
              return (
                <Col
                  xs={12}
                  md={4}
                  lg={3}
                  className="text-center pt-3"
                  key={host.id}
                >
                  <Card
                    className="card 
                  "
                  >
                    <Card.Img
                      variant="top"
                      src={host.avatar}
                      className="image-card"
                    />
                    <Card.Body>
                      <Card.Title style={{ color: "#818181" }} className="fs-6">
                        {host.location}
                      </Card.Title>
                      <Card.Text
                        // className="fw-semibold "
                        style={{ color: "#3d605b" }}
                      >
                        {host.projectDescription}
                      </Card.Text>
                      <Button variant="success" className="button fs-6">
                        Let's connect{" "}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default HostsSection;
