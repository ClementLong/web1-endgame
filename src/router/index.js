import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import connexion from "../views/connexion.vue";
import karanga from "../views/karanga.vue";

Vue.use(VueRouter);

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/connexion",
    name: "connexion",
    component: connexion,
  },
  {
    path: "/karanga",
    name: "karanga",
    component: karanga,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
