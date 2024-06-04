import Container from "react-bootstrap/Container";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { TfiYoutube } from "react-icons/tfi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CustomFooter = () => {
  return (
    <Container fluid className="footer text-white ">
      <Row className="p-5">
        <Col xs={12} md={3} lg={3} className=" mt-3">
          <div className="fw-bold mb-2">Information</div>
          <div>Help Desk</div>
          <div>Safety</div>
          <div>FAQ</div>
          <div>Terms and Conditions</div>
          <div>Data and privacy policy</div>
        </Col>
        <Col xs={12} md={3} lg={3} className=" mt-3">
          <div className="fw-bold mb-2">Volunteam</div>
          <div>Find a host</div>
          <div>Info for hosts</div>
          <div>Info for Volunteers</div>
          <div>Join as host</div>
          <div>Join as Volunteer</div>
        </Col>
        <Col xs={12} md={3} lg={3} className=" mt-3">
          <div className=" fw-bold mb-2">Our community</div>
          <div>Volunteam Blog</div>
          <div>Photo Gallery</div>
          <div>Our Mission</div>
          <div>Volunteam Ambassadors</div>
        </Col>
        <Col xs={12} md={3} lg={3} className=" mt-3">
          <div className="fw-bold mb-3">Language</div>
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png"
              alt="germany flag"
              width={30}
              height={20}
              className="me-2"
            />
          </span>
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png"
              alt="france flag"
              width={30}
              height={20}
              className="me-2"
            />
          </span>
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"
              alt="spain flag"
              width={30}
              height={20}
              className="me-2"
            />
          </span>
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"
              alt="portugal flag"
              width={30}
              height={20}
              className="me-2"
            />
          </span>
        </Col>
        <hr className="mt-5  " />
      </Row>
      <Row>
        <Col sm={12} md={8} lg={6}>
          <div className="fs-5 fw-bold mx-5">Share your experience on..</div>
          <div className="m-4 ">
            <RiFacebookCircleFill className="mx-4 fs-1" />
            <FaInstagram className="me-4 fs-1 " />
            <TfiTwitter className="me-4 fs-1" />
            <TfiYoutube className="me-4 fs-1" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomFooter;
