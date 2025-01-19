import  { useEffect } from "react";
import { Container, Row, Col } from "reactstrap"; 
import MobileImg from '../assets/images/mobile.png'
import AOS from "aos";
import {Link} from 'react-router-dom'
const AppSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    //   once: true,
    });
  }, []);

  return (
    <section className="section_app bg-blue">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Manage Your Services by your Mobile Phone</h2>
            <p>
              Download our app to manage and track your services. Our app enables you to
              stay in touch with our experts and aids you in tracking your progress.
            </p>
            <div className="">
              <Link
                to="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <i className="fab fa-apple"></i>
                <span style={{ display: "block", fontSize: "14px", marginTop: "10px" }}>App Store</span>
              </Link>
              <Link
                to="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
               <i className="fab fa-google-play"></i>
                <span style={{ display: "block", fontSize: "14px", marginTop: "10px" }}>Google Play</span>
              </Link>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div
              data-aos="fade-up"
              style={{
                position: "relative",
                display: "inline-block",
                width: "200px",  
              }}
            >
              <img
                src={MobileImg}
                alt="Mobile App"
                style={{ maxWidth: "100%", height: "auto" }}
              />
             
              
            </div>
            <div
              data-aos="fade-up"
              style={{
                position: "relative",
                display: "inline-block",
                width: "200px",  
              }}
            >
              <img
                src={MobileImg}
                alt="Mobile App"
                style={{ maxWidth: "100%", height: "auto" }}
              />
             
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppSection;
