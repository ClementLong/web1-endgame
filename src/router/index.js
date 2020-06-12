import Vue from 'vue';
import VueRouter from 'vue-router';
import mainPage from '@/views/MainPages.vue';
import Team from '@/views/Team.vue';
import secondPage from '@/views/SecondPage.vue';
import clown from '@/views/species/PoissonClown.vue';
import dauphin from '@/views/species/dauphin.vue';
import mammiferes from '@/views/familles/Mammiferes.vue';
import tortueLuth from '@/views/species/tortueLuth.vue';
import orque from '@/views/species/orque.vue';
import saumon from '@/views/species/saumon.vue';
import requinMako from '@/views/species/requinMako.vue';
import baleindecuvier from '@/views/species/baleinedecuvier.vue';
import tortueVerte from '@/views/species/tortueVerte.vue';
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
	{
		path: '/mammiferes',
		name: 'mammiferes',
		component: mammiferes,
	},
	{
		path: '/tortueLuth',
		name: 'tortueLuth',
		component: tortueLuth,
	},
	{
		path: '/orque',
		name: 'orque',
		component: orque,
	},
	{
		path: '/saumon',
		name: 'saumon',
		component: saumon,
	},
	{
		path: '/requinMako',
		name: 'requinMako',
		component: requinMako,
	},
	{
		path: '/baleindecuvier',
		name: 'baleinedcuvier',
		component: baleindecuvier,
	},
	{
		path: '/tortueVerte',
		name: 'tortueVerte',
		component: tortueVerte,
	},
];
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
export default router;
