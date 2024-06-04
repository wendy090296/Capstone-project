import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CustomNavbar2 = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar collapseOnSelect expand="lg" className="navbar2 p-3">
          <Col sm={12} md={2} className="text-center">
            <NavDropdown
              title="Find a host"
              id="collapsible-nav-dropdown"
              className="text-white fs-6 firstdropdown"
            >
              <div>
                <NavDropdown.Item href="#hostslist">
                  Full Hosts List
                </NavDropdown.Item>
                <NavDropdown.Item href="#destinations">
                  Destinations
                </NavDropdown.Item>
                <NavDropdown.Item href="#experiences">
                  Experiences
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Col>
          <Col sm={12} md={2} className="text-center">
            <NavDropdown
              title="How it works"
              id="collapsible-nav-dropdown"
              className="text-white mx-3 fs-6"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col sm={12} md={2} className="text-center">
            <NavDropdown
              title="Plan & meet up"
              id="collapsible-nav-dropdown"
              className="text-white mx-3 fs-6"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col sm={12} md={2} className="text-center">
            <NavDropdown
              title="Our community"
              id="collapsible-nav-dropdown"
              className="text-white me-3 fs-6"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col sm={12} md={2} className="text-center">
            <NavDropdown
              title="Our mission"
              id="collapsible-nav-dropdown"
              className="text-white fs-6"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
};

export default CustomNavbar2;
