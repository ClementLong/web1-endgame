import Vue from 'vue';
import VueRouter from 'vue-router';
import mainPage from '@/views/MainPages.vue';
import secondPage from '@/views/SecondPage.vue';
import amphitretusPelagicus from '@/views/species/amphitretusPelagicus.vue';
import anoplogaster from '@/views/species/anoplogaster.vue';
import baleineBosse from '@/views/species/baleineBosse.vue';
import baleinedecuvier from '@/views/species/baleinedecuvier.vue';
import bathynomes from '@/views/species/bathynomes.vue';
import bathypteriosLongipes from '@/views/species/bathypteriosLongipes.vue';
import calamarLuciole from '@/views/species/calamarLuciole.vue';
import combJelly from '@/views/species/combJelly.vue';
import dauphin from '@/views/species/dauphin.vue';
// import anoplogaster from '@/views/species/anoplogaster.vue';
// import anoplogaster from '@/views/species/anoplogaster.vue';

import clown from '@/views/species/PoissonClown.vue';
import mammiferes from '@/views/familles/Mammiferes.vue';
import tortueLuth from '@/views/species/tortueLuth.vue';
import orque from '@/views/species/orque.vue';
import saumon from '@/views/species/saumon.vue';
import requinMako from '@/views/species/requinMako.vue';
import baleindecuvier from '@/views/species/baleinedecuvier.vue';
import tortueVerte from '@/views/species/tortueVerte.vue';
import phytoplancton from '@/views/species/phytoplancton.vue';
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
		path: '/secondPage',
		name: 'secondPage',
		component: secondPage,
	},
	{
		path: '/mammiferes',
		name: 'mammiferes',
		component: mammiferes,
	},
	{
		path: '/amphitretusPelagicus',
		name: 'amphitretusPelagicus',
		component: amphitretusPelagicus,
	},
	{
		path: '/anoplogaster',
		name: 'anoplogaster',
		component: anoplogaster,
	},
	{
		path: '/baleineBosse',
		name: 'baleineBosse',
		component: baleineBosse,
	},
	{
		path: '/baleinedecuvier',
		name: 'baleinedecuvier',
		component: baleinedecuvier,
	},
	{
		path: '/bathynomes',
		name: 'bathynomes',
		component: bathynomes,
	},
	{
		path: '/bathypteriosLongipes',
		name: 'bathypteriosLongipes',
		component: bathypteriosLongipes,
	},
	{
		path: '/calamarLuciole',
		name: 'calamarLuciole',
		component: calamarLuciole,
	},
	{
		path: '/combJelly',
		name: 'combJelly',
		component: combJelly,
	},
	{
		path: '/dauphin',
		name: 'dauphin',
		component: dauphin,
	},
	{
		path: '/anoplogaster',
		name: 'anoplogaster',
		component: anoplogaster,
	},
	{
		path: '/anoplogaster',
		name: 'anoplogaster',
		component: anoplogaster,
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
	{
		path: '/phytoplancton',
		name: 'phytoplancton',
		component: phytoplancton,
	},
];
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
export default router;
