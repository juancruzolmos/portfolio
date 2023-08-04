import React from "react";
import Footer from "../home/footer/Footer";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

import i18n from "../../../i18nextConf.js";
import { useTranslation } from "react-i18next";

function WorkSpecific() {
  const { t } = useTranslation();

  let params = useParams();

  let works = i18n.t("works", { returnObjects: true });

  function getWork(id) {
    return works.find((work) => work.id === id);
  }
  let work = getWork(params.workId);

  const workImages = work.imagesExtra;

  return (
    <div className="work__container">
      <div className="specific" id={work.id}>
        <Link to={"/work"}>
          <div className="btn backHome">
            <IoIosArrowRoundBack />
            {t("workButton")}
          </div>
        </Link>

        <div className="work__info">
          <h5>{t("workTitle")}</h5>
          <h2 className="work__title">{work.title}</h2>
          <h5>{t("workYear")}</h5>
          <h6 className="work__year">{work.year}</h6>
          <p className="work__desc work__text">{work.description1}</p>
          <img src={work.imagesExtra[0]} alt="" className="work__image" />
          <p className="work__desc work__text">{work.description2}</p>
          <p className="work__desc work__text">{work.description3}</p>
          <p className="work__desc work__text">{work.description4}</p>
          <div className="work__image">
            <img src={work.imagesExtra[1]} alt="" />
          </div>
          <p className="work__desc work__text">{work.description5}</p>
          <div className="work__image">
            <img src={work.imagesExtra[2]} alt="" />
          </div>
          <p className="work__desc work__text">{work.description6}</p>
          <span className="work__image">
            <img src={work.imagesExtra[3]} alt="" />
            <img src={work.imagesExtra[4]} alt="" />
            <img src={work.imagesExtra[5]} alt="" />
            <img src={work.imagesExtra[6]} alt="" />
            <img src={work.imagesExtra[7]} alt="" />
            <img src={work.imagesExtra[8]} alt="" />
            <img src={work.imagesExtra[9]} alt="" />
            <img src={work.imagesExtra[10]} alt="" />
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WorkSpecific;
