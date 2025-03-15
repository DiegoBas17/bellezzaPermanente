import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Facebook from "../../assets/Facebook_icon.svg";
import Instragram from "../../assets/Instagram_icon.png";
import Whatsapp from "../../assets/WhatsApp.svg.webp";

const MyTopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    "Home",
    "Trattamenti",
    "Corsi",
    "Lo Studio",
    "Contatti",
    "Area Clienti",
  ];

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

  const navigateTo = (item) => {
    setIsMenuOpen(false);
    navigate(
      item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`
    );
  };

  const renderMenuItems = (className) =>
    menuItems.map((item) => (
      <p key={item} className={className} onClick={() => navigateTo(item)}>
        {item}
      </p>
    ));

  return (
    <>
      {/* Barra laterale social */}
      <div
        className={`fixed left-1 bottom-0 transform -translate-y-1/2 flex flex-col space-y-4 transition-opacity duration-300 ${
          isScrolled ? "opacity-70" : "opacity-20"
        }`}
      >
        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Facebook}
            alt="Facebook"
            className="h-10 w-10 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Instragram}
            alt="Instagram"
            className="h-10 w-10 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          />
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/3291912006"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Whatsapp}
            alt="WhatsApp"
            className="h-10 w-10 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          />
        </a>
      </div>
      {/* Navbar principale */}
      <header
        className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ${
          isMenuOpen
            ? "bg-[#D7649D] shadow-md bg-opacity-90"
            : isScrolled
            ? "bg-[#D7649D] shadow-md bg-opacity-70"
            : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center text-white">
          <div className="text-lg font-bold">
            {/* <img
              src="../../src/assets/logo0.png"
              alt="logo"
              className="h-20 w-72 object-cover"
            /> */}
            Erica Bianchini
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
            {renderMenuItems(
              "cursor-pointer font-semibold text-white px-2 py-1 rounded-lg hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
            )}
          </div>
        </nav>
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center text-white p-4">
            {renderMenuItems("py-1 font-semibold text-white px-2")}
          </div>
        )}
      </header>
    </>
  );
};

export default MyTopBar;
