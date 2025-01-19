import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-section">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12} className="text-section">
            <div>
              <h1>Your trusted partner for compliance business needs</h1>
              <p>
                An online business compliance platform that helps entrepreneurs
                and other individuals with various <b>registrations</b>,
                <b> tax filings</b>, and other <b>legal matters</b>.
              </p>
              <div className="stats">
                <div>
                  <h4>4.5+</h4>
                  <p>Customer Rating</p>
                </div>
                <div>
                  <h4>20,000+</h4>
                  <p>Clients</p>
                </div>
                <div>
                  <h4>99.8%</h4>
                  <p>Financial Stability</p>
                </div>
              </div>
              <div className="cta-buttons mt-3">
                <Button color="primary" className="me-2">
                  Talk An Expert
                </Button>
                <Link to="/how-it-works" className="btn btn-outline-secondary">
                  See how it works
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="image-section">
            <div>
              <img
                src="/path-to-your-image.png"
                alt="Business Compliance"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="vertical-buttons">
        <Link to="/annual-compliance" className="btn btn-light">
          Annual Compliance
        </Link>
        <Link to="/payroll-services" className="btn btn-light">
          Payroll Services
        </Link>
        <Link to="/company-formation" className="btn btn-light">
          Company Formation
        </Link>
        <Link to="/tax-filing" className="btn btn-light">
          Tax Filing
        </Link>
      </div>
    </div>
  );
};

export default Banner;