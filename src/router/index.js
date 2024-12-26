import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BuyPage from "../views/BuyPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/buy",
    name: "BuyPage",
    component: BuyPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
