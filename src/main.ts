import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./lib/i18n";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './style.css'
import Tooltip from 'primevue/tooltip';


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(i18n);
app.directive('tooltip', Tooltip);
app.mount("#app");
