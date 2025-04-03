import React from "react";
import Random from "../../assets/random.avif";

const PromoHome = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 font-montserrat">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Le Nostre Promo
        </h2>

        {/* Griglia delle promo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[Random, Random, Random, Random].map((promo, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={promo}
                alt={`Promo ${index + 1}`}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold font-montserrat text-gray-800 mt-3">
                {
                  [
                    "Pacchetto Labbra + Sopracciglia",
                    "Pacchetto Labbra + Eyeliner Infracigliare",
                    "Corso in Sconto",
                    "Promo Festività",
                  ][index]
                }
              </h3>
            </div>
          ))}
        </div>

        {/* Bottone WhatsApp */}
        <div className="mt-8">
          <a
            href="https://api.whatsapp.com/message/46ASS33MA6S6I1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition"
          >
            Richiedi info senza impegno
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoHome;
