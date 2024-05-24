import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FaHeart } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const CustomNavbar = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDrop2, setShowDrop2] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [joinModalTitle, setJoinModalTitle] = useState(false);
  const [loginModalTitle, setLoginModalTitle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowDrop = () => {
    setShowDrop(true);
  };

  const handleCloseDrop = () => {
    setShowDrop(false);
  };

  const showLoginModal = (type) => {
    setShowModal(true);
    if (type === "backpacker") {
      setLoginModalTitle("Backpacker login");
    } else if (type === "host") {
      setLoginModalTitle("Host login");
    }
  };

  const closeLoginModal = () => {
    setShowModal(false);
  };

  const handleShowDrop2 = () => {
    setShowDrop2(true);
  };

  const handleCloseDrop2 = () => {
    setShowDrop2(false);
  };
  const showJoinModal = (type) => {
    setShowJoin(true);
    if (type === "backpacker") {
      setJoinModalTitle("Join as backpacker");
    } else if (type === "host") {
      setJoinModalTitle("Join as host");
    }
  };

  const closeJoinModal = () => {
    setShowJoin(false);
  };

  return (
    <Container fluid className="navbar1">
      <Row className="align-items-center justify-content-center">
        <Col sm={12} md={2} lg={2} className="text-center px-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWXf_ej2rVwGrxoKlbiQPa5uGYP0yoiIs9lX2b8ksFg&s"
            alt="logo"
            width={120}
            height={100}
            className="ms-1"
          />
        </Col>
        <Col className="text-center px-0">
          <Navbar.Brand
            href="#home"
            className="fs-3 fw-bold"
            style={{ color: "#06900d" }}
          >
            Backpackers
          </Navbar.Brand>
        </Col>

        <Col sm={12} md={2} lg={2} className="text-center px-0">
          <span className="px-4">
            <FaHeart className="fs-3" />
          </span>
          <Nav.Link
            href="#favourites"
            style={{ color: "#264f4b" }}
            className="fs-6"
          >
            Favourites
          </Nav.Link>
        </Col>

        <Col sm={12} md={2} lg={2} className="text-center px-0">
          <span className="px-2">
            <BsPersonCircle className=" fs-3" />
          </span>
          <Nav.Link
            href="#login"
            style={{ color: "#264f4b" }}
            className="fs-6"
            onClick={handleShowDrop}
          >
            Login
          </Nav.Link>
          {/* **************** MODAL LOGIN BACKPACKERS **********************/}

          <Dropdown show={showDrop} onToggle={handleCloseDrop}>
            <Dropdown.Menu>
              <Dropdown.Item
                href="#backpacker"
                onClick={() => showLoginModal("backpacker")}
              >
                Login as Backpacker
              </Dropdown.Item>
              <Modal show={showModal} onHide={closeLoginModal}>
                <Modal.Header closeButton>
                  <Modal.Title
                    // style={{ color: "#b3cb3d" }}
                    className="modal-title fw-semibold"
                  >
                    {loginModalTitle}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="modal-button"
                    onClick={closeLoginModal}
                    type="submit"
                  >
                    Login
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* **************** MODAL LOGIN HOST **********************/}
              <Dropdown.Item
                href="#host"
                onClick={() => showLoginModal("host")}
              >
                Login as Host
              </Dropdown.Item>

              <Modal show={showModal} onHide={closeLoginModal}>
                <Modal.Header closeButton>
                  <Modal.Title className="fw-semibold">
                    {loginModalTitle}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="button-modal"
                    onClick={closeLoginModal}
                    type="submit"
                  >
                    Login
                  </Button>
                </Modal.Footer>
              </Modal>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/******************* MODAL JOIN AS BACKPACKER *********************/}

        <Col sm={12} md={2} lg={2} className="text-center px-0">
          <Button
            href="#join"
            className="fs-6 fw-semibold  border border-none text-center"
            style={{
              backgroundColor: "#3d605b",
              color: "white",
              width: "120px",
            }}
            onClick={handleShowDrop2}
          >
            Join now
          </Button>
          <Dropdown show={showDrop2} onToggle={handleCloseDrop2}>
            <Dropdown.Menu>
              <Dropdown.Item
                href="#backpacker"
                onClick={() => showJoinModal("backpacker")}
              >
                Join as Backpacker
              </Dropdown.Item>

              <Modal show={showJoin} onHide={closeJoinModal}>
                <Modal.Header closeButton>
                  <Modal.Title
                    // style={{ color: "#b3cb3d" }}
                    className="fw-semibold"
                  >
                    {joinModalTitle}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Form>
                </Modal.Body>
              </Modal>

              {/***************$ MODAL JOIN AS HOST ********************$*/}

              <Dropdown.Item href="#host" onClick={() => showJoinModal("host")}>
                Join as Host
              </Dropdown.Item>

              <Modal show={showJoin} onHide={closeJoinModal}>
                <Modal.Header closeButton>
                  <Modal.Title
                    // style={{ color: "#b3cb3d" }}
                    className="fw-semibold"
                  >
                    {joinModalTitle}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="button-modal text-white"
                    onClick={closeLoginModal}
                  >
                    Register
                  </Button>
                </Modal.Footer>
              </Modal>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomNavbar;
