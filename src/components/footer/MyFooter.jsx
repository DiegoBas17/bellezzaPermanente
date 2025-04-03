import React from "react";
import Logo0 from "../../assets/logo0.png";

const MyFooter = () => {
  return (
    <footer className="bg-black text-white py-12 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonna sinistra: Contatti */}
          <div className="space-y-4 text-center md:text-left md:mx-10">
            <h3 className="text-xl font-bold">Contatti</h3>
            <p>
              <strong>Telefono:</strong> +39 331 531 2635
            </p>
            <p>
              <strong>Indirizzo:</strong> Via Pietro Cardella, 20, 00133 Roma
              (RM)
            </p>
            <p>
              <strong>Email:</strong> ericabianchini4@gmail.com
            </p>
            <p>
              <strong>PEC:</strong> bianchinierica@pec.it
            </p>
            <p>
              <strong>P. IVA:</strong> IT15514741006
            </p>
          </div>

          {/* Colonna centrale: Logo e Orari */}
          <div className="text-center">
            <img src={Logo0} alt="Logo" className="h-24 mx-auto" />
            <div>
              <h4 className="text-lg font-semibold">Orari di apertura*</h4>
              <p>Lunedì - Sabato: 11:00 - 18:00</p>
              <p>Domenica: su prenotazione</p>
              <p className="text-xs">*L'orario puo variare</p>
            </div>
          </div>

          {/* Colonna destra: Mappa */}
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
      </div>
    </footer>
  );
};

export default MyFooter;
