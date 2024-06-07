import { useState } from "react";
import { useNavigate } from "react-router";
import { Modal, Button } from "react-bootstrap";

const DeleteProfile = ({ show, handleClose }) => {
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleDeleteProfile = async () => {
    const id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const endpoint = role === "TRAVELLER" ? "travellers" : "hosts";

    try {
      const response = await fetch(
        `http://localhost:3001/${endpoint}/me/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore durante l'eliminazione del profilo");
      }

      // Clear localStorage and navigate to the home page
      localStorage.clear();
      setSuccessMessage("Profile deleted successfully");
      setTimeout(() => {
        setSuccessMessage("");
        setShowModal(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      setError("Error deleting profile");
    }
  };

  const handleGoBack = () => {
    handleClose();
    const id = localStorage.getItem("user_id");
    const role = localStorage.getItem("role");
    const profileRoute =
      role === "TRAVELLER" ? `/traveler/${id}` : `/host/${id}`;
    navigate(profileRoute);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you really want to delete your profile?
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button className="go-back" onClick={handleGoBack}>
          Go back
        </Button>
        <Button variant="danger" onClick={handleDeleteProfile}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteProfile;
