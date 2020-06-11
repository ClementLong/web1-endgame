import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import year80s from '../views/80s.vue'
import y1987 from '../views/y1987.vue'
import y1987joke from '../views/y1987joke.vue'


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
    path: '/80s',
    name: '80s',
    component: year80s
  },
  {
    path: '/1987',
    name: 'y1987',
    component: y1987
  },
  {
    path: '/1987joke',
    name: '1987joke',
    component: y1987joke 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
