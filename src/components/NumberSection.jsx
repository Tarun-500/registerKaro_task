import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import "aos/dist/aos.css";
import AOS from "aos";

// Styled Components
const StatsSection = styled.section`
  background-color: #fff;
  padding: 50px 20px;
  text-align: center;

  .section-title {
    color: #a15b2c;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 40px;
    background: linear-gradient(90deg, #ffa229, #1c4670);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .stat-item {
    margin-bottom: 30px;

    .stat-number {
      font-size: 2.5rem;
      font-weight: bold;
      background: linear-gradient(90deg, #ffa229, #1c4670);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 10px;
    }

    .stat-label {
      font-size: 0.9rem;
      font-weight: 500;
      color: #272d37;
      text-transform: uppercase;
    }
  }
`;

const NumberSection = () => {
  const statsData = [
    { number: "1M+", label: "Customers" },
    { number: "12+", label: "Years of Excellence" },
    { number: "41+", label: "R&D Engineers" },
    { number: "78+", label: "Countries" },
    { number: "3287+", label: "Partners" },
    { number: "41+", label: "Awards Received" },
  ];

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 50, // Trigger animation when 50px in viewport
    });
  }, []);

  return (
    <StatsSection>
      <Container>
        {/* Animated Section Title */}
        <div className="section-title" data-aos="fade-up">
          WHY REGISTER KARO
        </div>

        {/* Animated Heading */}
        <h2 data-aos="fade-up" data-aos-delay="200">
          Some Numbers are Important
        </h2>

        <Row>
          {statsData.map((stat, index) => (
            <Col
              key={index}
              xs="6"
              sm="4"
              md="2"
              className="d-flex flex-column align-items-center stat-item"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              {/* Numbers */}
              <div className="stat-number">{stat.number}</div>
              {/* Labels */}
              <div className="stat-label">{stat.label}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </StatsSection>
  );
};

export default NumberSection;
