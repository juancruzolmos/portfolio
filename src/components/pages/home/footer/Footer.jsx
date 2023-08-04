import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./footer.css";

import i18n from "../../../../i18nextConf";
import { useTranslation } from "react-i18next";

import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin, AiOutlineBehanceSquare } from "react-icons/ai";

function Footer() {
  const { t } = useTranslation();

  let works = i18n.t("works", { returnObjects: true });

  // let works = getWorks();

  const successId = "comingSoon";

  const success = () =>
    toast.success("I'll reach you soon!", {
      toastId: successId,
      position: toast.POSITION.TOP_CENTER,
    });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i8fzewd",
        "template_xxyu2pn",
        form.current,
        "C9n3Gfl6pCq4xrZE9"
      )
      .then(
        (result) => {
          console.log(result.text);
          success();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <footer id="footer">
      <button className="footer__logo">
        <h2 href="#">Juan Cruz Olmos</h2>
      </button>

      <ul className="navigate">
        <h2>{t("footNav")}</h2>
        <ul>
          <Link to={"/work"}>{t("footWork")}</Link>
          <li>
            {works.map((work, index) => {
              return (
                //EL LINK SE CAMBIA DESDE EL INDEX.JS
                <Link to={"/work/" + work.id}>
                  <a href="#" key={index}>
                    <p>{work.shortTitle}</p>
                  </a>
                </Link>
              );
            })}
          </li>
        </ul>
        <Link to={"/AboutMe"}>{t("footAboutMe")}</Link>
        <h3 className="comingsoon">Blog</h3>
      </ul>
      <div className="footer__news">
        <h2>{t("footContact")}</h2>
        <h5>{t("footSubs")}</h5>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="email"
            placeholder={t("footPlaceHolder")}
            required
          />

          <button type="submit" className="btn">
            {t("footSubsButton")}
          </button>
        </form>
      </div>

      <div className="footer__contact">
        <div className="footer__text">
          <h2>
            {t("footPersonality")}
            <br />+<br />
            {t("footBrand")}
            <br />=
          </h2>
          <h2 className="perfection"> {t("footPerfection")}</h2>
        </div>

        <Link id="cta" className="btn" to={"/contact"}>
          {t("footPersonalityButton")}
        </Link>
      </div>

      <div className="footer__socials">
        <a href="https://www.instagram.com/itsmejuancruz/" target="_blank">
          <BsInstagram size={26} />
        </a>
        <a href="https://www.behance.net/juancruzolmosv" target="_blank">
          <AiOutlineBehanceSquare size={30} />
        </a>
        <a href="https://www.linkedin.com/in/juancruzolmosv/" target="_blank">
          <AiOutlineLinkedin size={30} />
        </a>
      </div>
      <h5 className="footer__rights">{t("footCopyright")}</h5>
      <ToastContainer theme="dark" />
    </footer>
  );
}

export default Footer;
