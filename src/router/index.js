import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Results from "../views/ResultsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/results/:slug",
      name: "results",
      component: Results,
    },
  ],
});

export default router;
