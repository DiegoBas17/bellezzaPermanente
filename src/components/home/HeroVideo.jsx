import React, { useEffect, useRef, useState } from "react";

const HeroVideo = ({ isVideoOpen, setIsVideoOpen }) => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(""); // Stato per gestire il src del video
  const navbarHeight = 88;

  useEffect(() => {
    if (isVideoOpen) {
      setVideoSrc("https://www.youtube.com/embed/dQw4w9WgXcQ");
      setTimeout(() => {
        if (videoRef.current) {
          const yOffset = -navbarHeight;
          const y =
            videoRef.current.getBoundingClientRect().top +
            window.scrollY +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      setVideoSrc(""); // Resetta il video quando viene chiuso
    }
  }, [isVideoOpen]);

  return (
    <div
      ref={videoRef}
      className={`w-full mx-auto bg-black transition-all duration-500 ease-in-out ${
        isVideoOpen
          ? "opacity-100 p-4 max-h-screen py-6"
          : "opacity-0 max-h-0 overflow-hidden"
      }`}
    >
      <button
        onClick={() => setIsVideoOpen(false)}
        className="text-white text-3xl flex justify-end w-full mb-4"
      >
        ✕
      </button>

      <div className="flex flex-col md:flex-row items-center">
        {videoSrc && (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qFOdR6TQCkM?si=I32H7EeChTl7kmmw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full md:w-2/3 h-64 md:h-[400px]"
          ></iframe>
        )}
        <div className="mt-4 md:mt-0 md:ml-8 text-white text-lg font-montserrat md:w-1/3">
          <p>
            Sono Erica Bianchini, professionista nel trucco permanente dal 2017.
            Specializzata in trattamenti avanzati e formazioni professionali. Ti
            invito a guardare questo breve video introduttivo su di me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
