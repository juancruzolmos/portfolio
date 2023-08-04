import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Footer from "./home/footer/Footer";

import "./css/contact.css";
import { MdOutlineAlternateEmail, MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../i18nextConf";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const success = () =>
      toast.success("Message sent!", {
        position: toast.POSITION.TOP_CENTER,
      });

    emailjs
      .sendForm(
        "service_i8fzewd",
        "template_mgz0boj",
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
    <div>
      <section id="contact">
        <div className="contact__title">
          <h5>{t("contactSub")}</h5>
          <h2>{t("contactTitle")}</h2>
        </div>

        <div className="container contact__container">
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder={t("contactFormName")}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("contactFormEmail")}
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder={t("contactFormMessage")}
              required
            ></textarea>
            <button type="submit" className="btn-alt">
              {t("contactFormButton")}
            </button>
            <ToastContainer theme="dark" />
          </form>

          <div className="contact__options">
            <article className="contact__option">
              <div className="info">
                <MdOutlineAlternateEmail className="contact__option-icon" />
                <div className="info-text">
                  <h4>Email</h4>
                  <h5>juancruzolmosv@gmail.com</h5>
                </div>
              </div>

              <a
                href="mailto:juancruzolmosv@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="btn"
              >
                {t("contactMailButton")}
              </a>
            </article>
            <article className="contact__option">
              <div className="info">
                <MdOutlineWhatsapp className="contact__option-icon" />
                <div className="info-text">
                  <h4>WhatsApp</h4>
                  <h5>+386 70 252 088</h5>
                </div>
              </div>
              <a
                href="https://wa.me/5493517040769?text=Hi%21%20I'm%20interested%20on%20your%20services.%20I'll%20wait%20for%20your%20answer%20"
                rel="noreferrer"
                target="_blank"
                className="btn"
              >
                {t("contactWhatsAppButton")}
              </a>
            </article>
            <article className="contact__option">
              <div className="info">
                <FaLinkedinIn className="contact__option-icon" />
                <div className="info-text">
                  <h4>LinkedIn</h4>
                  <h5>Juan Cruz Olmos</h5>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/juancruzolmosv/"
                rel="noreferrer"
                target="_blank"
                className="btn"
              >
                {t("contactLinkedInButton")}
              </a>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
