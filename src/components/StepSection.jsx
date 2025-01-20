import { Col, Container, Row } from "reactstrap";




const StepSection = () => {
  return (
    <section className="section_step">
      <Container fluid>
        <Row className="steps-container">
          <Col sm={6} md={3} className="step">
            <div className="icon-container red">
              <i className="fas fa-file-alt"></i>
            </div>
            <p className="para-3">Fill up Application Form</p>
          </Col>
          <Col sm={6} md={3} className="step">
            <div className="icon-container green">
              <i className="fas fa-money-bill-wave"></i>
            </div>
            <p className="para-3">Make Online Payment</p>
          </Col>
          <Col sm={6} md={3} className="step">
            <div className="icon-container orange">
              <i className="fas fa-user-cog"></i>
            </div>
            <p className="para-3">Executive will Process Application</p>
          </Col>
          <Col sm={6} md={3} className="step">
            <div className="icon-container gray">
              <i className="fas fa-envelope"></i>
            </div>
            <p className="para-3">Get Confirm Mail</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
