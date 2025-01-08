import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Digital World Technology?",
      answer:
        "Digital World Technology is a platform offering cutting-edge digital solutions for businesses and individuals. We specialize in web development, app creation, and digital marketing.",
    },
    {
      question: "How can I contact your support team?",
      answer:
        "You can contact our support team via email at support@digitalworldtech.com or use the contact form on our website. Our team is available 24/7 to assist you.",
    },
    {
      question: "Do you offer customization for your services?",
      answer:
        "Yes, we offer fully customizable solutions tailored to meet your specific needs. Contact us to discuss your requirements.",
    },
    {
      question: "What are your pricing plans?",
      answer:
        "Our pricing plans vary depending on the service and scale of the project. Visit our Pricing page or contact us for a detailed quote.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Absolutely! We offer ongoing support and maintenance packages to ensure your project runs smoothly after delivery.",
    },
  ];

  return (
    <section className=" py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-black mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 transition-all duration-300"
            >
              <button
                className="flex justify-between w-full text-black font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-black">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
