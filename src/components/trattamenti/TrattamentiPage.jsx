import React, { useState } from "react";
import MyTopBar from "../navbar/MyTopBar";
import MyFooter from "../footer/MyFooter";
import Random from "../../assets/random.avif";

const treatments = [
  {
    title: "Trattamento 1",
    description: "Descrizione del trattamento 1...",
    imgSrc: Random,
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Trattamento 2",
    description: "Descrizione del trattamento 2...",
    imgSrc: Random,
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Trattamento 3",
    description: "Descrizione del trattamento 3...",
    imgSrc: Random,
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Trattamento 4",
    description: "Descrizione del trattamento 4...",
    imgSrc: Random,
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Trattamento 5",
    description: "Descrizione del trattamento 5...",
    imgSrc: Random,
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Trattamento 6",
    description: "Descrizione del trattamento 6...",
    imgSrc: Random,
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const faqs = [
  {
    question:
      "Si può fare una prova per vedere come verrebbe l'effetto delle sopracciglia?",
    answer:
      "Do la possibilità di effettuare due tipi di consulenza: \n- Consulenza dal vivo su appuntamento (40 minuti, 50€ scalabili dalla prima seduta). \n- Consulenza online gratuita con simulazione tramite software (tempo di elaborazione: 48h).",
  },
  {
    question: "Posso andare al mare dopo aver fatto il trattamento?",
    answer:
      "Bisogna evitare l'esposizione al sole per almeno 10 giorni per garantire una corretta guarigione. Successivamente, è possibile esporsi con crema solare 50+ sulla zona trattata.",
  },
  {
    question: "Posso fare il trattamento se sono minorenne?",
    answer:
      "Sì, ma solo con l'accompagnamento di un genitore che firmerà l'autorizzazione.",
  },
  {
    question: "Voglio un effetto naturale, come posso ottenerlo?",
    answer:
      "Tutte le tecniche di trucco permanente donano un effetto naturale, migliorando la definizione del viso senza sostituire il makeup.",
  },
  {
    question: "Come faccio a sapere se sono allergica?",
    answer:
      "I pigmenti sono biocompatibili e sicuri. Tuttavia, puoi richiedere la scheda tecnica per verificare con il medico oppure effettuare un test allergico presso lo studio.",
  },
  {
    question: "Devo preparare la pelle prima del trattamento?",
    answer:
      "Non è necessario, ma la pelle deve essere integra, senza irritazioni, dermatiti o bruciature solari.",
  },
  {
    question: "Posso truccarmi dopo il trattamento?",
    answer:
      "No, per almeno 15 giorni sulla zona trattata, per evitare complicanze durante la guarigione.",
  },
  {
    question: "Il trattamento è doloroso?",
    answer:
      "La percezione del dolore è soggettiva, ma il trattamento è generalmente ben tollerato.",
  },
  {
    question: "Posso fare il trattamento in gravidanza o allattamento?",
    answer:
      "No, perché gli ormoni instabili potrebbero influenzare il risultato del trattamento.",
  },
  {
    question: "Perché bisogna effettuare dei ritocchi?",
    answer:
      "I pigmenti usati sono bioriassorbibili, quindi col tempo il corpo li metabolizza. I ritocchi servono per mantenere il colore e correggere eventuali imperfezioni.",
  },
];

const TrattamentiPage = () => {
  const [visibleVideos, setVisibleVideos] = useState(
    new Array(treatments.length).fill(false)
  );
  const [openFaq, setOpenFaq] = useState(null);

  const showVideo = (index) => {
    const updatedVisibility = [...visibleVideos];
    updatedVisibility[index] = true;
    setVisibleVideos(updatedVisibility);
  };

  return (
    <>
      <MyTopBar />

      {/* Titolo e Pulsante Satispay */}
      <section className="text-center py-10 pt-[88px] bg-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Servizi che Offro
          </h1>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg mt-4 md:mt-0">
            Paga in comode rate con Satispay
          </button>
        </div>
      </section>

      {/* Sezioni Alternanti */}
      <div className="container mx-auto px-6 py-12 space-y-12">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center`}
          >
            {/* Testo */}
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold">{treatment.title}</h2>
              <p className="text-gray-700 mt-2">{treatment.description}</p>
            </div>

            {/* Immagine e Video */}
            <div className="md:w-1/2 flex flex-col items-center">
              <img
                src={treatment.imgSrc}
                alt={treatment.title}
                className="w-40 h-40 rounded-full object-cover mb-4"
              />

              {!visibleVideos[index] ? (
                <button
                  onClick={() => showVideo(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600"
                >
                  Vedi il Video
                </button>
              ) : (
                <iframe
                  width="100%"
                  height="250"
                  src={treatment.videoSrc}
                  title={treatment.title}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg transition-opacity duration-500 opacity-100"
                ></iframe>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pulsante WhatsApp */}
      <div className="text-center py-10">
        <a
          href="https://api.whatsapp.com/message/46ASS33MA6S6I1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl"
        >
          Richiedi Consulenza Gratuita
        </a>
      </div>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Domande Frequenti
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-4 cursor-pointer"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openFaq === index && (
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <MyFooter />
    </>
  );
};

export default TrattamentiPage;
