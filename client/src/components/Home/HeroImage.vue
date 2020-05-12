<template>
	<div class="hero-image__container" style="{backgroundImage: }">
		<div class="hero-image__tagline-container">
			<h1>
				a melhor <br /><span class="bold"
					>performance pra <br />
					quem precisa</span
				>
			</h1>
			<button class="btn-line">Ver Produtos</button>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-image__container {
	height: 60vh;
	background-image: url('../../assets/biciclehero.jpg'),
		linear-gradient(to bottom, #000000, rgba(216, 216, 216, 0) 76%);
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
}

.hero-image__tagline-container {
	h1 {
		color: white;
		text-transform: uppercase;
		line-height: 2.5rem;
		font-size: 2rem;
	}
}

.btn-line {
	border-radius: 30px;
	border: solid 1px #ffffff;
	color: white;
	text-transform: uppercase;
	font-stretch: condensed;
	background-color: transparent;
	padding: 1rem 3rem;
}
</style>
