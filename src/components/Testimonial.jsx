import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileImg from "../assets/images/testimonial_img.webp"
import QuoteIcon from '../assets/images/icons/quote.png'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import Heading from "../UI_components/Heading";

const testimonials = [
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    name: "Chris",
    designation: "President and CEO, PrintReach, USA",
    rating: 4.5,
    image: ProfileImg,
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    name: "Alex",
    designation: "Founder, XYZ Corp, USA",
    rating: 4.0,
    image: ProfileImg,
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    name: "Samantha",
    designation: "CTO, ABC Inc, USA",
    rating: 5.0,
    image: ProfileImg,
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    name: "Michael",
    designation: "Manager, TechSolutions, USA",
    rating: 4.8,
    image: ProfileImg,
  },
];


const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <HiChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <HiChevronLeft />
    </div>
  );
};



const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="section_testimonial bg-blue section-space">

      <div className="testimonial-container">
        <div className="mb-4 ">
          <Heading
            mainHeading={"What peoples says about us"}
            mainheadingcolor={"var(--white-color)"}
            align="left"
          />
        </div>


        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="d-flex align-item-center justify-content-between mb-3">

                <div className="testimonial-quote">
                  <img src={QuoteIcon} alt="Quote" />
                </div>

                <div className="testimonial-rating">
                  {"★".repeat(Math.floor(testimonial.rating))}
                  {testimonial.rating % 1 !== 0 && "☆"}
                </div>
              </div>
              <p className="testimonial-text">{testimonial.quote}</p>
              <div className="testimonial-info">
                <img
                  className="testimonial-avatar"
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                />
                <div>
                  <h5 className="head-5">{testimonial.name}</h5>
                  <p className="para-4">
                    {testimonial.designation}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
