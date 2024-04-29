import { createApp } from "vue";
import App from "./App.vue";
import en from "../src/locale/en.json";
import es from "../src/locale/es.json";
import ptBr from "../src/locale/pt-br.json";
import i18nPlugin from "./plugins/i18n";

import "./style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const options = {
  en: en,
  es: es,
  pt_br: ptBr,
};

export const i18n = {
  options,
  locale: "en",
  fallbackLocale: "en",
};


const app = createApp(App);

app.use(i18nPlugin, {
  options,
  i18n,
});

app.mount("#app");


