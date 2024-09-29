import React from 'react';
import PropTypes from 'prop-types';
import FAQItem from '../../../Components/molecules/FAQItem';

const FAQSection = ({ faqs }) => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Pertanyaan Umum</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  </section>
);

FAQSection.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQSection;