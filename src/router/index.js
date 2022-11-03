import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Search from "../views/Search.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/search/:coin",
    name: "search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
