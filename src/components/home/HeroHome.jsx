import React, { useState } from "react";
import Logo0 from "../../assets/logo0.png";
import Erica from "../../assets/ericaBianchini1.png";
import Facebook from "../../assets/Facebook_icon.svg";
import Instragram from "../../assets/Instagram_icon.png";
import HeroVideo from "./HeroVideo";

const HeroHome = () => {
  // Stato per gestire la visibilità della sezione video
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoSection = () => {
    setIsVideoOpen((prev) => !prev);
  };

  return (
    <>
      <section
        id="hero"
        className="bg-black flex flex-col md:flex-row items-center pt-[88px] px-4"
      >
        {/* Colonna Sinistra (Logo + Testo) */}
        <div className="md:w-1/2 flex flex-col items-center md:items-center">
          {/* Logo più grande e centrato sopra la scritta su desktop */}
          <img
            src={Logo0}
            alt="logo"
            className="h-40 w-48 md:h-60 md:w-72 mb-6"
          />
          {/* Testo sotto il logo */}
          <div className="text-center">
            <p className="text-white italic font-serif text-xl md:text-4xl px-4">
              "Per fare un ottimo lavoro l'unico modo è amare ciò che fai"
            </p>
            <p className="text-white text-xl md:text-3xl mt-2">
              Trucco permanente / microblading
            </p>
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <img src={Instragram} alt="Instagram" className="h-10 w-10" />
              <img src={Facebook} alt="Facebook" className="h-10 w-10" />
              <svg
                onClick={toggleVideoSection}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#D7649D"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse h-10 w-10"
              >
                <circle cx="50" cy="50" r="45" fill="#D7649D"></circle>
                <polygon points="40,30 70,50 40,70" fill="white"></polygon>
              </svg>
            </div>
          </div>
        </div>
        {/* Colonna Destra (Immagine) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src={Erica}
            alt="Erica"
            className="h-[50vh] md:h-[70vh] w-auto"
          />
        </div>
      </section>
      <HeroVideo isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} />
    </>
  );
};

export default HeroHome;
