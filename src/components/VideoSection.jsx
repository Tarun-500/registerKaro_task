import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
// import { FaLightbulb } from "react-icons/fa";

const VideoSection = () => {
  return (
    <div style={{ backgroundColor: "#1a3b5d", color: "white", padding: "4rem 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md="6" className="mb-4 mb-md-0">
            <h2>Our Video Introductions</h2>
            <p className="text-muted" style={{ color: "#d9d9d9" }}>
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt
              aptis dui.
            </p>
            <div className="mt-4">
              <div className="d-flex align-items-start mb-4">
                {"Icon"}
                <div>
                  <h5 className="mb-1">Explore ideas together</h5>
                  <p className="mb-0 text-muted" style={{ color: "#d9d9d9" }}>
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                {"Icon"}
                <div>
                  <h5 className="mb-1">Bring those ideas to life</h5>
                  <p className="mb-0 text-muted" style={{ color: "#d9d9d9" }}>
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* Video Section */}
          <Col md="6">
            <div className="position-relative">
              <img
                src="https://via.placeholder.com/500x300"
                alt="Video Thumbnail"
                className="img-fluid rounded shadow"
              />
              <Button
                color="danger"
                className="position-absolute top-50 start-50 translate-middle"
                style={{ borderRadius: "50%", padding: "1rem" }}
              >
                <i className="bi bi-play-fill" style={{ fontSize: "2rem" }}></i>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideoSection;
