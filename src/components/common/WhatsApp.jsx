import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/917488358204" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[50px] right-8 z-50"
    >
      <div className="bg-green-900 hover:bg-green-900 text-white p-3 rounded-full shadow-lg transition-all duration-300">
        <FaWhatsapp size={30} />
      </div>
    </a>
  );
};

export default WhatsApp;
