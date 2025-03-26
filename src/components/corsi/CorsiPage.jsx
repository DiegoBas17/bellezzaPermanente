import React from "react";
import MyTopBar from "../navbar/MyTopBar";
import MyFooter from "../footer/MyFooter";
import VideoCorsi from "../../assets/video.mov";
import Random from "../../assets/random.avif";
import PresentazioneCorsi from "./PresentazioneCorsi";
import CorsiOnline from "./CorsiOnline";
import CorsiStudio from "./CorsiStudio";

const corsi = Array.from({ length: 10 }, (_, i) => ({
  title: `Corso ${i + 1}`,
  description: `Descrizione del corso ${i + 1}...`,
  imgSrc: Random,
  price: (i + 1) * 20 + "€" /* prezzo fittizio */,
}));

const CorsiPage = () => {
  return (
    <>
      <MyTopBar />
      {/* Sezione Video */}
      <section className="bg-gray-100 pt-[88px]">
        <div className="container mx-auto">
          <video
            src={VideoCorsi}
            autoPlay
            loop
            muted
            className="w-full max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
      <CorsiStudio corsi={corsi} />
      <CorsiOnline corsi={corsi} />
      <PresentazioneCorsi />
      {/* Pulsante WhatsApp */}
      <div className="text-center py-10">
        <a
          href="https://api.whatsapp.com/message/46ASS33MA6S6I1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl shadow-lg"
        >
          Contattaci su WhatsApp
        </a>
      </div>
      <MyFooter />
    </>
  );
};

export default CorsiPage;
