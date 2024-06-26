import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Dropdown,
  Modal,
  Button,
} from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import TravellerLogin from "./TravellerLogin";
import HostLogin from "./HostLogin";
import TravellerRegistration from "./TravellerRegistration";
import HostRegistration from "./HostRegistration";
import { useAuth } from "./AuthContext";
import DeleteProfile from "./DeleteProfile";

const CustomNavbar = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [showModalTraveller, setShowModalTraveller] = useState(false);
  const [showModalHost, setShowModalHost] = useState(false);
  const [showDrop2, setShowDrop2] = useState(false);
  const [showJoinTraveller, setShowJoinTraveller] = useState(false);
  const [showJoinHost, setShowJoinHost] = useState(false);
  const [joinModalTitle, setJoinModalTitle] = useState("");
  const [loginModalTitle, setLoginModalTitle] = useState("");
  const [showDeleteModalTraveler, setShowDeleteModalTraveler] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const name = localStorage.getItem("name");
  const surname = localStorage.getItem("surname");
  const nameSurname = name + " " + surname;
  const role = localStorage.getItem("role");
  const editRoute = role === "TRAVELLER" ? "/edit/traveler" : "/edit/host";
  const handleShowDrop = () => {
    setShowDrop(true);
  };

  const handleCloseDrop = () => {
    setShowDrop(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const showLoginModal = (type) => {
    if (type === "backpacker") {
      setShowModalTraveller(true);
      setLoginModalTitle("Backpacker login");
    } else if (type === "host") {
      setShowModalHost(true);
      setLoginModalTitle("Host login");
    }
  };

  const closeLoginModalTraveller = () => {
    setShowModalTraveller(false);
  };

  const closeLoginModalHost = () => {
    setShowModalHost(false);
  };

  const handleShowDrop2 = () => {
    setShowDrop2(true);
  };

  const handleCloseDrop2 = () => {
    setShowDrop2(false);
  };

  const showJoinModal = (type) => {
    if (type === "backpacker") {
      setShowJoinTraveller(true);
      setJoinModalTitle("Join as backpacker");
    } else if (type === "host") {
      setShowJoinHost(true);
      setJoinModalTitle("Join as host");
    }
  };

  const closeJoinModalTraveller = () => {
    setShowJoinTraveller(false);
  };

  const closeJoinModalHost = () => {
    setShowJoinHost(false);
  };

  const handleShowDeleteModalTraveler = () => {
    setShowDeleteModalTraveler(true);
  };

  const handleCloseDeleteModalTraveler = () => {
    setShowDeleteModalTraveler(false);
  };
  return (
    <Container fluid className="navbar1 navbar-scrolled">
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
        <Col className="text-center px-0" md={3}>
          <Navbar.Brand className="fs-3 fw-bold" style={{ color: "#06900d" }}>
            <img src="2.png" alt="backpackers" width={300} height={100} />
          </Navbar.Brand>
        </Col>

        <Col sm={12} md={2} lg={2} className="text-center px-0">
          <span className="px-4">
            <FaHeart className="fs-3" />
          </span>
          <Nav.Link style={{ color: "#264f4b" }} className="fs-6">
            Favourites
          </Nav.Link>
        </Col>

        {user ? (
          <>
            <Col sm={12} md={2} lg={2} className="text-center px-0">
              <Dropdown title={nameSurname} id="basic-nav-dropdown">
                <Dropdown.Toggle className="fs-6 profile-button">
                  {nameSurname}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to={editRoute}>
                    Edit profile
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    onClick={handleShowDeleteModalTraveler}
                  >
                    Delete profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <DeleteProfile
              show={showDeleteModalTraveler}
              handleClose={handleCloseDeleteModalTraveler}
            />
          </>
        ) : (
          <>
            <Col sm={12} md={2} lg={2} className="text-center px-0">
              <span className="px-2">
                <BsPersonCircle className=" fs-3" />
              </span>
              <Nav.Link
                style={{ color: "#264f4b" }}
                className="fs-6"
                onClick={handleShowDrop}
              >
                Login
              </Nav.Link>
              <Dropdown show={showDrop} onToggle={handleCloseDrop}>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => showLoginModal("backpacker")}>
                    Login as Backpacker
                  </Dropdown.Item>
                  <Modal
                    show={showModalTraveller}
                    onHide={closeLoginModalTraveller}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title className="modal-title fw-semibold">
                        {loginModalTitle}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <TravellerLogin onChildClick={closeLoginModalTraveller} />
                    </Modal.Body>
                  </Modal>
                  <Dropdown.Item onClick={() => showLoginModal("host")}>
                    Login as Host
                  </Dropdown.Item>
                  <Modal show={showModalHost} onHide={closeLoginModalHost}>
                    <Modal.Header closeButton>
                      <Modal.Title className="fw-semibold">
                        {loginModalTitle}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <HostLogin onChildClick={closeLoginModalHost} />
                    </Modal.Body>
                  </Modal>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col sm={12} md={2} lg={2} className="text-center px-0">
              <Button
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
                  <Dropdown.Item onClick={() => showJoinModal("backpacker")}>
                    Join as Backpacker
                  </Dropdown.Item>
                  <Modal
                    show={showJoinTraveller}
                    onHide={closeJoinModalTraveller}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title className="fw-semibold">
                        {joinModalTitle}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <TravellerRegistration
                        onChildClick={closeJoinModalTraveller}
                      />
                    </Modal.Body>
                  </Modal>

                  <Dropdown.Item onClick={() => showJoinModal("host")}>
                    Join as Host
                  </Dropdown.Item>

                  <Modal show={showJoinHost} onHide={closeJoinModalHost}>
                    <Modal.Header closeButton>
                      <Modal.Title className="fw-semibold">
                        {joinModalTitle}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <HostRegistration onChildClick={closeJoinModalHost} />
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default CustomNavbar;
