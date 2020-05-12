import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import Login from '../components/Login.vue';
import SignUp from '../components/Signup.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/admin',
		name: 'Admin',
		component: Admin,
		children: [
			{ path: 'login', component: Login, name: 'Login' },
			{ path: 'sign-up', component: SignUp, name: 'Signup' },
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
