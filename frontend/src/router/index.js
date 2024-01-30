import { createRouter, createWebHashHistory } from 'vue-router';
import routerMap from './routerMap';

const Router = createRouter({
	history: createWebHashHistory(),
	routes: routerMap,
});

Router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next();
});

export default Router;
