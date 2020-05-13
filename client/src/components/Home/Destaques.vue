<template>
	<div class="destaques__container">
		<h2>
			ultimos
			<span class="bold">detaques</span>
		</h2>
		<div class="destaques__carouse-container">
			<carousel :paginationEnabled="paginationEnabled" perPage="1">
				<slide v-for="(card, index) in cards" :key="index">
					<app-destaques-card
						:title="card.title"
						:publishDate="card.publishDate"
						:price="card.price"
					></app-destaques-card>
				</slide>
			</carousel>
			<vueper-slides
				class="no-shadow bg-light-silver"
				:visible-slides="1.5"
				:slide-ratio="1 / 4"
				:dragging-distance="70"
			>
				<vueper-slide v-for="i in 9" :key="i" :title="i.toString()" />
			</vueper-slides>
		</div>
		<button class="btn-line">Ver Mais</button>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import DestaquesCard from '../Home/DestaquesCard.vue';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
	data() {
		return {
			paginationEnabled: false,
			cards: [
				{ title: 'Title', publishDate: '20/20/2020', price: '32.900' },
				{ title: 'Title', publishDate: '20/20/2020', price: '32.900' },
				{ title: 'Title', publishDate: '20/20/2020', price: '32.900' },
				{ title: 'Title', publishDate: '20/20/2020', price: '32.900' },
				{ title: 'Title', publishDate: '20/20/2020', price: '32.900' },
			],
		};
	},
	components: {
		VueperSlides,
		VueperSlide,
		Carousel,
		Slide,
		appDestaquesCard: DestaquesCard,
	},
};
</script>

<style lang="scss" scoped>
.destaques__container {
	padding: 2rem 0;
}

.destaques__carouse-container {
	padding: 1rem;
	position: relative;
}

h2 {
	text-transform: uppercase;
	font-style: italic;
}

.btn-line {
	border: solid 1px #e6162d;
	color: #e6162d;
}
</style>
