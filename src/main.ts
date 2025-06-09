import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue';
import router from './router'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import Particles from "vue3-particles"
import en from '../i18n/locales/en.json'
import pl from '../i18n/locales/pl.json'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
    },
});
const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        pl
    }
});
const app = createApp(App)
app.use(Particles);
app.use(i18n);
app.use(vuetify);
app.use(router);
app.mount('#app');
