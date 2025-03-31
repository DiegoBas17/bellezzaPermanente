import React, { useState } from "react";
import MyTopBar from "../navbar/MyTopBar";
import MyFooter from "../footer/MyFooter";
import { treatments } from "./treatmentsData.js";
import { faqs } from "./faqsData.js";
import { ChevronDown, ChevronUp } from "lucide-react";

const TrattamentiPage = () => {
  const [visibleVideos, setVisibleVideos] = useState(
    new Array(treatments.length).fill(false)
  );
  const [openFaq, setOpenFaq] = useState(null);

  const showVideo = (index) => {
    const updatedVisibility = [...visibleVideos];
    updatedVisibility[index] = true;
    setVisibleVideos(updatedVisibility);
  };

  return (
    <>
      <MyTopBar />
      {/* Titolo e Pulsante Satispay */}
      <section className="text-center py-10 pt-[88px] bg-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Servizi che Offro
          </h1>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg mt-4 md:mt-0">
            Paga in comode rate con Satispay
          </button>
        </div>
      </section>
      {/* Sezioni Alternanti */}
      <div className="container mx-auto px-6 py-12 space-y-12">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center`}
          >
            {/* Testo */}
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold">{treatment.title}</h2>
              <p className="text-gray-700 mt-2">{treatment.description}</p>
            </div>
            {/* Immagine e Video */}
            <div className="md:w-1/2 flex flex-col items-center">
              <img
                src={treatment.imgSrc}
                alt={treatment.title}
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              {!visibleVideos[index] ? (
                <button
                  onClick={() => showVideo(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600"
                >
                  Vedi il Video
                </button>
              ) : (
                <iframe
                  width="100%"
                  height="250"
                  src={treatment.videoSrc}
                  title={treatment.title}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg transition-opacity duration-500 opacity-100"
                ></iframe>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Pulsante WhatsApp */}
      <div className="text-center py-10">
        <a
          href="https://api.whatsapp.com/message/46ASS33MA6S6I1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl"
        >
          Richiedi Consulenza Gratuita
        </a>
      </div>
      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Domande Frequenti
        </h2>
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
      <MyFooter />
    </>
  );
};

export default TrattamentiPage;
