import React from "react";
import HeroSocials from "./HeroSocials";
import HeroVideo from "../../../../assets/heroVideo.mp4";
import "./hero.css";

import "../../../../i18nextConf";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <div id="hero" className="container hero hero__container">
      <video playsInline autoPlay muted loop id="hero__video">
        <source src={HeroVideo} />
      </video>
      <h1>{t("heroTitle")}</h1>

      <h2 className="text-light">{t("heroSubtitle")}</h2>

      <HeroSocials />
      <a href="#footer" className="scroll__down">
        {t("heroScroll")}
      </a>
    </div>
  );
}

export default Hero;
