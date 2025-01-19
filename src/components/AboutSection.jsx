import { Container, Row, Col, Button } from "reactstrap";

const AboutSection = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9", padding: "4rem 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md="6" className="mb-4 mb-md-0">
            <p style={{ color: "#FF8C00", fontWeight: "bold" }}>
              WELCOME TO REGISTERKARO.IN
            </p>
            <h2>
              About <span style={{ color: "#FF8C00" }}>Register Karo</span>
            </h2>
            <p>
              We have been using Intelegencia as our DevOps vendor for our field
              service applications over the last couple of years and I’m
              extremely pleased with their performance, ability to execute, and
              willingness to adapt in our ever-changing environment. Perry is
              an outstanding leader who is fanatical about customer
              satisfaction. He has built a solid team which has consistently
              delivered on projects thereby exceeding everyone’s expectations.
            </p>
            <p>
              I would strongly recommend their services to any organization
              that is looking for solid, reliable, and predictable outcomes.
            </p>
            <Button color="primary" outline>
              Learn More
            </Button>
          </Col>

          {/* Image Section */}
          <Col md="6">
            <div className="position-relative">
              <img
                src="https://via.placeholder.com/500x300"
                alt="Team"
                className="img-fluid rounded shadow"
                style={{
                  border: "5px solid #FF8C00",
                  borderRadius: "8px",
                }}
              />
              {/* Floating Icon */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#1A7F6F",
                  color: "white",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
               { "Icon"}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
