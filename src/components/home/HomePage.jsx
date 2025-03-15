import React from "react";
import MyTopBar from "../navbar/MyTopBar";
import Logo0 from "../../assets/logo0.png";
import Erica from "../../assets/ericafake.png";
import Facebook from "../../assets/Facebook_icon.svg";
import Instragram from "../../assets/Instagram_icon.png";

const HomePage = () => {
  return (
    <>
      <MyTopBar />
      {/* Hero */}
      <section id="hero" className="bg-black flex pt-28">
        <div className="ms-3 text-center">
          <img src={Logo0} alt="logo" className="h-44 w-64 " />
          <p className="text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            suscipit delectus consequatur
          </p>
          <img src={Instragram} alt="" className="inline h-10 w-10" />
          <img src={Facebook} alt="" className="inline h-10 w-10" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10 text-red-500 inline "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            />
          </svg>
        </div>
        <div>
          <img src={Erica} alt="" />
        </div>
        {/* Main */}
      </section>
      <main>
        <section>
          <div className="bg-black h-[800px] text-white text-3xl font-bold underline p-6 pt-52">
            Questo è il sito per Bellazza Permanente di Erica Bianchini
          </div>
          <div className="bg-pink-500 h-[800px] text-white text-3xl font-bold underline p-6 pt-12">
            Questo è il sito per Bellazza Permanente di Erica Bianchini
          </div>
          <div className="bg-blue-500 h-[800px] text-white text-3xl font-bold underline p-6 pt-12">
            Questo è il sito per Bellazza Permanente di Erica Bianchini
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
