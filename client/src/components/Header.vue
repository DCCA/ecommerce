<template>
	<header class="header" :class="{ 'is-home': isHome }">
		<div class="header__mobile-container" @click.prevent="openMenu">
			<img
				class="header__menu-icon"
				src="../assets/hamburguer-menu.svg"
				alt="menu"
			/>
		</div>
		<div class="header__mobile-topnav" :class="{ active: menuIsActive }">
			<router-link to="/">Home</router-link>
			<router-link to="/admin">Admin</router-link>
		</div>
		<div class="header__desktop-topnav">
			<router-link to="/">Bicicletas</router-link>
			<router-link to="/">Acessorios</router-link>
			<router-link to="/">Vender Minha Bike</router-link>
			<router-link to="/">Blog</router-link>
			<router-link to="/">Home</router-link>
		</div>
		<router-link to="/" class="header__logo-container">
			<h2 class="header__logo">Orbital</h2>
		</router-link>
		<div class="header__left-icons">
			<img
				class="header__search-icon"
				src="../assets/search.svg"
				alt="search"
			/>
			<router-link to="/" class="desktop-links">Buscar</router-link>
			<router-link to="/admin" class="desktop-links">Entrar</router-link>
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
	computed: {
		isHome() {
			if (this.$route.path === '/') {
				return true;
			} else {
				return false;
			}
		},
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
	opacity: 1;
	background-color: grey;
	padding: 1rem 0;
	h2 {
		font-size: 1.4rem;
	}
	@include desktop {
		grid-column: 1 / 13;
		gap: 1.5rem;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: 1fr;
		padding: 3rem 2rem;
	}
}

.is-home {
	position: absolute;
	background-color: transparent;
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
	@include desktop {
		display: none;
	}
}

.header__mobile-topnav {
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

.header__desktop-topnav {
	position: relative;
	display: none;
	@include desktop {
		display: flex;
		flex-direction: row;
		grid-column: 4 / 10;
		grid-row: 1;
		justify-content: space-around;
		align-items: center;
		a {
			color: white;
			// font-size: 1.4rem;
			font-weight: bold;
			text-transform: uppercase;
			&:link {
				text-decoration: none;
			}
			font-weight: normal;
		}
	}
}

.header__logo-container {
	text-decoration: none;
}

.header__logo {
	font-family: 'Exo 2', sans-serif;
	text-transform: uppercase;
	font-style: italic;
	font-weight: bold;
	color: white;
	@include desktop {
		grid-column: 1 / 3;
		font-size: 1.6rem;
	}
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
	@include desktop {
		grid-column: 11 /13;
		padding: 0;
		justify-content: space-between;
		a {
			color: white;
			&:link {
				text-decoration: none;
				font-size: 1rem;
				font-weight: normal;
			}
		}
		img {
			height: 1.4rem;
		}
	}
}

.desktop-links {
	display: none;
	@include desktop {
		display: block;
	}
}

.active {
	display: flex;
}
</style>
