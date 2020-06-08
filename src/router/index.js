import Vue from 'vue';
import VueRouter from 'vue-router';
import mainPage from '../views/MainPages.vue';
import Team from '../views/Team.vue';
import secondPage from '../views/SecondPage.vue';

Vue.use(VueRouter);

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
	{
		path: '/',
		name: 'mainPage',
		component: mainPage,
	},
	{
		path: '/team',
		name: 'Team',
		component: Team,
	},

	{
		path: '/secondPage',
		name: 'secondPage',
		component: secondPage,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
