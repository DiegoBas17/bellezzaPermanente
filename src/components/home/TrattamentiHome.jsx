import React from "react";
import Random from "../../assets/random.avif";

const TrattamentiHome = () => {
  const trattamenti = [
    { titolo: "Sopracciglia Perfette", immagine: Random },
    { titolo: "Trucco Permanente", immagine: Random },
    { titolo: "Epilazione Laser", immagine: Random },
    { titolo: "Pulizia del Viso", immagine: Random },
    { titolo: "Laminazione Ciglia", immagine: Random },
    { titolo: "Microneedling", immagine: Random },
  ];

  return (
    <section id="trattamenti" className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-5">
          I Nostri Trattamenti
        </h2>

        {/* Griglia dei trattamenti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trattamenti.map((trattamento, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-gradient-to-b from-[#D4BDA8] to-black p-[2px] transition-transform duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(212,189,168,0.5)]"
            >
              {/* Contenuto interno con sfondo bianco */}
              <div className="bg-white rounded-lg overflow-hidden">
                <h3 className="text-xl font-semibold text-center py-4 bg-[#D4BDA8]">
                  {trattamento.titolo}
                </h3>
                <div className="overflow-hidden">
                  <img
                    src={trattamento.immagine}
                    alt={trattamento.titolo}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrattamentiHome;
