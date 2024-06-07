import { Container, Row, Col } from "react-bootstrap";

const Mission = () => {
  return (
    <>
      <Container>
        <div className="mission fs-3 fw-bold mx-5">Our Mission!</div>
        <Row className="align-items-center row-mission mt-4">
          <Col md={8}>
            <div className="paragraph rounded  p-3">
              <p>We’re on a mission and we want to do things differently! </p>
              <p>
                Building a sharing community of global travellers who genuinely
                want to see the world whilst contributing and giving back to the
                places they visit. Alongside our welcoming hosts, ready to
                receive visitors who are able to help out.
              </p>{" "}
              <p>
                {" "}
                With thousands and thousands of users and millions of page views
                every month we thought it was time to write another update on
                Calling4 Backpackers where we’ve come from and where we’re
                going…{" "}
              </p>
              <p>
                First of all a continued big thank you to everyone who has made
                the success of Calling4 Backpackers possible. As well as our
                current team, we also want thank the thousands of members who
                have used our platform to connect and spread the message on a
                global scale.{" "}
              </p>
              <p>
                Did you know that we’ve grown completely organically and NEVER
                actively advertise?
              </p>{" "}
              Calling4 Backpackers has grown via word of mouth which only
              inspires us to keep going, knowing that we are providing a service
              that is making waves across the global travel community.
            </div>
          </Col>
          <Col md={4} className="text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lP4BetIB-TKJsyisNvdZwBFiKlI6Vtnwzg&s"
              alt="mission pic."
              width={300}
              height={300}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Mission;
