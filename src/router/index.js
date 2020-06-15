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
import ArticlePicture1 from "@/views/ArticlePicture1.vue";
import ArticlePicture2 from "@/views/ArticlePicture2.vue";
import ArticlePicture4 from "@/views/ArticlePicture4.vue";
import ArticlePicture5 from "@/views/ArticlePicture5.vue";
import Quizz1 from "@/views/Quizz1.vue";
import Quizz2 from "@/views/Quizz2.vue";
import Quizz3 from "@/views/Quizz3.vue";
import Quizz4 from "@/views/Quizz4.vue";
import Quizz5 from "@/views/Quizz5.vue";
import Assos from "@/views/Assos.vue";

Vue.use(VueRouter)

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
// blabla
const routes = [{
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
  }, {
    path: '/chap0',
    name: 'Chapitre0',
    component: Chapitre0
  },
  {
    path: '/chap1',
    name: 'Chapitre1',
    component: Chapitre1,
    children: [{

      path: 'article',
      name: 'Chapitre1Article1',
      component: ArticlePicture1
      },{

      path: 'quizz',
      name: 'Chapitre1Quizz1',
      component: Quizz1
      }
    ]
  },
  {
    path: '/chap2',
    name: 'Chapitre2',
    component: Chapitre2,
    children: [{

      path: 'article',
      name: 'Chapitre2Article2',
      component: ArticlePicture2
      },{

      path: 'quizz',
      name: 'Chapitre2Quizz2',
      component: Quizz2
      }
    ]
  },
  {
    path: '/chap3',
    name: 'Chapitre3',
    component: Chapitre3,
    children: [{

      path: 'quizz',
      name: 'Chapitre3Quizz3',
      component: Quizz3
      }
    ]
  },
  {
    path: '/chap4',
    name: 'Chapitre4',
    component: Chapitre4,
    children: [{

      path: 'article',
      name: 'Chapitre4Article4',
      component: ArticlePicture4
      },{

      path: 'quizz',
      name: 'Chapitre4Quizz4',
      component: Quizz4
      }
    ]
  },
  {
    path: '/chap5',
    name: 'Chapitre5',
    component: Chapitre5,
    children: [{

      path: 'article',
      name: 'Chapitre5Article5',
      component: ArticlePicture5
      },{

      path: 'quizz',
      name: 'Chapitre5Quizz5',
      component: Quizz5
      }
    ]
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