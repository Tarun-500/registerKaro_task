import  { useState } from "react"; 

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
    <div className="faq-container">
      <h2 className="faq-title">
        <span className="faq-highlight">FAQ</span>
        <br />
        Frequent Ask Questions
      </h2>
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
                {activeIndex === index ? "▼" : "▶"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>
                  Yes, this software allows you to recover deleted files from
                  your desktop with ease.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="faq-show-more">Show more →</button>
    </div>
  );
};

export default FAQAccordion;
