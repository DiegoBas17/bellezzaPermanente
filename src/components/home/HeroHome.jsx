import React, { useState } from "react";
import Logo0 from "../../assets/logo0.png";
import Erica from "../../assets/ericaConOmbra3.png";
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
        className="bg-[#AC816A] flex flex-col md:flex-row items-center pt-[88px] px-4"
      >
        {/* Colonna Sinistra (Logo + Testo) */}
        <div className="md:w-1/2 flex flex-col items-center md:items-center">
          {/* Logo più grande e centrato sopra la scritta su desktop */}
          {/* <img
            src={Logo0}
            alt="logo"
            className="h-24 w-full md:h-44 md:w-auto mb-20"
          /> */}
          {/* Testo sotto il logo */}
          <div className="text-center">
            <p className="text-white font-montserrat text-lg md:text-2xl mt-2 mx-auto">
              ROMA
            </p>
            <p className="text-white font-montserrat text-lg md:text-2xl mt-2 mx-auto">
              MICROBLADING
            </p>
            <p className="text-white font-montserrat text-lg md:text-2xl mt-2 mx-auto">
              CORSI FORMAZIONE
            </p>
            <p className="text-white font-montserrat text-lg md:text-2xl mt-2 mx-auto">
              TRUCCO PERMANENTE
            </p>
            <p className="text-white font-cormorant italic text-xl md:text-2xl px-4 mt-7">
              "Precisione, eleganza e formazione di eccellenza: valorizziamo la
              tua bellezza e prepariamo i professionisti di domani"
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              {/*  <img
                src={Instragram}
                alt="Instagram"
                className="h-10 w-10 transition-transform duration-300 hover:scale-125"
              />
              <img
                src={Facebook}
                alt="Facebook"
                className="h-10 w-10 transition-transform duration-300 hover:scale-125"
              /> */}
              <svg
                onClick={toggleVideoSection}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#D7649D"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse mt-4 h-16 w-16 transition-transform duration-300 hover:scale-125"
              >
                <circle cx="50" cy="50" r="45" fill="#df7ca2"></circle>
                <polygon points="40,30 70,50 40,70" fill="white"></polygon>
              </svg>
            </div>
          </div>
        </div>
        {/* Colonna Destra (Immagine) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center mt-6 md:mt-0">
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
