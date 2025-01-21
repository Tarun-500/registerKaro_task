import React from "react";
import { Container, Row, Col } from "reactstrap";

import Icon1 from "../assets/images/icons/our_service_1.svg"
import Icon2 from "../assets/images/icons/our_service_2.svg"
import Icon3 from "../assets/images/icons/our_service_3.svg"
import Icon4 from "../assets/images/icons/our_service_4.svg"
import Icon5 from "../assets/images/icons/our_service_5.svg"
import Icon6 from "../assets/images/icons/our_service_6.svg"
import Heading from "../UI_components/Heading";
import Button from "../UI_components/Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const services = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: Icon1,
    animation: "animate__fadeInLeft",
  },
  {
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals.",
    icon: Icon2,
    animation: "animate__fadeInUp",
  },
  {
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market.",
    icon: Icon3,
    animation: "animate__fadeInRight",
  },
  {
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
    icon: Icon4,
    animation: "animate__fadeInLeft",
  },
  {
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    icon: Icon5,
    animation: "animate__fadeInUp",
  },
  {
    title: "Bookkeeping Services",
    description: "Steering user behaviours with creative design, data insights & technology.",
    icon: Icon6,
    animation: "animate__fadeInRight",
  },
];

const OurServiceSection = () => {
  return (
    <section className="section_our_service section-space">
      <Container fluid>
        <Row>
          <Col>
            <Heading
              subheading={"WELCOME TO REGISTERKARO.IN"}
              subheadingcolor={"var(--primary-color)"}
              mainHeading={"Explore Our Services"}
              mainheadingcolor={"var(--blue-color)"}
              align={"center"}
            />
          </Col>
        </Row>
        <Row className="card_container text-center">
          {services.map((service, index) => (
            <Col
              md="4"
              sm="6"
              xs="12"
              key={index}
              className={`box position-relative ${service.animation}`}
            >
              <div className="service-box">
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} loading="lazy" />
                </div>
                <h5 className="head-4">{service.title}</h5>
                <p className="para-5">{service.description}</p>
                <Button color={"transparent"} textcolor={"var(--blue-color-1)"} text={"Learn More"} fw={"var(--fw-600)"} icon={<FaRegArrowAltCircleRight />} />
              </div>
            </Col>
          ))}
        </Row>
        <Row className="text-center">
          <Col>
            <Button color={"var(--blue-color)"} text={"See All Services"}>
              See All Services
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServiceSection;
