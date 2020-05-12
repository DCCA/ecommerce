<template>
	<div>
		<h1>Sign Up</h1>
		<form class="pa4 black-80">
			<div class="measure">
				<label for="name" class="f6 b db mb2">Name</label>
				<input
					id="name"
					class="input-reset ba b--black-20 pa2 mb2 db w-100"
					type="text"
					aria-describedby="name-desc"
				/>
			</div>
			<div class="measure">
				<label for="email" class="f6 b db mb2">E-mail</label>
				<input
					id="email"
					class="input-reset ba b--black-20 pa2 mb2 db w-100"
					type="text"
					aria-describedby="email-desc"
				/>
			</div>
			<div class="measure">
				<label for="password" class="f6 b db mb2">Password</label>
				<input
					id="password"
					class="input-reset ba b--black-20 pa2 mb2 db w-100"
					type="password"
					aria-describedby="password-desc"
				/>
			</div>
			<div class="">
				<input
					class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
					type="submit"
					value="Log in"
				/>
			</div>
		</form>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
