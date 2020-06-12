import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import HomePage from "../views/HomePage.vue";
import Bienvenue from "../views/Bienvenue.vue";
import Wero from "../views/Wero.vue";
import Karanga from "../views/Karanga.vue";
import Hongi from "../views/Hongi.vue";
import haka from "../views/Haka.vue";
import Hangi from "../views/Hangi.vue";

Vue.use(VueRouter);

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/homePage",
    name: "homePage",
    component: HomePage
  },
  {
    path: "/bienvenue",
    name: "Bienvenue",
    component: Bienvenue
  },
  {
    path: "/wero",
    name: "Wero",
    component: Wero
  },
  {
    path: "/karanga",
    name: "Karanga",
    component: Karanga
  },
  {
    path: "/hongi",
    name: "Hongi",
    component: Hongi
  },
  {
    path: "/haka",
    name: "Haka",
    component: Haka
  },
  {
    path: "/hangi",
    name: "Hangi",
    component: Hangi
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
