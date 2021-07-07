import Vue from 'vue';
import VueRouter from 'vue-router';
import mainPage from '@/views/MainPages.vue';
import secondPage from '@/views/SecondPage.vue';
import mammiferes from '@/views/familles/Mammiferes.vue';
import template from '@/views/species/template.vue';

Vue.use(VueRouter);

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
		path: '/mammiferes/:deep_min/:deep_max',
		name: 'mammiferes',
		component: mammiferes,
	},
		{
		path: '/template/:id',
		name: 'template',
		component: template,
		}
	];
	
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
export default router;