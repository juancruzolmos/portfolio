import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./homecontact.css";
import { Link } from "react-router-dom";

import "../../../../i18nextConf";
import { useTranslation } from "react-i18next";

function HomeContact() {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const success = () =>
      toast.success("I'll reach you soon!", {
        position: toast.POSITION.TOP_CENTER,
      });

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
    <section id="contacto">
      <div className="container contacto__container">
        <h1>{t("homeContactTitle")}</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="email"
            placeholder={t("homeContactPlaceHolder")}
            required
          />

          <button type="submit" className="btn">
            {t("homeContactButton")}
          </button>
          <ToastContainer theme="dark" />
        </form>
        <Link className="contacto__long" to={"/contact"}>
          <h6>{t("homeContactLonger")}</h6>
        </Link>
      </div>
    </section>
  );
}

export default HomeContact;
