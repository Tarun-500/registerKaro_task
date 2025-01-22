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
        <Container fluid>
          <Row>

            <Col md={3} xs={12} className="">
              <p className="light-text para-1">
                Design outstanding interfaces with advanced Figma features in a matter of minutes.
              </p>
              <div className="icons">
                <Link to="https://facebook.com"  target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link to="https://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-google"></i>
                </Link>
                <Link to="https://apple.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-apple"></i>
                </Link>
                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </Col>


            <Col md={2} xs={6} className="mb-4">
              <h6>START A BUSINESS</h6>
              <ul className="list-unstyled">
                <li><Link className="para-1 light-text" to="/features">Features</Link></li>
                <li><Link className="para-1 light-text" to="/solutions">Solutions</Link></li>
                <li><Link className="para-1 light-text" to="/integrations">Integrations</Link></li>
                <li><Link className="para-1 light-text" to="/enterprise">Enterprise</Link></li>
                <li><Link className="para-1 light-text" to="/solutions">Solutions</Link></li>
              </ul>
            </Col>

            <Col md={3} xs={6} className="mb-4">
              <h6>GOVERNMENT REGISTRATION</h6>
              <ul className="list-unstyled">
                <li><Link className="para-1 light-text" to="/partners">Partners</Link></li>
                <li><Link className="para-1 light-text" to="/community">Community</Link></li>
                <li><Link className="para-1 light-text" to="/developers">Developers</Link></li>
                <li><Link className="para-1 light-text" to="/app">App</Link></li>
                <li><Link className="para-1 light-text" to="/blog">Blog</Link></li>
              </ul>
            </Col>

            <Col md={2} xs={6} className="mb-4">
              <h6>COMPLIANCE & TAX</h6>
              <ul className="list-unstyled">
                <li><Link className="para-1 light-text" to="/channels">Channels</Link></li>
                <li><Link className="para-1 light-text" to="/scale">Scale</Link></li>
                <li><Link className="para-1 light-text" to="/watch-demo">Watch the Demo</Link></li>
                <li><Link className="para-1 light-text" to="/competition">Our Competition</Link></li>
              </ul>
            </Col>

            <Col md={2} xs={6} className="mb-4">
              <h6>BIS & CDSCO</h6>
              <ul className="list-unstyled">
                <li><Link className="para-1 light-text" to="/about-us">About Us</Link></li>
                <li><Link className="para-1 light-text" to="/news">News</Link></li>
                <li><Link className="para-1 light-text" to="/leadership">Leadership</Link></li>
                <li><Link className="para-1 light-text" to="/media-kit">Media Kit</Link></li>
              </ul>
            </Col>
          </Row>

          <Row className="text-center">
            <Col>
              <Button 
                onClick={scrollToTop}
                style={{
                  width: "56px",
                  background:"var(--primary-color)",
                  height: "56px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto 16px auto",
                }}
              >
                <i className="fas fa-arrow-up text-white"></i>
              </Button>
              <p className="para-1 light-text mb-0">
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
