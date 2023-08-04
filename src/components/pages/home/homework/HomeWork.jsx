import React from "react";
import "./homework.css";
import WorkSlide from "./CardSlider/WorkSlide";
import WorkAnimation from "./ServicesSlider/WorkAnimation";

import "../../../../i18nextConf";
import { useTranslation } from "react-i18next";

function Work() {
  const { t } = useTranslation();

  return (
    <section id="work">
      <h2>{t("homeWorkTitle")}</h2>
      <WorkSlide />
      <WorkAnimation />
    </section>
  );
}

export default Work;
