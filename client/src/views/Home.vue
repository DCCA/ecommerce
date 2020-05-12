<template>
	<div class="home">
		<app-hero-image></app-hero-image>
	</div>
</template>

<script>
import HeroImage from '../components/Home/HeroImage.vue';

export default {
	name: 'Home',
	components: {
		appHeroImage: HeroImage,
	},
};
</script>
