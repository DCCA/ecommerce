<template>
	<div class="destaques__container">
		<h2>ultimos <span class="bold">detaques</span></h2>
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
		</div>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import DestaquesCard from '../Home/DestaquesCard.vue';

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

.card {
	border-radius: 5px;
	box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.07);
	margin: 1rem;
	// min-width: 260px;
}

.card__details {
	text-align: left;
	padding: 1rem;
	h3 {
		font-size: 1rem;
		color: #414150;
	}
	p {
		font-size: 0.7rem;
	}
	h3,
	p {
		padding-bottom: 0.6rem;
	}
	h3,
	.price {
		font-weight: bold;
	}
	.price {
		font-size: 1.5rem;
		color: #929aa3;
	}
}
</style>
