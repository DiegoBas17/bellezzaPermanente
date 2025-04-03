import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Facebook from "../../assets/Facebook_icon.svg";
import Instragram from "../../assets/Instagram_icon.png";
import Whatsapp from "../../assets/WhatsApp.svg.webp";
import { ArrowUp } from "lucide-react";

const MyTopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
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
    setShowScrollTop(window.scrollY > 300);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderMenuItems = (className) =>
    menuItems.map((item) => {
      const isActive =
        location.pathname ===
        (item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`);
      return (
        <p
          key={item}
          className={`${className} ${
            isActive
              ? "text-pink-500 border-pink-500"
              : "text-white border-transparent"
          }`}
          onClick={() => navigateTo(item)}
        >
          {item}
        </p>
      );
    });

  return (
    <>
      {/* Barra laterale social con tooltip */}
      <div
        className={`fixed left-1 bottom-10 flex flex-col space-y-4 transition-opacity duration-300 z-50 hover:opacity-100 ${
          isScrolled ? "opacity-70" : "opacity-20"
        }`}
      >
        {[
          {
            src: Facebook,
            url: "https://www.facebook.com/profile.php?id=100063557019696#",
            text: "Seguici su Facebook",
            bg: "bg-blue-600",
          },
          {
            src: Instragram,
            url: "https://www.instagram.com/ericabianchini.master/",
            text: "Seguici su Instagram",
            bg: "bg-pink-500",
          },
          {
            src: Whatsapp,
            url: "https://api.whatsapp.com/message/46ASS33MA6S6I1",
            text: "Chatta con Erica",
            bg: "bg-green-500",
          },
        ].map(({ src, url, text, bg }, index) => (
          <div key={index} className="flex items-center space-x-2 group">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={text}
                className="h-10 w-10 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              />
            </a>
            <div
              className={`hidden group-hover:flex items-center px-3 py-1 rounded-full text-white text-sm font-semibold transition-all duration-300 ${bg}`}
            >
              {text}
            </div>
          </div>
        ))}
      </div>

      {/* Bottone Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-2 bottom-10 bg-pink-500 text-white p-3 rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Navbar principale */}
      <header
        className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 z-50 ${
          isMenuOpen
            ? "bg-[#D4BDA8] shadow-md bg-opacity-90"
            : isScrolled
            ? "bg-[#D4BDA8] shadow-md bg-opacity-80"
            : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center text-white">
          <img
            src="../../src/assets/firmaNavbar2.png"
            alt="firma-erica-bianchini"
            className="h-14 w-auto object-contain"
          />
          {/* Bottone Menu per mobile */}
          <button className="lg:hidden" onClick={toggleMenu}>
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
          <div className="hidden lg:flex space-x-6">
            {renderMenuItems(
              "cursor-pointer font-semibold px-2 py-1 border-b-2 hover:text-pink-500 hover:border-pink-500"
            )}
          </div>
        </nav>
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col items-center text-white p-4">
            {renderMenuItems("py-1 font-semibold text-white px-2")}
          </div>
        )}
      </header>
    </>
  );
};

export default MyTopBar;
