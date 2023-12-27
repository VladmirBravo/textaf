import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import styles from "@/components/Whatsaap/styles.module.scss";
import React from "react";

const BotaoWhatsApp = () => {
  const handleClick = () => {
    // Número de telefone ou link para o WhatsApp
    const numeroTelefone = "+244934274687";
    const linkWhatsApp = `https://wa.me/${numeroTelefone}`;

    window.open(linkWhatsApp, "_blank");
  };

  const cor = '#E0CD67' //#ffd700

  return (
    <>
      <div className={styles.iconesSociais}>
        <a>
          <CiYoutube color={cor} size={40} />
        </a>
        <a>
          <FaWhatsapp onClick={handleClick} color={cor} size={37} />
        </a>
        <a>
          <CiInstagram color={cor} size={40} />
        </a>
        <a>
          <CiLinkedin  color={cor} size={40} />
        </a>
      </div>
    </>
  );
};

export default BotaoWhatsApp;
