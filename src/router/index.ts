import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	// COUNTRIES
	{
		path: '/',
		name: 'Countries List',
		component: () => import(/* webpackChunkName: "countryList" */ '@/presentations/countries/views/List.vue'),
	},
	{
		path: '/about',
		name: 'About countries',
		component: () => import(/* webpackChunkName: "countryAbout" */ '@/presentations/countries/views/About.vue'),
	},
	{
		path: '/:countryCode',
		name: 'Country Detail',
		component: () => import(/* webpackChunkName: "countryDetail" */ '@/presentations/countries/views/CountryDetail.vue'),
	},

	// NOT FOUND
	{
		path: '/*',
		name: 'NotFound',
		component: () => import(/* webpackChunkName: "notFound" */ '@/presentations/shared/views/NotFound.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
