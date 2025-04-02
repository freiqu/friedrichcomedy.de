import { createI18n } from "vue-i18n";
import * as en from "./locales/en.json"
import * as de from "./locales/de.json"

const i18n = createI18n({
  messages: {
    en,
    de,
  },
});

export default i18n;
