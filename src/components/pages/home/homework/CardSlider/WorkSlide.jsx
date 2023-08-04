import React from "react";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

import i18n from "../../../../../i18nextConf";
import { useTranslation } from "react-i18next";

function WorkSlide() {
  const { t } = useTranslation();
  let works = i18n.t("works", { returnObjects: true });

  // FUNCIONES PARA QUE SE MUEVA CON LOS BOTONES
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div className="main-slider-container">
      <BsArrowLeftCircle
        size={40}
        className="slider-icon left"
        onMouseDown={slideLeft}
      />

      <div id="slider">
        {works.map((work) => {
          return (
            <Link to={`/work/${work.id}`}>
              <div className="slider-card" key={work.name}>
                <div className="slider-card-image">
                  <img alt="" src={work.slideImage} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <BsArrowRightCircle
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
}
export default WorkSlide;
