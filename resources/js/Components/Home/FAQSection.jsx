import React from 'react';

const FAQItem = ({ question, answer }) => (
  <details className="bg-white rounded-lg shadow-md p-6">
    <summary className="font-semibold text-lg cursor-pointer">{question}</summary>
    <p className="mt-4 text-gray-600">{answer}</p>
  </details>
);

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

export default FAQSection;