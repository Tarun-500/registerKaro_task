import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "START A BUSINESS",
    links: [
      { text: "Features", url: "/features" },
      { text: "Solutions", url: "/solutions" },
      { text: "Integrations", url: "/integrations" },
      { text: "Enterprise", url: "/enterprise" },
      { text: "Solutions", url: "/solutions" },
    ],
  },
  {
    title: "GOVERNMENT REGISTRATION",
    links: [
      { text: "Partners", url: "/partners" },
      { text: "Community", url: "/community" },
      { text: "Developers", url: "/developers" },
      { text: "App", url: "/app" },
      { text: "Blog", url: "/blog" },
    ],
  },
  {
    title: "COMPLIANCE & TAX",
    links: [
      { text: "Channels", url: "/channels" },
      { text: "Scale", url: "/scale" },
      { text: "Watch the Demo", url: "/watch-demo" },
      { text: "Our Competition", url: "/competition" },
    ],
  },
  {
    title: "BIS & CDSCO",
    links: [
      { text: "About Us", url: "/about-us" },
      { text: "News", url: "/news" },
      { text: "Leadership", url: "/leadership" },
      { text: "Media Kit", url: "/media-kit" },
    ],
  },
];

const socialLinks = [
  { icon: "fab fa-facebook", url: "https://facebook.com", ariaLabel: "Visit Facebook" },
  { icon: "fab fa-google", url: "https://google.com", ariaLabel: "Visit Google" },
  { icon: "fab fa-apple", url: "https://apple.com", ariaLabel: "Visit Apple" },
  { icon: "fab fa-instagram", url: "https://instagram.com", ariaLabel: "Visit Instagram" },
];

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
            <Col md={3} xs={12}>
              <p className="light-text para-1">
                Design outstanding interfaces with advanced Figma features in a matter of minutes.
              </p>
              <div className="icons">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    to={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                  >
                    <i className={social.icon}></i>
                  </Link>
                ))}
              </div>

            </Col>

            {sections.map((section, index) => (
              <Col key={index} md={2} xs={6} className="mb-4">
                <h5>{section.title}</h5>
                <ul className="list-unstyled">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link className="para-1 light-text" to={link.url}>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>

          <Row className="text-center">
            <Col>
              <Button
                onClick={scrollToTop}
                className="btn-top"
                aria-label="back to top"
                style={{
                  width: "56px",
                  background: "var(--primary-color)",
                  height: "56px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto 30px auto",
                }}
              >
                <i className="fas fa-arrow-up text-white"></i>
              </Button>
              <p className="para-1 light-text mb-0">© 2024 Registerkaro. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </section>
  );
};

export default Footer;
