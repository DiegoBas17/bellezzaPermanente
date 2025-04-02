import React from "react";
import MyTopBar from "../navbar/MyTopBar";
import MyFooter from "../footer/MyFooter";
import Random from "../../assets/random.avif";
import VideoStudio from "../../assets/video.mov";
import EricaPhoto from "../../assets/ericaBianchini.avif";

const LoStudioPage = () => {
  return (
    <>
      <MyTopBar />

      {/* Sezione Studio */}
      <section className="bg-pink-100 pt-[88px] pb-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Video Verticale a sinistra */}
          <div className="w-full md:w-1/2">
            <video
              src={VideoStudio}
              autoPlay
              loop
              muted
              className="w-full h-[800px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Descrizione a destra */}
          <div className="w-full md:w-1/2 text-lg text-gray-700">
            <h2 className="text-3xl font-bold mb-4">Il nostro studio</h2>
            <p>
              Benvenuti nel nostro studio! Offriamo un ambiente moderno e
              accogliente, progettato per garantire la massima soddisfazione dei
              nostri clienti. I nostri esperti sono sempre a disposizione per
              offrirvi trattamenti di alta qualità in un'atmosfera rilassante e
              professionale.
            </p>
          </div>
        </div>
      </section>

      {/* Sezione Foto con Effetto Parallax */}
      <section className="space-y-12 py-12">
        {/* Prima immagine */}
        <div
          className="w-full h-[50vh] bg-cover bg-center bg-fixed rounded-lg shadow-lg flex items-center justify-center"
          style={{ backgroundImage: `url(${Random})` }}
        >
          <h2 className="text-white text-3xl font-bold bg-black/50 px-6 py-3 rounded-lg">
            Il nostro ambiente
          </h2>
        </div>

        {/* Seconda immagine */}
        <div
          className="w-full h-[50vh] bg-cover bg-center bg-fixed rounded-lg shadow-lg flex items-center justify-center"
          style={{ backgroundImage: `url(${Random})` }}
        >
          <h2 className="text-white text-3xl font-bold bg-black/50 px-6 py-3 rounded-lg">
            Trattamenti professionali
          </h2>
        </div>

        {/* Terza immagine */}
        <div
          className="w-full h-[50vh] bg-cover bg-center bg-fixed rounded-lg shadow-lg flex items-center justify-center"
          style={{ backgroundImage: `url(${Random})` }}
        >
          <h2 className="text-white text-3xl font-bold bg-black/50 px-6 py-3 rounded-lg">
            Un luogo di relax
          </h2>
        </div>
      </section>

      {/* Sezione La Mia Storia */}
      <section className="bg-pink-100 py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Testo della storia */}
          <div className="w-full md:w-1/2 text-lg text-gray-700 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">La mia storia</h2>
            <p>
              Erica Bianchini, esperta nell'arte della bellezza permanente, ha
              iniziato la sua carriera con la passione di offrire trattamenti
              che esaltano la bellezza naturale di ogni cliente. Con anni di
              esperienza nel settore, ha aperto il suo studio con l'intento di
              creare un ambiente accogliente e professionale, dove ogni cliente
              possa sentirsi al meglio. La sua passione è diventata il suo
              lavoro, e oggi è riconosciuta per l'eccellenza dei suoi
              trattamenti.
            </p>
          </div>

          {/* Foto di Erica */}
          <div className="w-full md:w-1/2">
            <img
              src={EricaPhoto}
              alt="Erica Bianchini"
              className="w-full h-[500px] md:h-[600px] object-contain"
            />
          </div>
        </div>
      </section>

      <MyFooter />
    </>
  );
};

export default LoStudioPage;
