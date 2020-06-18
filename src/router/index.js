import Vue from 'vue';
import data from '@/views/data.vue';
import VueRouter from 'vue-router';
import mainPage from '@/views/MainPages.vue';
import secondPage from '@/views/SecondPage.vue';
import mammiferes from '@/views/familles/Mammiferes.vue';
import amphitretusPelagicus from '@/views/species/amphitretusPelagicus.vue';
import anoplogaster from '@/views/species/anoplogaster.vue';
import baleineBosse from '@/views/species/baleineBosse.vue';
import baleinedecuvier from '@/views/species/baleinedecuvier.vue';
import bathynomes from '@/views/species/bathynomes.vue';
import bathypteriosLongipes from '@/views/species/bathypteriosLongipes.vue';
import calamarLuciole from '@/views/species/calamarLuciole.vue';
import combJelly from '@/views/species/combJelly.vue';
import dauphin from '@/views/species/dauphin.vue';
import espadon from '@/views/species/espadon.vue';
import grenadiers from '@/views/species/grenadiers.vue';
import grimpoteuthis from '@/views/species/grimpoteuthis.vue';
import hadalAmphipod from '@/views/species/hadalAmphipod.vue';
import ophidiidae from '@/views/species/ophidiidae.vue';
import ophiures from '@/views/species/ophiures.vue';
import orque from '@/views/species/orque.vue';
import papilligera from '@/views/species/papilligera.vue';
import phoque from '@/views/species/phoque.vue';
import phytoplancton from '@/views/species/phytoplancton.vue';
import pieuvreGeante from '@/views/species/pieuvreGeante.vue';
import clown from '@/views/species/PoissonClown.vue';
import poissonSansVisage from '@/views/species/poissonSansVisage.vue';
import polyplacophores from '@/views/species/polyplacophores.vue';
import pseudoliparisAmblystomopsis from '@/views/species/pseudoliparisAmblystomopsis.vue';
import requinBlanc from '@/views/species/requinBlanc.vue';
import requinMako from '@/views/species/requinMako.vue';
import requinsGrandGueule from '@/views/species/requinsGrandGueule.vue';
import saintJacques from '@/views/species/saintJacques.vue';
import salpeMaxima from '@/views/species/salpeMaxima.vue';
import salpeThetys from '@/views/species/salpeThetys.vue';
import saumon from '@/views/species/saumon.vue';
import scyliorhinus from '@/views/species/scyliorhinus.vue';
import squaleletFeroce from '@/views/species/squaleletFeroce.vue';
import tortueLuth from '@/views/species/tortueLuth.vue';
import tortueVerte from '@/views/species/tortueVerte.vue';
import vampireAbysses from '@/views/species/vampireAbysses.vue';
import zooplancton from '@/views/species/zooplancton.vue';

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
		path: '/espadon',
		name: 'espadon',
		component: espadon,
	},
	{
		path: '/grenadiers',
		name: 'grenadiers',
		component: grenadiers,
	},
	{
		path: '/grimpoteuthis',
		name: 'grimpoteuthis',
		component: grimpoteuthis,
	},
	{
		path: '/hadalAmphipod',
		name: 'hadalAmphipod',
		component: hadalAmphipod,
	},
	{
		path: '/ophidiidae',
		name: 'ophidiidae',
		component: ophidiidae,
	},
	{
		path: '/ophiures',
		name: 'ophiures',
		component: ophiures,
	},
	{
		path: '/orque',
		name: 'orque',
		component: orque,
	},
	{
		path: '/papilligera',
		name: 'papilligera',
		component: papilligera,
	},
	{
		path: '/phoque',
		name: 'phoque',
		component: phoque,
	},
	{
		path: '/phytoplancton',
		name: 'phytoplancton',
		component: phytoplancton,
	},
	{
		path: '/pieuvreGeante',
		name: 'pieuvreGeante',
		component: pieuvreGeante,
	},
	{
		path: '/clown',
		name: 'clown',
		component: clown,
	},
	{
		path: '/poissonSansVisage',
		name: 'poissonSansVisage',
		component: poissonSansVisage,
	},
	{
		path: '/polyplacophores',
		name: 'polyplacophores',
		component: polyplacophores,
	},
	{
		path: '/pseudoliparisAmblystomopsis',
		name: 'pseudoliparisAmblystomopsis',
		component: pseudoliparisAmblystomopsis,
	},
	{
		path: '/requinBlanc',
		name: 'requinBlanc',
		component: requinBlanc,
	},
	{
		path: '/requinMako',
		name: 'requinMako',
		component: requinMako,
	},
	{
		path: '/requinsGrandGueule',
		name: 'requinsGrandGueule',
		component: requinsGrandGueule,
	},
	{
		path: '/saintJacques',
		name: 'saintJacques',
		component: saintJacques,
	},
	{
		path: '/salpeMaxima',
		name: 'salpeMaxima',
		component: salpeMaxima,
	},
	{
		path: '/salpeThetys',
		name: 'salpeThetys',
		component: salpeThetys,
	},
	{
		path: '/saumon',
		name: 'saumon',
		component: saumon,
	},
	{
		path: '/scyliorhinus',
		name: 'scyliorhinus',
		component: scyliorhinus,
	},
	{
		path: '/squaleletFeroce',
		name: 'squaleletFeroce',
		component: squaleletFeroce,
	},
	{
		path: '/tortueLuth',
		name: 'tortueLuth',
		component: tortueLuth,
	},
	{
		path: '/tortueVerte',
		name: 'tortueVerte',
		component: tortueVerte,
	},
	{
		path: '/vampireAbysses',
		name: 'vampireAbysses',
		component: vampireAbysses,
	},
	{
		path: '/zooplancton',
		name: 'zooplancton',
		component: zooplancton,
	},
	{
		path: '/data/:deep_min/:deep_max',
		name: 'data',
		component: data,
	},
];
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
export default router;
