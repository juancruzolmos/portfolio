import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .use(LanguageDetector) // detect user language
  .use(HttpApi) // load translations using http (default public/assets/locals/en/translations)
  .init({
    supportedLngs: ["en", "es", "sl"],

    fallbackLng: "en", // fallback language is english.
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locals/{{lng}}/translation.json",
    },
  });

export default i18n;
