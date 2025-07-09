import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/917488358204" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[50px] right-5 z-50"
    >
      <div className="bg-green-600 hover:bg-green-800 text-white p-3 rounded-full shadow-lg transition-all duration-300">
        <FaWhatsapp
      className="transition-all duration-300 group-hover:scale-125"
      size={30}
    />
      </div>
    </a>
  );
};

export default WhatsApp;
