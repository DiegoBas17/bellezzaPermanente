import React, { useState, useEffect } from "react";

const MyTopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestisce il cambio di colore dello sfondo quando l'utente scorre
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
        isScrolled ? "bg-pink-400 shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center text-white">
        {/* Logo firma */}
        <div className="text-lg font-bold">
          <img
            src="../../src/assets/logo-ericaBianchini.PNG"
            alt="logo"
            className="h-12 w-72 object-cover"
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
          <a
            href="#"
            className="hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Trattamenti
          </a>
          <a
            href="#"
            className="hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Corsi
          </a>
          <a
            href="#"
            className="hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Lo Studio
          </a>
          <a
            href="#"
            className="hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Contatti
          </a>
          <a
            href="#"
            className="hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Area Clienti
          </a>
        </div>
      </nav>
      {/* Menu mobile (quando è aperto) */}
      {isMenuOpen && (
        <div
          className={`md:hidden flex flex-col items-center p-4 text-white ${
            isScrolled ? "bg-pink-400 shadow-md" : "bg-black"
          }`}
        >
          <a
            href="#"
            className="py-2 hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Home
          </a>
          <a
            href="#"
            className="py-2 hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Trattamenti
          </a>
          <a
            href="#"
            className="py-2 hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Corsi
          </a>
          <a
            href="#"
            className="py-2 hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Lo Studio
          </a>
          <a
            href="#"
            className="py-2 hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Contatti
          </a>
          <a
            href="#"
            className="py-2 hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          >
            Area Clienti
          </a>
        </div>
      )}
    </header>
  );
};

export default MyTopBar;
