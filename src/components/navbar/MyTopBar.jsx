import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyTopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ${
        isScrolled ? "bg-pink-400 shadow-md bg-opacity-70" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center text-white">
        {/* Logo */}
        <div className="text-lg font-bold">
          <img
            src="../../src/assets/logo0.png"
            alt="logo"
            className="h-20 w-72 object-cover"
          />
        </div>
        {/* Bottone Menu per mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {/* Menu per desktop */}
        <div className="hidden md:flex space-x-6">
          {[
            "Home",
            "Trattamenti",
            "Corsi",
            "Lo Studio",
            "Contatti",
            "Area Clienti",
          ].map((item) => (
            <p
              key={item}
              className="cursor-pointer font-semibold text-black bg-white/30 px-2 py-1 rounded-lg shadow-md hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
              onClick={() =>
                navigate(
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/ /g, "-")}`
                )
              }
            >
              {item}
            </p>
          ))}
        </div>
      </nav>
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center text-white p-4">
          {[
            "Home",
            "Trattamenti",
            "Corsi",
            "Lo Studio",
            "Contatti",
            "Area Clienti",
          ].map((item) => (
            <p
              key={item}
              className="py-1 font-semibold text-white px-2"
              onClick={() => {
                setIsMenuOpen(false);
                navigate(
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/ /g, "-")}`
                );
              }}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </header>
  );
};

export default MyTopBar;
