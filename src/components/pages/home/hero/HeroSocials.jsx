import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";

function HeroSocials() {
  return (
    <div className="hero__socials">
      <a href="https://www.linkedin.com/in/juancruzolmosv/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/itsmejuancruz/" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://www.behance.net/juancruzolmosv" target="_blank">
        <ImBehance2 />
      </a>
    </div>
  );
}

export default HeroSocials;
