import React from "react";
import { Container, Row, Col, Input, Button, Form, FormGroup } from "reactstrap";
import styled from "styled-components";

const SubscriptionSection = styled.section`
  background: linear-gradient(90deg, #ffa229, #1c4670);
  color: #fff;
  text-align: center;
  padding: 50px 20px;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .subheading {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }

  .form-container {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .form-input {
    flex-grow: 1;
    margin-right: 10px;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }

  .features {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 10px;

      i {
        color: #ffa229;
      }
    }
  }
`;

const Subscription = () => {
  return (
    <SubscriptionSection>
      <Container>
        <Row>
          <Col>
            <p className="subheading">1% OF THE INDUSTRY</p>
            <h1>Welcome to your new digital reality. Now.</h1>
            <div className="form-container">
              <Form inline>
                <FormGroup className="form-input">
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    className="form-control"
                  />
                </FormGroup>
                <Button color="warning" className="fw-bold">
                  Submit
                </Button>
              </Form>
            </div>
            <div className="features">
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Instant results</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>User-friendly interface</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Personalized customization</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SubscriptionSection>
  );
};

export default Subscription;
