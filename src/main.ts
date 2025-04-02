import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./lib/i18n";
import vuetify from "./lib/vuetify";

const app = createApp(App);
app.use(vuetify);
app.use(i18n);
app.mount("#app");
