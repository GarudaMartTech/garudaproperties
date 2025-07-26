import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Garudavega Earth & Artha Lysies Pvt. Ltd. offer?",
    answer:
      "We offer services in residential, commercial, industrial, and plot/land infrastructure development, including sales, marketing, site visits, legal support, and end-to-end property consultation.",
  },
  {
    question: "How can I schedule a property site visit?",
    answer:
      "You can schedule a site visit by contacting our team directly via phone, WhatsApp, or the contact form on our website. We will confirm the date and time at your convenience.",
  },
  {
    question: "Are the listed property prices negotiable?",
    answer:
      "Yes, property prices are often negotiable based on the location, development stage, and seller conditions. Our consultants help in negotiating the best deal possible.",
  },
  {
    question: "Do you assist with home loans and financing?",
    answer:
      "Absolutely. We have tie-ups with leading banks and financial institutions to assist you with home loans, documentation, and processing.",
  },
  {
    question: "Is it safe to invest in plots through your company?",
    answer:
      "Yes, we ensure all properties are legally verified, RERA-approved (if applicable), and come with clear documentation for a safe and secure investment.",
  },
  {
    question: "What documents do I need to buy a property?",
    answer:
      "Typically, you need identity proof, address proof, PAN card, passport-sized photographs, and income proof. Additional documents may be required based on the property type.",
  },
  {
    question: "How do I know if a property is legally clear?",
    answer:
      "We conduct legal verification of each property and provide all related documents including title deed, approval plans, encumbrance certificates, and more for your review.",
  },
  {
    question: "Can NRIs invest through your company?",
    answer:
      "Yes, we provide complete assistance to Non-Resident Indians (NRIs) including property selection, documentation, and remote processing support.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8"></h2>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl shadow-sm transition duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-700 font-medium hover:bg-gray-100 focus:outline-none"
            >
              {faq.question}
              <span className="ml-4">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
