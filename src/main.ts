/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './input.css'
import App from './App.vue'
import router from './router'
import i18nMessages from '../i18n/en.json';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages:i18nMessages
  });

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
