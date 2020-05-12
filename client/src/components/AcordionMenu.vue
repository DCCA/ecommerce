<template>
	<div>
		<div class="acordions-title-container" @click="toggle">
			<h3>{{ title }}</h3>
			<img src="../assets/arrowdown.svg" alt="arrow-down" />
		</div>
		<ul class="acordion-list-links" :class="{ active: isActive }">
			<li v-for="(item, index) in listItem" :key="index">
				{{ item.linkName }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
		};
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		listItem: {
			type: Array,
			required: true,
		},
	},
	methods: {
		toggle() {
			this.isActive = !this.isActive;
		},
	},
};
</script>

<style lang="scss" scoped>
.acordion-list-links {
	display: none;
	flex-direction: column;
	text-align: left;
	padding-bottom: 1rem;
	li {
		padding-bottom: 0.5rem;
		font-size: 0.6rem;
		text-transform: uppercase;
	}
}

.acordions-title-container {
	display: flex;
	justify-content: space-between;
	padding-bottom: 0.8rem;
	margin-bottom: 0.8rem;
	border-bottom: solid 1px #4f4f4f;
	h3 {
		text-transform: uppercase;
		text-align: left;
		font-size: 0.8rem;
	}
}

.active {
	display: flex;
}
</style>
