import { Container, Row, Col } from "reactstrap";
import Button from "../UI_components/Button";
import AboutImg from "../assets/images/about_us.webp"
import Heading from "../UI_components/Heading";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import DotsGrid from "../UI_components/DotGrid";


const AboutSection = () => {
  return (
    <section className="section_about section-space">
      <Container fluid>
        <Row>
          <Col md="6" className="mb-4 mb-md-0 position-relative z-index-1">
            <Heading
              subheading={"WELCOME TO REGISTERKARO.IN"}
              subheadingcolor={"var(--primary-color)"}
              mainHeading={"About <span class='primary-text'>Register Karo</span>"}
              align={'left'}
            />

            <p className="para-1">
              We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
              their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
              customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.
            </p>
            <p className="para-1">
              I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
            </p>
            <Button color={"var(--blue-color)"} text={"Learn More"} icon={<FaRegArrowAltCircleRight />} />
          </Col>

          <Col md="6">
            <div className="position-relative z-index-99 img-box">
              <img
                src={AboutImg}
                alt="Team"
                loading="lazy"
              /> 
            </div>
            <DotsGrid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
