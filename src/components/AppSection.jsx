import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import MobileImg1 from '../assets/images/mobile-1.webp';
import MobileImg2 from '../assets/images/mobile-2.webp';
import AOS from "aos";
import { Link } from 'react-router-dom';
import Heading from "../UI_components/Heading";

const StyledParagraph = styled.p`
  &.para-1 {
    padding: 25px 0 50px 0; 
    margin:0;

      @media(max-width:991px){
  padding: 16px 0 25px 0; 
  }
  } 
`;

const StyledRightBox = styled.div`
  max-width: 540px;
  margin: 0 auto ;
  padding: 60px 20px 100px 20px; 
  text-align: left;  
 


 @media(min-width:991px) and (max-width:1200px){
  padding: 40px 20px; 
  }

   @media(max-width:991px){
  padding: 30px 20px; 
  }

   @media(max-width:768px){
  text-align: center !important;
    padding: 30px 0 0 0; 
  
  h1{
    text-align: center !important;
    }
  }
`;
const StyledImgDiv = styled.div` 
  padding: 20px 0 0 0 ; 
overflow: hidden;

     @media(max-width:768px){
     padding: 0px; 
  }

   & div  {
   width:300px;
    height:500px;
    position: relative;
display:inline-block;

 @media(min-width:991px) and (max-width:1200px){
  width:220px;
    height:440px;
  }

 @media(max-width:991px){
  width:180px;
    height:360px;
  }
     @media(max-width:768px){
    
  width:180px;
    height:320px;
  }
     @media(max-width:425px){
         width: 140px;
        height: 250px;
  }



    & img{
    position: absolute;
      left: 0;
      width: 100%;
      height: auto;
    }
  }

  & > div:nth-child(1) {
  & img{
   top: 0%; 
    transform:translateY(30%)}
  }

    & > div:nth-child(2) {
  & img{
   top: 0%; 
    transform:translateY(10%)}
  }
`;



const AppSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="bg-blue">
      <Container fluid>
        <Row>
          <Col md={6}>
            <StyledRightBox>
              <Heading
                mainHeading={"Manage Your Services by your Mobile Phone"}
                mainheadingcolor={"var(--white-color)"}
                align={"left"}
              />
              <StyledParagraph className="para-1 light-text">
                Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
              </StyledParagraph>
              <div>
                <p className="para-2 text-white">Get The App</p>

                <div className="d-flex gap-16 justify-content-center justify-content-md-start">
                  <Link
                    to="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green"
                  >
                    <div>
                      <i className="fab fa-apple"></i>
                    </div>
                    <div>
                      <span>Get it on</span>
                      <span>App Store</span>
                    </div>
                  </Link>

                  <Link
                    to="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green"
                  >
                    <div>
                      <i className="fab fa-google-play"></i>
                    </div>
                    <div>
                      <span>Get it on</span>
                      <span>Google Play</span>
                    </div>
                  </Link>
                </div>
              </div>
            </StyledRightBox>
          </Col>
          <Col md={6} className="text-center">
            <StyledImgDiv>
              <div
                data-aos="fade-up" 
              >
                <img
                  src={MobileImg1}
                  alt="Mobile App"
                   loading="lazy"
                />
              </div>

              <div
                data-aos="fade-up"
              >
                <img
                  src={MobileImg2}
                  alt="Mobile App"
                   loading="lazy"
                />
              </div>
            </StyledImgDiv>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppSection;
