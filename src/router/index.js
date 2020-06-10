import Vue from 'vue';
import VueRouter from 'vue-router';
import mainPage from '../views/MainPages.vue';
import Team from '../views/Team.vue';
import secondPage from '../views/SecondPage.vue';
import clown from '../views/species/PoissonClown.vue';
import dauphin from '../views/species/dauphin.vue';

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
	{
		path: '/clown',
		name: 'clown',
		component: clown,
	},
	{
		path: '/dauphin',
		name: 'dauphin',
		component: dauphin,
	},
];
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
export default router;
