import React from "react";

const HeroVideo = ({ isVideoOpen, setIsVideoOpen }) => {
  return (
    <>
      {isVideoOpen && (
        <div className="bg-black p-4 w-full mx-auto">
          {/* Pulsante per chiudere */}
          <button
            onClick={() => setIsVideoOpen(false)}
            className="text-white text-3xl flex justify-end w-full mb-4"
          >
            ✕
          </button>
          <div className="flex flex-col md:flex-row items-center">
            {/* Iframe di YouTube */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full md:w-2/3 h-64 md:h-[400px]"
            ></iframe>

            {/* Testo di esempio accanto al video */}
            <div className="mt-4 md:mt-0 md:ml-8 text-white text-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroVideo;
