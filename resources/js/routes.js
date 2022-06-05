import Home from "./components/home.vue";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
];

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;