import Vue from 'vue';
import Vuex from 'vuex';

const apiUrl = 'https://ecommerce-mevn.herokuapp.com';
// Dev
// http://localhost:3000

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		idToken: null,
		userId: null,
		products: [],
		product: [],
	},
	mutations: {
		authUser(state, userData) {
			state.idToken = userData.token;
			state.userId = userData.userId;
		},
		logOutUser(state) {
			state.idToken = null;
			state.userId = null;
		},
		setProducts(state, productsData) {
			state.products = productsData.products;
		},
		setProduct(state, productData) {
			state.product = productData.product;
		},
	},
	actions: {
		signup(context, authData) {
			const name = authData.name;
			const email = authData.email;
			const password = authData.password;
			// Add the fetch code
			fetch(`${apiUrl}/api/auth/signup`, {
				method: 'PUT',
				body: JSON.stringify({
					name: name,
					email: email,
					password: password,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		login(context, authData) {
			const email = authData.email;
			const password = authData.password;
			fetch(`${apiUrl}/api/auth/login`, {
				method: 'POST',
				body: JSON.stringify({
					name: name,
					email: email,
					password: password,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => {
					console.log(res);
					return res.json();
				})
				.then((data) => {
					context.commit('authUser', {
						token: data.token,
						userId: data.userId,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		},
		logout(context) {
			context.commit('logOutUser');
		},
		getProducts(context) {
			fetch(`${apiUrl}/api/shop/products`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					console.log(data);
					context.commit('setProducts', {
						products: data.products,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getProduct(context, id) {
			fetch(`${apiUrl}/api/shop/product/${id}`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					console.log(data);
					context.commit('setProduct', {
						product: data.product,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	modules: {},
});
