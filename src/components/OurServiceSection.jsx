import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const services = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: "fas fa-cogs",
    animation: "animate__fadeInLeft",
  },
  {
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals.",
    icon: "fas fa-chart-bar",
    animation: "animate__fadeInUp",
  },
  {
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market.",
    icon: "fas fa-users",
    animation: "animate__fadeInRight",
  },
  {
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
    icon: "fas fa-box",
    animation: "animate__fadeInLeft",
  },
  {
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    icon: "fas fa-shopping-cart",
    animation: "animate__fadeInUp",
  },
  {
    title: "Bookkeeping Services",
    description: "Steering user behaviours with creative design, data insights & technology.",
    icon: "fas fa-book",
    animation: "animate__fadeInRight",
  },
];

const OurServiceSection = () => {
  return (
    <Container className="our-services-section py-5">
      <Row className="text-center mb-5">
        <Col>
          <h6 className="section-subtitle">WELCOME TO REGISTERKARO.IN</h6>
          <h2 className="section-title">Explore Our Services</h2>
        </Col>
      </Row>
      <Row>
        {services.map((service, index) => (
          <Col
            md="4"
            sm="6"
            xs="12"
            key={index}
            className={`service-card mb-4 animate__animated ${service.animation}`}
          >
            <div className="service-box">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h5 className="service-title">{service.title}</h5>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="text-center mt-4">
        <Col>
          <Button color="primary" className="see-all-btn">
            See All Services
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OurServiceSection;
