import React from "react";
import MyTopBar from "../navbar/MyTopBar";

const Home = () => {
  return (
    <>
      <MyTopBar />
      <div className="bg-black h-[800px] text-white text-3xl font-bold underline p-6 pt-52">
        Questo è il sito per Bellazza Permanente di Erica Bianchini
      </div>
      <div className="bg-pink-500 h-[800px] text-white text-3xl font-bold underline p-6 pt-12">
        Questo è il sito per Bellazza Permanente di Erica Bianchini
      </div>
      <div className="bg-blue-500 h-[800px] text-white text-3xl font-bold underline p-6 pt-12">
        Questo è il sito per Bellazza Permanente di Erica Bianchini
      </div>
    </>
  );
};

export default Home;
