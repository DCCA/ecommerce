<template>
  <div>
    <h1>Login</h1>
    <form class="pa4 black-80">
      <div class="measure center">
        <label for="email" class="f6 b db mb2">E-mail</label>
        <input
          id="email"
          class="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="email-desc"
          v-model="email"
        />
      </div>
      <div class="measure center">
        <label for="password" class="f6 b db mb2">Password</label>
        <input
          id="password"
          class="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="password"
          aria-describedby="password-desc"
          v-model="password"
        />
      </div>
      <div class>
        <input
          class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit"
          value="Log in"
          @click.prevent="logIn"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    logIn() {
      console.log("Log in");
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log(formData);
      this.$store
        .dispatch("login", {
          email: formData.email,
          password: formData.password
        })
        .then(res => {
          console.log(res);
        })
        .then(() => {
          this.$router.push({ name: "MyArea" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="sass" scoped></style>
