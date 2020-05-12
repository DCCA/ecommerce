<template>
	<div>
		<h1>Admin</h1>
		<router-view></router-view>
		<router-link :to="{ name: 'Login' }">login</router-link>
		<router-link :to="{ name: 'Signup' }">signup</router-link>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
a
    padding: 0 1rem
</style>
