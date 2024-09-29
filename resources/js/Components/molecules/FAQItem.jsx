import React from 'react';
import PropTypes from 'prop-types';

const FAQItem = ({ question, answer }) => (
  <details className="bg-white rounded-lg shadow-md p-6">
    <summary className="font-semibold text-lg cursor-pointer">{question}</summary>
    <p className="mt-4 text-gray-600">{answer}</p>
  </details>
);

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQItem;