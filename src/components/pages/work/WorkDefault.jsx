import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../home/footer/Footer";

import i18n from "../../../i18nextConf";
import { useTranslation } from "react-i18next";

function WorkDefault() {
  const { t } = useTranslation();

  return (
    <div className="work__container">
      <div className="default">
        <div className="work__grid">
          {i18n.t("works", { returnObjects: true }).map((work) => {
            return (
              <div className="work__items" id={work.id}>
                <NavLink to={work.id}>
                  <div className="default-card" key={work.name}>
                    <div className="default-card-image">
                      <img alt="" src={work.slideImage} />
                    </div>
                    <div className="default-card-info">
                      <h2>{work.shortTitle}</h2>
                      <p>{work.year}</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default WorkDefault;
