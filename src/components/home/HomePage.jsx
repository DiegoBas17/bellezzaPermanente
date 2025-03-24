import React from "react";
import MyTopBar from "../navbar/MyTopBar";
import HeroHome from "./HeroHome";
import MyFooter from "../footer/MyFooter";
import InfoNegozio from "./InfoNegozio";

const HomePage = () => {
  return (
    <>
      <MyTopBar />
      <HeroHome />
      {/* Main */}
      <main>
        <InfoNegozio />
      </main>
      <MyFooter />
    </>
  );
};

export default HomePage;
