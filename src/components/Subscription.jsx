import { Container, Row, Col, Input, Form } from "reactstrap";
import styled from "styled-components";
import Heading from "../UI_components/Heading";

const SubscriptionSection = styled.section` 
  text-align: center;
  padding: 64px 20px;
 font-family:var(--font-primary);
color: var(--white-color);


  .form-container {
    max-width: 512px; 
    border-radius:6px;
    width:100%;
    margin: 32px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height:46px; 
  }

  .form-control {
  height: 100%;
   flex-grow: 1; 
   margin: 0 !important;
border-radius:6px 0 0 6px;
border:none;
    @media (max-width: 576px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }


button{  
 height: 100%;
 padding:12px 20px;
 color: var(--white-color);  
font-size: var(--fs-15);
font-weight: var(--fw-600);
line-height: 1.5; 
border-radius:0 6px  6px 0;
border:none;
background-color: var(--primary-color); 
  transition: opacity 0.3s ease;

&:hover{
    opacity: 0.8;
}
}

  .features { 
    display: flex;
    justify-content: center;
    gap: 24px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 16px; 
    }
  }
`;

const Subscription = () => {
  return (
    <SubscriptionSection className="bg-gradient-1">
      <Container fluid>
        <Row>
          <Col>
            <Heading
              subheading="1% OF THE INDUSTRY"
              mainHeading="Welcome to your new digital reality. Now."
              align="center"
              subheadingcolor={"var(--white-color)"}
              mainheadingcolor={"var(--white-color)"}
            />

            <Form inline={"true"} className="form-container">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
              />
              <button className="">
                Submit
              </button>
            </Form>
            <div className="features">
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span className="para-1">Instant results</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span className="para-1">User-friendly interface</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span className="para-1">Personalized customization</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SubscriptionSection>
  );
};

export default Subscription;
