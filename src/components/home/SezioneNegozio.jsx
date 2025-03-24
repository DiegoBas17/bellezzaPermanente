import React from "react";
import Random from "../../assets/random.avif";

const SezioneNegozio = () => {
  return (
    <div className="flex flex-col md:flex-row mt-12 gap-8 bg-white mx-auto px-4 pb-4 md:ps-20">
      {/* Testo sulla sinistra */}
      <div className="md:w-1/2 text-lg text-gray-700">
        <p>
          Questo è un testo che descrive un aspetto importante del nostro
          servizio, situato qui sulla sinistra. Vogliamo che tu sappia che ogni
          dettaglio è pensato per offrire un'esperienza unica.
        </p>
      </div>
      {/* Immagini a forma di specchietto */}
      <div className="container flex md:w-1/2 justify-center gap-10">
        <div className="w-32 h-60">
          <img
            src={Random}
            alt="Specchietto 1"
            className="w-full h-full object-cover rounded-t-full rounded-b-full"
          />
        </div>
        <div className="w-32 h-60">
          <img
            src={Random}
            alt="Specchietto 1"
            className="w-full h-full object-cover rounded-t-full rounded-b-full"
          />
        </div>
        <div className="w-32 h-60">
          <img
            src={Random}
            alt="Specchietto 1"
            className="w-full h-full object-cover rounded-t-full rounded-b-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SezioneNegozio;
