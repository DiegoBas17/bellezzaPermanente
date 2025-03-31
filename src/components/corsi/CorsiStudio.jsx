import React from "react";

const CorsiStudio = ({ corsi }) => {
  return (
    <section className="bg-pink-200 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Corsi dal Vivo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {corsi.map((corso, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-110"
            >
              <img
                src={corso.imgSrc}
                alt={corso.title}
                className="w-40 h-40 object-cover rounded-lg"
              />
              <h3 className="mt-3 text-lg font-semibold">{corso.title}</h3>
              <p className="text-gray-600 text-center text-sm mt-2">
                {corso.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorsiStudio;
