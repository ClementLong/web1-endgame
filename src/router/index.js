import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import Welcome from "../views/welcome.vue";
import Wero from "../views/wero.vue";
import Karanga from "../views/haranga.vue";
import Hongi from "../views/hongi.vue";
import Haka from "../views/haka.vue";
import Hangi from "../views/hangi.vue";

Vue.use(VueRouter);

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
  {
    path: "/welcome",
    name: "Welcome",
    component: welcome
  },
  {
    path: "/wero",
    name: "Wero",
    component: wero
  },
  {
    path: "/karanga",
    name: "Karanga",
    component: karanga
  },
  {
    path: "/hongi",
    name: "Hongi",
    component: hongi
  },
  {
    path: "/haka",
    name: "Haka",
    component: haka
  },
  {
    path: "/hangi",
    name: "Hangi",
    component: hangi
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
