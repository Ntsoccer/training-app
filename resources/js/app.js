require('./bootstrap');

import router from "./routes";
import App from "./App.vue";
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

import { createApp } from 'vue'

createApp(App).use(VCalendar).use(router).mount('#app');
