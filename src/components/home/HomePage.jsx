import React from "react";
import MyTopBar from "../navbar/MyTopBar";
import HeroHome from "./HeroHome";
import MyFooter from "../footer/MyFooter";

const HomePage = () => {
  return (
    <>
      <MyTopBar />
      <HeroHome />
      {/* Main */}
      <main>
        <section>
          <div className="bg-black h-[800px] text-white text-3xl font-bold underline p-6 pt-52 border-white border-2">
            Questo è il sito per Bellazza Permanente di Erica
            Bianchiniiiiiiiiiiiiiiiiiiiii
          </div>
          <div className="bg-pink-500 h-[800px] text-white text-3xl font-bold underline p-6 pt-12">
            Questo è il sito per Bellazza Permanente di Erica Bianchini
          </div>
          <div className="bg-blue-500 h-[800px] text-white text-3xl font-bold underline p-6 pt-12">
            Questo è il sito per Bellazza Permanente di Erica Bianchini
          </div>
        </section>
      </main>
      <MyFooter />
    </>
  );
};

export default HomePage;
