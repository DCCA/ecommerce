<template>
  <div id="app">
    <app-header></app-header>
    <router-view class="content"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style lang="scss">
// Imports
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Exo+2&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");

html,
body {
  font-size: 14px;
  font-family: "Roboto", sans-serif;
}

h2 {
  font-size: 1.6rem;
  color: #222222;
  letter-spacing: 3px;
}

#app {
  min-width: $min-width;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @include desktop {
    grid-template-columns: repeat(12, 1fr);
    gap: 1.5rem;
    overflow: hidden;
  }
}

.content {
  grid-column: 1 / 4;
  @include desktop {
    grid-column: 1 / 13;
  }
}

li {
  list-style: none;
}

.bold {
  font-weight: bold;
}

.btn-line {
  border-radius: 30px;
  border: solid 1px #ffffff;
  color: white;
  text-transform: uppercase;
  font-stretch: condensed;
  background-color: transparent;
  padding: 1rem 6rem;
}

.VueCarousel-wrapper {
  @include desktop {
    overflow: visible !important;
  }
}
</style>
