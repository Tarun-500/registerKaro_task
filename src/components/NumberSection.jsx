import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import "aos/dist/aos.css";
import AOS from "aos";
import Heading from "../UI_components/Heading";


const StatsSection = styled.section`
  background-color: #fff;
  padding: 50px 20px 80px 20px;
  text-align: center;
 
  .stat-item {
    margin-top: 50px;

    .stat-number {
      font-size: 2.5rem;
      font-weight: bold; 
      background: linear-gradient(151.01deg, #FFA229 10%, #1C4670 68%);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 10px;

      
    }
 &:nth-child(2) .stat-number{
      background: linear-gradient(152.74deg, #F53843 10%, #2F5795 68%) ;
     -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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


  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <StatsSection>
      <Container>

        <Heading data-aos="fade-up" data-aos-delay="200"
          subheading={"WHY REGISTER KARO"}
          subheadingcolor={"var(--primary-color)"}
          mainHeading={"Some Numbers are important"}
          mainheadingcolor={"var(--blue-color)"}
        />

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
              <div className="stat-number">{stat.number}</div>
              <div className="para-1 text-dark">{stat.label}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </StatsSection>
  );
};

export default NumberSection;
