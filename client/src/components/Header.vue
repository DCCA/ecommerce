<template>
	<header class="header">
		<div class="header__mobile-container" @click.prevent="openMenu">
			<img
				class="header__menu-icon"
				src="../assets/hamburguer-menu.svg"
				alt="menu"
			/>
		</div>
		<div class="header__topnav" :class="{ active: menuIsActive }">
			<router-link to="/">Home</router-link>
			<router-link to="/admin">Admin</router-link>
		</div>
		<h2 class="header__logo">Orbital</h2>
		<div class="header__left-icons">
			<img
				class="header__search-icon"
				src="../assets/search.svg"
				alt="search"
			/>
			<img
				class="header__bicicle-icon"
				src="../assets/bicicle-icon.svg"
				alt="cart"
			/>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			menuIsActive: false,
		};
	},
	methods: {
		openMenu() {
			console.log('click');
			return (this.menuIsActive = !this.menuIsActive);
		},
	},
};
</script>

<style lang="scss" scoped>
header {
	width: 100%;
	grid-column: 1 / 4;
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	background-color: grey;
	padding: 1rem 0;
	h2 {
		font-size: 1.4rem;
	}
}

a {
	font-weight: bold;
	color: #2c3e50;
	&.router-link-exact-active {
		color: #42b983;
	}
}

.header__mobile-container {
	display: flex;
	padding: 0 1rem;
}

.header__topnav {
	flex-direction: column;
	position: absolute;
	top: 3.5rem;
	display: none;
	background-color: grey;
	width: 100%;
	margin: 0;
	padding: 1rem 0;
	a {
		padding: 0.5rem;
	}
}

.header__logo {
	font-family: 'Exo 2', sans-serif;
	text-transform: uppercase;
	font-style: italic;
	font-weight: bold;
	color: white;
}

.header__search {
	height: 18px;
	width: 18px;
}

.header__left-icons {
	grid-column: 3 /4;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0 1.2rem;
}

.active {
	display: flex;
}
</style>
