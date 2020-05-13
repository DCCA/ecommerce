<template>
  <div class="admin__container">
    <router-view></router-view>
    <template v-if="!isLogIn">
      <router-link
        :to="{ name: 'Login' }"
        class="f4 fw6 db black no-underline underline-hover"
      >Login</router-link>
      <router-link
        :to="{ name: 'Signup' }"
        class="f4 fw6 db black no-underline underline-hover"
      >Sign Up</router-link>
    </template>
    <template v-if="isLogIn">
      <router-link
        :to="{ name: 'MyArea' }"
        class="f4 fw6 db black no-underline underline-hover"
      >My Area</router-link>
      <a
        rel="noopener noreferrer"
        @click.prevent="logout"
        class="f4 fw6 db black no-underline underline-hover"
      >Log out</a>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    isLogIn() {
      if (this.$store.state.userId !== null) {
        return true;
      }
      return false;
    }
  },
  methods: {
    logout() {
      console.log("Log out");
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  padding: 0.5rem 1rem;
}

.admin__container {
  min-height: 50vh;
  padding-bottom: 2rem;
}
</style>
