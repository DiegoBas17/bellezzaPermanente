import React from "react";
import Random from "../../assets/random.avif";

const InfoNegozio = () => {
  return (
    <section id="info-negozio" className="py-12 bg-[#D4BDA8]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Esperienza */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4">
              <img
                src={Random}
                alt="Esperienza"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">Esperienza</h3>
            <p className="text-gray-700">
              Venti anni di esperienza nel settore, offrendo risultati
              impeccabili.
            </p>
          </div>
          {/* Prodotti Professionali */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4">
              <img
                src={Random}
                alt="Prodotti Professionali"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">Prodotti Professionali</h3>
            <p className="text-gray-700">
              Utilizziamo solo i migliori prodotti professionali per garantire
              risultati duraturi e sicuri.
            </p>
          </div>
          {/* Luogo */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4">
              <img
                src={Random}
                alt="Luogo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">Luogo</h3>
            <p className="text-gray-700">
              Situato nel cuore di Roma, facilmente raggiungibile con i mezzi
              pubblici.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoNegozio;
