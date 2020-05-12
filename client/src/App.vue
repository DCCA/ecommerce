<template>
	<div id="app">
		<app-header></app-header>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from './components/Header.vue';

export default {
	components: {
		appHeader: Header,
	},
};
</script>

<style lang="scss">
// Imports
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');

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
</style>
