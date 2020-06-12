import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Team from '../views/Team.vue';
import Intro from '../views/Intro.vue';
import Chapitre0 from "@/views/Chapitre0.vue";
import Chapitre1 from "@/views/Chapitre1.vue";
import Chapitre2 from "@/views/Chapitre2.vue";
import Chapitre3 from "@/views/Chapitre3.vue";
import Chapitre4 from "@/views/Chapitre4.vue";
import Chapitre5 from "@/views/Chapitre5.vue";
import Chapitre6 from "@/views/Chapitre6.vue";
import Assos from "@/views/Assos.vue";

Vue.use(VueRouter)

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },{
    path: 'chap0',
    name: 'Chapitre0',
    component: Chapitre0
  },
  {
    path: '/chap1',
    name: 'Chapitre1',
    component: Chapitre1
  },
  {
    path: '/chap2',
    name: 'Chapitre2',
    component: Chapitre2
  },
  {
    path: '/chap3',
    name: 'Chapitre3',
    component: Chapitre3
  },
  {
    path: '/chap4',
    name: 'Chapitre4',
    component: Chapitre4
  },
  {
    path: '/chap5',
    name: 'Chapitre5',
    component: Chapitre5
  },
  {
    path: '/chap6',
    name: 'Chapitre6',
    component: Chapitre6
  },
  {
    path: '/assos',
    name: 'Assos',
    component: Assos
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
