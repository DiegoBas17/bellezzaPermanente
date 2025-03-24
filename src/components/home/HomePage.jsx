import React from "react";
import MyTopBar from "../navbar/MyTopBar";
import HeroHome from "./HeroHome";
import MyFooter from "../footer/MyFooter";
import InfoNegozio from "./InfoNegozio";
import SezioneNegozio from "./SezioneNegozio";

const HomePage = () => {
  return (
    <>
      <MyTopBar />
      <HeroHome />
      {/* Main */}
      <main>
        <InfoNegozio />
        <SezioneNegozio />
      </main>
      <MyFooter />
    </>
  );
};

export default HomePage;
