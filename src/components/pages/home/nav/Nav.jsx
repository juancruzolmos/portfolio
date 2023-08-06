import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import "../../../../i18nextConf";
import { useTranslation } from "react-i18next";

import "flag-icon-css/css/flag-icons.min.css";
import { BsGlobe } from "react-icons/bs";

import i18next from "i18next";
import cookies from "js-cookie";

import "./nav.css";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "es",
    name: "Español",
    country_code: "ar",
  },
  {
    code: "sl",
    name: "Slovensko",
    country_code: "si",
  },
];

function Nav() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const { t } = useTranslation();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div className="nav__container">
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
          end
        >
          {t("navHome")}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/work"
        >
          {t("navWork")}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/aboutme"
          end
        >
          {t("navAboutMe")}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/contact"
          end
        >
          {t("navContact")}
        </NavLink>
        <div className="langSelector">
          <button className="selectorbtn">
            <BsGlobe />
          </button>
          <div className="language__content">
            {languages.map(({ code, name, country_code }) => (
              <button
                key={country_code}
                className={"flag"}
                onClick={() => {
                  i18next.changeLanguage(code);
                }}
              >
                <span className={`flag-icon flag-icon-${country_code}`} />
                <h3>{name}</h3>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
