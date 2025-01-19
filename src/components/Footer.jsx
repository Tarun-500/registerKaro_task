import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
   <section className="section_footer section-space">
     <footer>
      <Container fluid className="py-5">
        <Row>
          {/* Left Section */}
          <Col md={3} xs={12} className="mb-4">
            <h6 style={{ color: "#ffa229" }}>Design outstanding interfaces</h6>
            <p style={{ color: "#d0d0d0", fontSize: "14px" }}>
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div>
              <Link to="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook fa-lg me-3" style={{ color: "#fff" }}></i>
              </Link>
              <Link to="https://google.com" target="_blank" rel="noreferrer">
                <i className="fab fa-google fa-lg me-3" style={{ color: "#fff" }}></i>
              </Link>
              <Link to="https://apple.com" target="_blank" rel="noreferrer">
                <i className="fab fa-apple fa-lg me-3" style={{ color: "#fff" }}></i>
              </Link>
              <Link to="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-lg" style={{ color: "#fff" }}></i>
              </Link>
            </div>
          </Col>


          <Col md={2} xs={6} className="mb-4">
            <h6 style={{ color: "#ffa229" }}>START A BUSINESS</h6>
            <ul className="list-unstyled">
              <li><Link to="/features" style={{ color: "#d0d0d0", textDecoration: "none" }}>Features</Link></li>
              <li><Link to="/solutions" style={{ color: "#d0d0d0", textDecoration: "none" }}>Solutions</Link></li>
              <li><Link to="/integrations" style={{ color: "#d0d0d0", textDecoration: "none" }}>Integrations</Link></li>
              <li><Link to="/enterprise" style={{ color: "#d0d0d0", textDecoration: "none" }}>Enterprise</Link></li>
              <li><Link to="/solutions" style={{ color: "#d0d0d0", textDecoration: "none" }}>Solutions</Link></li>
            </ul>
          </Col>

          <Col md={2} xs={6} className="mb-4">
            <h6 style={{ color: "#ffa229" }}>GOVERNMENT REGISTRATION</h6>
            <ul className="list-unstyled">
              <li><Link to="/partners" style={{ color: "#d0d0d0", textDecoration: "none" }}>Partners</Link></li>
              <li><Link to="/community" style={{ color: "#d0d0d0", textDecoration: "none" }}>Community</Link></li>
              <li><Link to="/developers" style={{ color: "#d0d0d0", textDecoration: "none" }}>Developers</Link></li>
              <li><Link to="/app" style={{ color: "#d0d0d0", textDecoration: "none" }}>App</Link></li>
              <li><Link to="/blog" style={{ color: "#d0d0d0", textDecoration: "none" }}>Blog</Link></li>
            </ul>
          </Col>

          <Col md={2} xs={6} className="mb-4">
            <h6 style={{ color: "#ffa229" }}>COMPLIANCE & TAX</h6>
            <ul className="list-unstyled">
              <li><Link to="/channels" style={{ color: "#d0d0d0", textDecoration: "none" }}>Channels</Link></li>
              <li><Link to="/scale" style={{ color: "#d0d0d0", textDecoration: "none" }}>Scale</Link></li>
              <li><Link to="/watch-demo" style={{ color: "#d0d0d0", textDecoration: "none" }}>Watch the Demo</Link></li>
              <li><Link to="/competition" style={{ color: "#d0d0d0", textDecoration: "none" }}>Our Competition</Link></li>
            </ul>
          </Col>

          <Col md={2} xs={6} className="mb-4">
            <h6 style={{ color: "#ffa229" }}>BIS & CDSCO</h6>
            <ul className="list-unstyled">
              <li><Link to="/about-us" style={{ color: "#d0d0d0", textDecoration: "none" }}>About Us</Link></li>
              <li><Link to="/news" style={{ color: "#d0d0d0", textDecoration: "none" }}>News</Link></li>
              <li><Link to="/leadership" style={{ color: "#d0d0d0", textDecoration: "none" }}>Leadership</Link></li>
              <li><Link to="/media-kit" style={{ color: "#d0d0d0", textDecoration: "none" }}>Media Kit</Link></li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <Button
              color="warning"
              onClick={scrollToTop}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
              }}
            >
              <i className="fas fa-arrow-up"></i>
            </Button>
            <p className="mt-3" style={{ color: "#d0d0d0", fontSize: "14px" }}>
              © 2024 Registerkaro. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
   </section>
  );
};

export default Footer;
