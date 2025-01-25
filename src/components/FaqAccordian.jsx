import { useState } from "react";
import { Container } from "reactstrap";
import Heading from "../UI_components/Heading";
import Button from "../UI_components/Button";
import { LuArrowRight, LuChevronRight, LuChevronDown } from "react-icons/lu";


const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
  ];

  return (
    <section className="faq-container">
      <Container fluid>

        <Heading
          subheading={"FAQ"}
          subheadingcolor={"var(--primary-color);"}
          mainHeading={"Frequent Ask Questions"}
          mainheadingcolor={"var(--text-dark-1)"}
          align="center"
        />


        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                {faq}
                <span className="faq-arrow">
                  {activeIndex === index ? <LuChevronDown /> : <LuChevronRight />}
                </span>
              </div>
              {activeIndex === index && (
                <div className={"faq-answer"}>
                  <p>
                    {" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button color={"var(--blue-color)"} text={"Show more"} icon={<LuArrowRight />} />
        </div>

      </Container>

    </section>
  );
};

export default FAQAccordion; 