import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import year80s from '../views/80s.vue'
import y1987home from '../views/y1987home.vue'
import y1987joke from '../views/y1987joke.vue'
import y1987clip from '../views/y1987clip.vue'
import y1987fact from '../views/y1987fact.vue'
import y1989home from '../views/y1989home.vue'
import y1989clip from '../views/y1989clip.vue'
import y1989fact from '../views/y1989fact.vue'
import year90s from '../views/90s.vue'
import y1992home from '../views/y1992home.vue'
import y1992artist1 from '../views/y1992artist1.vue'
import y1992clip from '../views/y1992clip.vue'
import y1994home from '../views/y1994home.vue'
import y1994fact from '../views/y1994fact.vue'
import y1994clip from '../views/y1994clip.vue'
import yearlate90s from '../views/late90s.vue'
import y1999home from '../views/y1999home.vue'
import y1999context1 from '../views/y1999context1.vue'
import y1999context2 from '../views/y1999context2.vue'
import y1999clip from '../views/y1999clip.vue'
import year2000s from '../views/2000s.vue'
import y2004home from '../views/y2004home.vue'
import y2004fact from '../views/y2004fact.vue'
import y2004clip from '../views/y2004clip.vue'
import y2004fact2 from '../views/y2004fact2.vue'
import y2008home from '../views/y2008home.vue'
import y2008fact from '../views/y2008fact.vue'
import y2008clip from '../views/y2008clip.vue'
import y2008fact2 from '../views/y2008fact2.vue'
import y2010s from '../views/2010s.vue'
import y2016home from '../views/y2016home.vue'
import y2016fact from '../views/y2016fact.vue'
import y2016clip from '../views/y2016clip.vue'
import '../font/style.scss'



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
    path: '/1987home',
    name: 'y1987home',
    component: y1987home
  },
  {
    path: '/1987joke',
    name: '1987joke',
    component: y1987joke 
  },
  {
    path: '/1987clip',
    name: '1987clip',
    component: y1987clip
  },
  {
    path: '/1987fact',
    name: '1987fact',
    component: y1987fact 
  },
  {
    path: '/1989home',
    name: '1989home',
    component: y1989home 
  },
  {
    path: '/1989clip',
    name: '1989clip',
    component: y1989clip
  },
  {
    path: '/1989fact',
    name: '1989fact',
    component: y1989fact
  },
  {
    path: '/90s',
    name: '90s',
    component: year90s
  },
  {
    path: '/1992home',
    name: '1992home',
    component: y1992home
  },
  {
    path: '/1992artist1',
    name: '1992artist1',
    component: y1992artist1
  },
  {
    path: '/1992clip',
    name: '1992clip',
    component: y1992clip
  },
  {
    path: '/1994home',
    name: '1994home',
    component: y1994home
  },
  {
    path: '/1994fact',
    name: '1994fact',
    component: y1994fact
  },
  {
    path: '/1994clip',
    name: '1994clip',
    component: y1994clip
  },
  {
    path: '/late90s',
    name: 'late90s',
    component: yearlate90s
  },
  {
    path: '/1999home',
    name: '1999home',
    component: y1999home
  },
  {
    path: '/1999context1',
    name: '1999context1',
    component: y1999context1
  },
  {
    path: '/1999context2',
    name: '1999context2',
    component: y1999context2
  },
  {
    path: '/1999clip',
    name: '1999clip',
    component: y1999clip
  },
  {
    path: '/2000s',
    name: '2000s',
    component: year2000s
  },
  {
    path: '/2004home',
    name: '2004home',
    component: y2004home
  },
  {
    path: '/2004fact',
    name: '2004fact',
    component: y2004fact
  },
  {
    path: '/2004clip',
    name: '2004clip',
    component: y2004clip
  },
  {
    path: '/2004fact2',
    name: '2004fact2',
    component: y2004fact2
  },
  {
    path: '/2008home',
    name: '2008home',
    component: y2008home
  },
  {
    path: '/2008fact',
    name: '2008fact',
    component: y2008fact
  },
  {
    path: '/2008clip',
    name: '2008clip',
    component: y2008clip
  },
  {
    path: '/2008fact2',
    name: '2008fact2',
    component: y2008fact2
  },
  {
    path: '/2010s',
    name: '2010s',
    component: y2010s
  },
  {
    path: '/2016home',
    name: '2016home',
    component: y2016home
  },
  {
    path: '/2016fact',
    name: '2016fact',
    component: y2016fact
  },
  {
    path: '/2016clip',
    name: '2016clip',
    component: y2016clip
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
