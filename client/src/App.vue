<template>
	<div id="app">
		<app-header></app-header>
		<router-view class="content"></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
	components: {
		appHeader: Header,
		appFooter: Footer,
	},
};
</script>

<style lang="scss">
// Imports
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css');

// Variables
$font: 'Open Sans', sans-serif, 'Arial';
$font-logo: 'Exo 2', sans-serif;
$font-size: 16px;
$desktop-width: 1220px;
$card-width: 100%;

// Basic functions
@mixin desktop {
	@media (min-width: $desktop-width) {
		@content;
	}
}

html,
body {
	font-size: 14px;
	font-family: 'Roboto', sans-serif;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}

.content {
	grid-column: 1 / 4;
}

li {
	list-style: none;
}
</style>
