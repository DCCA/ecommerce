<template>
  <div class="home">
    <app-hero-image></app-hero-image>
    <app-destaques></app-destaques>
    <app-categorias></app-categorias>
    <app-blog></app-blog>
  </div>
</template>

<script>
import HeroImage from "../components/Home/HeroImage.vue";
import Destaques from "../components/Home/Destaques.vue";
import Categorias from "../components/Home/Categorias.vue";
import Blog from "../components/Home/Blog.vue";

export default {
  name: "Home",
  components: {
    appHeroImage: HeroImage,
    appDestaques: Destaques,
    appCategorias: Categorias,
    appBlog: Blog
  }
};
</script>
