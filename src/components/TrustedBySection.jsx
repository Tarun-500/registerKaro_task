import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import OracleImg from "../assets/images/companies_logo/oracle.png"
import morpheus_1 from "../assets/images/companies_logo/morpheus_1.png"
import morpheus_2 from "../assets/images/companies_logo/morpheus_2.png"
import SamsungImg from "../assets/images/companies_logo/samsung.png"
import MondayImg from "../assets/images/companies_logo/monday.png"
import SegmentImg from "../assets/images/companies_logo/segment.png"


const TrustedBySection = () => {
    const logos = [
        { src: OracleImg, alt: "Oracle" },
        { src: morpheus_1, alt: "Oracle 1" },
        { src: morpheus_2, alt: "Oracle 2" },
        { src: SamsungImg, alt: "Samsung" },
        { src: MondayImg, alt: "Monday.com" },
        { src: SegmentImg, alt: "Segment" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        arrows: false,
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
        <section className="section_trusted_by section-space">
            <Container className="">
                <h2 className="text-center head-2 text-blue">Trusted By Over 100+ Startups and Freelance Business</h2>
                <Row>
                    <Col>
                        <Slider {...settings}>
                            {logos.map((logo, index) => (
                                <div key={index} className="cursor-pointer">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        style={{ width: "138px", margin: "auto" }}
                                        loading="lazy"
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

export default TrustedBySection;
