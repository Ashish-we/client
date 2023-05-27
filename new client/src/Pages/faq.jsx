import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      question: "How can I get started?",
      answer:
        "To get started, you can follow the installation instructions provided in the documentation.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="my-10 mx-64 font-poppins">
      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md overflow-hidden">
              <button
                className="flex items-center justify-between w-full p-4 bg-white focus:outline-none"
                onClick={() => handleClick(index)}
              >
                <h3 className={`text-xl ${activeIndex === index ? 'font-medium' : 'font-normal'}`}>{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-2 bg-gray-100">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
