<template>
	<div class="card">
		<img
			class="card__images"
			src="https://keywordimg.com/260x260/random"
			alt=""
		/>
		<div class="card__details">
			<h3 class="title">{{ title }}</h3>
			<p class="pub-date">Publicado: {{ publishDate }}</p>
			<p class="price">R$ {{ price }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		publishDate: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
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
