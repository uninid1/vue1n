import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'ru',
  messages: {
    ru: {
      welcome: 'Добро пожаловать в наше приложение. Пожалуйста, войдите.',
      login: 'Войти'
    }
  }
});

createApp(App).use(i18n).mount('#app');