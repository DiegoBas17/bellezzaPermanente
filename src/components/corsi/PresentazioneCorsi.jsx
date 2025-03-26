import React from "react";

import Random from "../../assets/random.avif";

const PresentazioneCorsi = () => {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Immagini sfalsate a sinistra */}
      <div className="flex items-center gap-6 w-full md:w-1/2">
        <div className="w-32 h-80 ">
          <img
            src={Random}
            alt="Specchietto 1"
            className="w-full h-full object-cover rounded-t-full rounded-b-full mt-4"
          />
        </div>
        <div className="w-32 h-80">
          <img
            src={Random}
            alt="Specchietto 2"
            className="w-full h-full object-cover rounded-t-full rounded-b-full mt-8"
          />
        </div>
        <div className="w-32 h-80">
          <img
            src={Random}
            alt="Specchietto 3"
            className="w-full h-full object-cover rounded-t-full rounded-b-full"
          />
        </div>
      </div>

      {/* Iframe YouTube a destra */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video YouTube"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default PresentazioneCorsi;
