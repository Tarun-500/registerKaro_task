import { Container, Row, Col } from "reactstrap";

const WhyChooseSection = () => {
    return (
        <section className="why_choose_section">
            <Container className="why-choose-section">
                <Row>
                    <Col className="text-center mb-4" xs="12">
                        <h6 className="section-subtitle">WHY REGISTERKARO.IN</h6>
                        <h2 className="section-title">Why Choose Register Karo</h2>
                        <p className="section-description">
                            It is with consistent services and results that build trust with the people
                            and that in turn help us to serve the business better.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="4" sm="6" xs="12" className="feature-card mb-4">
                        <div className="feature-box">
                            <div className="icon-container orange">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h5 className="feature-title">Confidential & Safe</h5>
                            <p className="feature-text">
                                All your private information is safe with us.
                            </p>
                        </div>
                    </Col>
                    <Col md="4" sm="6" xs="12" className="feature-card mb-4">
                        <div className="feature-box">
                            <div className="icon-container green">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h5 className="feature-title">No Hidden Fee</h5>
                            <p className="feature-text">
                                Everything is put before you with no hidden charges or conditions.
                            </p>
                        </div>
                    </Col>
                    <Col md="4" sm="6" xs="12" className="feature-card mb-4">
                        <div className="feature-box">
                            <div className="icon-container blue">
                                <i className="fas fa-smile"></i>
                            </div>
                            <h5 className="feature-title">Guaranteed Satisfaction</h5>
                            <p className="feature-text">
                                We ensure that you stay 100% satisfied with our offered services.
                            </p>
                        </div>
                    </Col>
                    <Col md="4" sm="6" xs="12" className="feature-card mb-4">
                        <div className="feature-box">
                            <div className="icon-container red">
                                <i className="fas fa-user-tie"></i>
                            </div>
                            <h5 className="feature-title">Expert CA/CS Assistance</h5>
                            <p className="feature-text">
                                Prompt support from our in-house expert professionals.
                            </p>
                        </div>
                    </Col>
                    <Col md="4" sm="6" xs="12" className="feature-card mb-4">
                        <div className="feature-box">
                            <div className="icon-container orange">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h5 className="feature-title">Confidential & Safe</h5>
                            <p className="feature-text">
                                All your private information is safe with us.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyChooseSection;
