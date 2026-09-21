import React, { useState } from "react";
import styles from "./FaqSection.module.css";
import faqs from "../../data/faq.json"; // Ensure the JSON file is in this location

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.heading}>FAQs ( Frequently Asked Questions)</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.question}
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              {faq.question}
              <span className={styles.toggleIcon}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
