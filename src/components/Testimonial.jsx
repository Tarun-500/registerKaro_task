import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    designation: "President and CEO, PrintReach, USA",
    rating: 4.5,
    image: "https://via.placeholder.com/50", // Replace with an actual image URL
  },
  {
    quote:
      "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Alex",
    designation: "Founder, XYZ Corp, USA",
    rating: 4.0,
    image: "https://via.placeholder.com/50", // Replace with an actual image URL
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Samantha",
    designation: "CTO, ABC Inc, USA",
    rating: 5.0,
    image: "https://via.placeholder.com/50", // Replace with an actual image URL
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Michael",
    designation: "Manager, TechSolutions, USA",
    rating: 4.8,
    image: "https://via.placeholder.com/50", // Replace with an actual image URL
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">What peoples says about us</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-quote">“</div>
            <p className="testimonial-text">{testimonial.quote}</p>
            <div className="testimonial-info">
              <img
                className="testimonial-avatar"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-designation">
                  {testimonial.designation}
                </p>
              </div>
            </div>
            <div className="testimonial-rating">
              {"★".repeat(Math.floor(testimonial.rating))}
              {testimonial.rating % 1 !== 0 && "☆"}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
