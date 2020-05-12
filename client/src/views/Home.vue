<template>
	<div class="home">
		<app-hero-image></app-hero-image>
		<app-destaques></app-destaques>
	</div>
</template>

<script>
import HeroImage from '../components/Home/HeroImage.vue';
import Destaques from '../components/Home/Destaques.vue';

export default {
	name: 'Home',
	components: {
		appHeroImage: HeroImage,
		appDestaques: Destaques,
	},
};
</script>
