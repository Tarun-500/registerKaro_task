import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CoinBaseImg from "../assets/images/companies_logo/coinbase_logo.png"
import SpotifyImg from "../assets/images/companies_logo/spotify_logo.png"
import SlackImg from "../assets/images/companies_logo/slack_logo.png"
import DropboxImg from "../assets/images/companies_logo/dropbox_logo.png"
import WebflowImg from "../assets/images/companies_logo/webflow_logo.png"
import ZoomImg from "../assets/images/companies_logo/zoom_logo.png"


const CompaniesLogoSection = () => {
    const logos = [
        { src: CoinBaseImg, alt: "CoinBase" },
        { src: SpotifyImg, alt: "Spotify" },
        { src: SlackImg, alt: "Slack" },
        { src: DropboxImg, alt: "Dropbox" },
        { src: WebflowImg, alt: "Webflow" },
        { src: ZoomImg, alt: "Zoom" },
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="section_companies_logo section-space">
            <Container fluid className="">
                <Row>
                    <Col>
                        <Slider {...settings}>
                            {logos.map((logo, index) => (
                                <div key={index}>
                                    <img
                                     loading="lazy"
                                        src={logo.src}
                                        alt={logo.alt}
                                        style={{ width: "auto", height:"48px", margin: "0 auto" }}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CompaniesLogoSection;
