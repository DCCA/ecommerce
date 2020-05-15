import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import Login from '../components/Admin/Login.vue';
import SignUp from '../components/Admin/Signup.vue';
import MyArea from '../components/Admin/MyArea.vue';
import store from '../store/index';
import SingleProduct from '../views/SingleProduct.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/product/:id',
		name: 'SingleProduct',
		component: SingleProduct,
	},
	{
		path: '/admin',
		name: 'Admin',
		component: Admin,
		children: [
			{
				path: '',
				component: Login,
				name: 'Login',
				beforeEnter(to, from, next) {
					if (store.state.idToken) {
						next('/admin/my-area');
					} else {
						next();
					}
				},
			},
			{ path: 'sign-up', component: SignUp, name: 'Signup' },
			{
				path: 'my-area',
				component: MyArea,
				name: 'MyArea',
				beforeEnter(to, from, next) {
					if (store.state.idToken) {
						next();
					} else {
						next('/admin');
					}
				},
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
