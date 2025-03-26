import React, { useState } from "react";
import { Mail, Phone, MapPin, BookOpen } from "lucide-react"; // Importiamo icone
import MyTopBar from "../navbar/MyTopBar";
import EricaPhoto from "../../assets/ericaBianchini1.png";

const ContattiPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <MyTopBar />

      <section className="bg-pink-100 py-12 pt-[88px]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Contatti</h2>

          {/* Modulo di contatto e WhatsApp affiancati su desktop */}
          <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Form */}
            <div className="md:w-1/2 w-full">
              <h3 className="text-3xl font-semibold mb-6">
                Inviaci un messaggio
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-lg">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="messaggio" className="block text-lg">
                    Messaggio
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 px-6 rounded-lg"
                >
                  Invia Messaggio
                </button>
              </form>
            </div>

            {/* WhatsApp + Foto */}
            <div className="flex flex-col items-center m-auto">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
                <img
                  src={EricaPhoto}
                  alt="Erica Bianchini"
                  className="w-full h-full object-contain"
                />
              </div>
              <a
                href="https://api.whatsapp.com/message/46ASS33MA6S6I1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold"
              >
                Contatta su WhatsApp
              </a>
            </div>
          </div>

          {/* Mappa */}
          <div className="mt-12">
            <h3 className="text-3xl font-semibold mb-6">Dove ci trovi</h3>
            <div className="relative w-full h-64">
              <iframe
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.3277911802497!2d12.644075400000002!3d41.864293499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f7de545e82135%3A0x50a5e0f015f7ec43!2sErica%20Bianchini%20Bellezza%20Permanente!5e0!3m2!1sit!2sit!4v1742813725441!5m2!1sit!2sit"
                title="Mappa"
                style={{ border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>

          {/* Informazioni di contatto migliorate */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto text-left">
            <h3 className="text-3xl font-semibold mb-4 text-center">
              Informazioni di Contatto
            </h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-3">
                <MapPin className="text-pink-500" size={24} />
                <span>Indirizzo: Via Vattelapesca</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-pink-500" size={24} />
                <span>Email: info@example.com</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-pink-500" size={24} />
                <span>Telefono: +39 123 456 789</span>
              </p>
              <p className="flex items-center gap-3">
                <BookOpen className="text-pink-500" size={24} />
                <span>Info corsi: corsi@example.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContattiPage;
