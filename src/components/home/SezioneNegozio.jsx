import React from "react";
import Random from "../../assets/random.avif";

const SezioneNegozio = () => {
  return (
    <div className="flex flex-col md:flex-row mt-12 gap-8 bg-white mx-auto px-4 mb-8 md:ps-20">
      {/* Testo sulla sinistra */}
      <div className="md:w-1/2 text-lg text-gray-700 font-montserrat">
        <p>
          Ho aperto il mio studio di trucco permanente nel 2020; uno spazio
          elegante e professionale, progettato per garantire comfort, sicurezza
          e precisione in ogni trattamento. Desidero offrire un ambiente
          accogliente dove ogni dettaglio è curato per valorizzare la bellezza
          in modo naturale e armonioso.
        </p>
      </div>

      {/* Immagini a forma di specchietto sfalsate */}
      <div className="container flex md:w-1/2 justify-center gap-10">
        <div className="w-32 h-80">
          <img
            src={Random}
            alt="Specchietto 1"
            className="w-full h-full object-cover rounded-t-full rounded-b-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-32 h-80">
          <img
            src={Random}
            alt="Specchietto 2"
            className="w-full h-full object-cover rounded-t-full rounded-b-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-32 h-80">
          <img
            src={Random}
            alt="Specchietto 3"
            className="w-full h-full object-cover rounded-t-full rounded-b-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default SezioneNegozio;
