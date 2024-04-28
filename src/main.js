import { createApp } from "vue";
import App from "./App.vue";
import en from "../src/locale/en.json";
import es from "../src/locale/es.json";
import ptBr from "../src/locale/pt-br.json";

import "./style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import i18nPlugin from "./plugins/i18n";

const app = createApp(App);
app.use(i18nPlugin, {
  en: en,
  es: es,
  ptBr: ptBr,
});

app.mount("#app");
