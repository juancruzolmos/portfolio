import React from "react";
import { Link } from "react-router-dom";
import Footer from "./home/footer/Footer";
import "./css/aboutme.css";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import i18n from "../../i18nextConf";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";

import me from "./aboutme/me.png";
import me01 from "./aboutme/me01.JPG";

function AboutMe() {
  const { t } = useTranslation();
  const downloadFile = async () => {
    fetch(t("aboutDownLink")).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Curriculum - Juan Cruz Olmos";
        alink.click();
      });
    });
  };

  let experiences = i18n.t("experiences", { returnObjects: true });

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };
  return (
    <div>
      <div className="aboutme__container">
        <div className="headline">
          <img src={me} alt="" />
          <div className="text">
            <h1 className="emphasis">{t("aboutTitle")}</h1>
            <h2>
              {t("aboutSub1")}
              <span className="underline">{t("aboutSubItalic")}</span>
              {t("aboutSub2")}
            </h2>
          </div>
        </div>
        <div className="secondSection">
          <h4>{t("aboutPhrase1")}</h4>
          <h4>
            {t("aboutPhrase2")}
            <span className="italic">{t("aboutPhraseItalic")}</span>
          </h4>
          <h4>{t("aboutPhrase3")}</h4>
        </div>
        <div className="thirdSection">
          <h2 className="emphasis">{t("aboutQuestion")}</h2>
          <div className="main-experience-slider">
            <BsArrowLeftCircle
              size={40}
              className="slider-icon left"
              onMouseDown={slideLeft}
            />
            <div className="workCard__container" id="slider">
              {experiences.map((experience) => {
                return (
                  <div className="work__card" key={experience.company}>
                    <div className="work__info">
                      <h4 className="year">{experience.year}</h4>
                      <h4 className="company">{experience.company}</h4>
                      <h4 className="role">{experience.role}</h4>
                    </div>

                    <div className="work__description">
                      <p>{experience.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <BsArrowRightCircle
              size={40}
              className="slider-icon right"
              onClick={slideRight}
            />
          </div>
        </div>
        <div className="download">
          <h2 className="emphasis">{t("aboutDownQuestion")}</h2>
          <button onClick={downloadFile} className="btn-alt">
            {t("aboutDownButton")}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
