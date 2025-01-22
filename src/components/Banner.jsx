import {Container, Row, Col } from "reactstrap";
import BannerImg from "../assets/images/banner.webp";
import BannerSide from "../assets/images/banner_side.webp";
import { FaCirclePlay } from "react-icons/fa6";
import Button from '../UI_components/Button'
import StarIcon from '../assets/images/icons/star.svg'
import StarIcon2 from '../assets/images/icons/star_square.svg'
const Banner = () => {
  return (
    <section className="section_banner">
      <Container fluid>
        <Row>
          <Col lg={6} md={6} sm={12} className="text-section">
            <div>
              <span> <img src={StarIcon} alt="star" /> Google Rating
                {
                  Array.from({ length: 5 }).map((_, index) => (
                    <img src={StarIcon2} alt="star" key={index} />
                  ))
                }
              </span>
              <h1>Your trusted partner <br /> for compliance business needs</h1>
              <div className="line"></div>
              <p>
                An online business compliance platform that helps entrepreneurs
                and other individuals with various <strong> registrations, tax filings</strong>, and other <strong>legal matters</strong>.
              </p>
              <div className="stars">
                <div>
                  <h4>4.5+</h4>
                  <p>Customer Rating</p>
                </div>
                <div>
                  <h4>20,000+</h4>
                  <p>Clients</p>
                </div>
                <div>
                  <h4>99.8%</h4>
                  <p>Financial Stability</p>
                </div>
              </div>
              <div className="">
                <Button color={"var(--blue-color)"} text={"Talk An Expert"} />
                <Button text="See how it works" color="transparent" textcolor={"var(--text-dark-3)"} previcon={<FaCirclePlay />} />
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="image-section mt-auto">
            <div className="d-flex align-items-baseline">
              <img
                src={BannerImg}
                alt="Business Compliance"
                className="img-fluid"
              />
              <img
                src={BannerSide}
                alt="Business Compliance"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className="vertical-buttons">
        <Link to="/annual-compliance" className="btn btn-light">
          Annual Compliance
        </Link>
        <Link to="/payroll-services" className="btn btn-light">
          Payroll Services
        </Link>
        <Link to="/company-formation" className="btn btn-light">
          Company Formation
        </Link>
        <Link to="/tax-filing" className="btn btn-light">
          Tax Filing
        </Link>
      </div> */}
    </section>
  );
};

export default Banner;