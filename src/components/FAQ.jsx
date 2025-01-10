import Lottie from "lottie-react";
import { useState } from "react";
import faqLottie from "../assets/faq.json";

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
    <section className="container mx-auto  items-center py-8 px-4">
      <h2 className="text-3xl font-bold text-blue-900 text-center">
        Frequently Asked Questions
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
        {/* Lottie Animation */}
        <div>
          <Lottie
            animationData={faqLottie}
            className="w-full max-w-lg mx-auto"
          />
        </div>

        {/* FAQ Section */}
        <div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200 transition-all duration-700"
              >
                {/* FAQ Question */}
                <button
                  className="flex justify-between w-full text-black font-medium"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-${index}`}
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

                {/* FAQ Answer */}
                <div
                  id={`faq-${index}`}
                  role="region"
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                  style={{
                    maxHeight: activeIndex === index ? "500px" : "0",
                  }}
                >
                  <p className="mt-4 text-black">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
