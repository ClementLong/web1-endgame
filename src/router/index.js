import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Intro from '../views/Intro.vue'
import Chapitre1 from "@/views/Chapitre1.vue";

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
    path: '/chap1',
    name: 'Chapitre1',
    component: Chapitre1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
