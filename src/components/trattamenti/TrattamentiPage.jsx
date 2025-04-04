import React, { useState } from "react";
import MyTopBar from "../navbar/MyTopBar";
import MyFooter from "../footer/MyFooter";
import { treatments } from "./treatmentsData.js";
import { faqs } from "./faqsData.js";
import FaqSections from "./FaqSections.jsx";

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
      <section className="text-center py-10 pt-[88px] bg-black font-montserrat">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Servizi che Offro
          </h1>
          <a
            href="https://www.satispay.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg mt-4 md:mt-0">
              Puoi pagare in comode rate con Satispay
            </button>
          </a>
        </div>
      </section>
      {/* Sezioni Alternanti */}
      <div className="w-full font-montserrat">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row mx-auto py-4 md:px-4 ${
              index % 2 === 0
                ? "md:flex-row bg-gray-100"
                : "md:flex-row-reverse bg-gray-200"
            } items-center`}
          >
            {/* Testo */}
            <div className="md:w-1/2 p-6 text-center">
              <h2 className="text-2xl font-semibold">{treatment.title}</h2>
              <p className="text-gray-700 mt-2">{treatment.description}</p>
            </div>
            {/* Immagine e Video */}
            <div className="md:w-1/2 flex flex-col items-center">
              <img
                src={treatment.imgSrc}
                alt={treatment.title}
                className="w-40 h-40 rounded-full object-cover mb-4 transition-transform duration-300 hover:scale-105"
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
                  height="250"
                  src={treatment.videoSrc}
                  title={treatment.title}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg transition-opacity duration-500 opacity-100 w-full lg:w-1/2"
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
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-green-600 transition"
        >
          Richiedi Consulenza Gratuita
        </a>
      </div>
      {/* FAQ Section */}
      <FaqSections faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MyFooter />
    </>
  );
};

export default TrattamentiPage;
