import Vue from 'vue'
import VueRouter from 'vue-router'
import Team from '../views/Team.vue'
import index from '../views/index.vue'

Vue.use(VueRouter)

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/index',
    name: 'index',
    component: index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
