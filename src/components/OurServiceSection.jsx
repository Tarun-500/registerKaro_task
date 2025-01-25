import { Container, Row, Col } from "reactstrap";
import { FormationServiceIcon, SecretarialServicesIcon, OfficeAddressServicesIcon, ComplianceServicesIcon, PayrollServicesIcon, BookkeepingServicesIcon } from '../data/icons'
import Heading from "../UI_components/Heading";
import Button from "../UI_components/Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const services = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: <FormationServiceIcon />,
    animation: "animate__fadeInLeft",
  },
  {
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals.",
    icon: <SecretarialServicesIcon />,
    animation: "animate__fadeInUp",
  },
  {
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market.",
    icon: <OfficeAddressServicesIcon/>,
    animation: "animate__fadeInRight",
  },
  {
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
    icon: <ComplianceServicesIcon />,
    animation: "animate__fadeInLeft",
  },
  {
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    icon: <PayrollServicesIcon />,
    animation: "animate__fadeInUp",
  },
  {
    title: "Bookkeeping Services",
    description: "Steering user behaviours with creative design, data insights & technology.",
    icon: <BookkeepingServicesIcon />,
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
                  {service.icon}
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
