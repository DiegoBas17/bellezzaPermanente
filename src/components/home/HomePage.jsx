import React from "react";
import MyTopBar from "../navbar/MyTopBar";
import HeroHome from "./HeroHome";
import MyFooter from "../footer/MyFooter";
import InfoNegozio from "./InfoNegozio";
import SezioneNegozio from "./SezioneNegozio";
import TrattamentiHome from "./TrattamentiHome";
import CorsiHome from "./CorsiHome";
import PromoHome from "./PromoHome";

const HomePage = () => {
  return (
    <>
      <MyTopBar />
      <HeroHome />
      <main>
        <InfoNegozio />
        <SezioneNegozio />
        <TrattamentiHome />
        <CorsiHome />
        <PromoHome />
      </main>
      <MyFooter />
    </>
  );
};

export default HomePage;
