import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSections = ({ faqs, openFaq, setOpenFaq }) => {
  return (
    <section className="container mx-auto px-6 py-12 font-montserrat">
      <h2 className="text-3xl font-bold text-center mb-6">Domande Frequenti</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return (
            <div
              className="border-b pb-4 cursor-pointer"
              key={index}
              onClick={() => setOpenFaq(isOpen ? null : index)}
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-between w-full">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </div>
                {isOpen ? (
                  <ChevronUp size={20} className="text-gray-600" />
                ) : (
                  <ChevronDown size={20} className="text-gray-600" />
                )}
              </div>
              {isOpen && <p className="text-gray-700 mt-2">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSections;
