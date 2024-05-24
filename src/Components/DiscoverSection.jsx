import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const DiscoverSection = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <Image
            src="https://volunteeringhub.org.au/wp-content/uploads/2021/11/VRH_12_Dec_Int-Vol-Day.jpg"
            alt="volunteering banner"
            width={"100%"}
          ></Image>
        </Col>
      </Row>
    </Container>
  );
};
export default DiscoverSection;
