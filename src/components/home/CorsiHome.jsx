import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import LogoAccademia from "../../assets/logo2.png";
import Random from "../../assets/random.avif";

const CorsiHome = () => {
  return (
    <section className="bg-gray-200 py-12 px-4 relative">
      {/* Logo in alto a sinistra */}
      <img
        src={LogoAccademia}
        alt="Logo Accademia"
        className="absolute top-4 left-4 h-10 md:h-24 w-auto"
      />

      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          I Nostri Corsi
        </h2>

        {/* Carosello panoramico */}
        <Swiper
          effect="coverflow"
          centeredSlides={true}
          loop={true} // Effetto infinito
          slidesPerView={"auto"} // Default su mobile è 1 slide
          spaceBetween={20} // Distanza tra le slide
          grabCursor={true} // Disabilitiamo il cursore di trascinamento
          coverflowEffect={{
            rotate: 50,
            stretch: 70, // Allarga l'effetto ai lati
            depth: 300,
            modifier: 1.5, // Aggiustiamo l'effetto per una vista più naturale
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide su schermi piccoli (mobile)
            },
            1024: {
              slidesPerView: 3, // 3 slide su schermi più grandi (desktop)
            },
          }}
          className="w-full max-w-6xl"
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <SwiperSlide key={index} className="h-[400px] md:h-[500px]">
              <img
                src={Random}
                alt={`Corso ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Testo sotto il carosello */}
        <p className="text-gray-700 mt-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};

export default CorsiHome;
