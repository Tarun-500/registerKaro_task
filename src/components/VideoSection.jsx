import { Container, Row, Col } from "reactstrap";
// import YoutubeImg from "../assets/images/youtube_banner.webp"
import Heading from "../UI_components/Heading";
import { IoMdFlashlight } from "react-icons/io";
import { MdOutlineAutoGraph } from "react-icons/md";
const videoId = "https://www.youtube.com/embed/lYO6FqbN3-s?si=4u3TBh8p8i00B6f7"
 
const VideoSection = () => {


  return (
    <section className="section_video section-space bg-blue">
      <Container fluid>
        <Row>

          <Col md="6">
            <Heading
              mainHeading={"Our Video Introductions"}
              mainheadingcolor={"var(--white-color)"}
              align="left"
            />

            <p className="para-1 light-text">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
            </p>

            <div className="mt-4">
              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="circle-btn circle-btn-primary">
                  <IoMdFlashlight />
                </div>
                <div>
                  <h5 className="head-5 text-white">Explore ideas together</h5>
                  <p className="para-1 light-text">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start  gap-3">
                <div className="circle-btn circle-btn-primary">
                  <MdOutlineAutoGraph />
                </div>
                <div>
                  <h5 className="head-5 text-white">Bring those ideas to life</h5>
                  <p className="para-1 light-text">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col md="6">
            {/* <div className="position-relative cursor-pointer">
              <img
                src={YoutubeImg}
                alt="Video Thumbnail"
                className="img-fluid rounded shadow"
                loading="lazy"
              />
            </div> */}
            <iframe
              src={videoId}
              title={"register karo video"}
              width={"100%"}
              height={"100%"}
              allow="autoplay; encrypted-media"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VideoSection;
