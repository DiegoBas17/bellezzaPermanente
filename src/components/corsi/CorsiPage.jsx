import React from "react";
import MyTopBar from "../navbar/MyTopBar";
import MyFooter from "../footer/MyFooter";
import VideoCorsi from "../../assets/video1.mov";
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
      <section className="bg-pink-100 pt-[88px] pb-8">
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
      <MyFooter />
    </>
  );
};

export default CorsiPage;
