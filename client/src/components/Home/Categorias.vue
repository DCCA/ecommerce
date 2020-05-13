<template>
  <div class="categorias__container">
    <h2>
      categorias
      <span class="bold">populares</span>
    </h2>
    <div class="categorias__populares-grid">
      <app-categorias-card
        v-for="(card, index) in categoriasCardList"
        :key="index"
        :cardData="card"
      ></app-categorias-card>
    </div>
    <button class="btn-line">Ver Mais</button>
  </div>
</template>

<script>
import CategoriasCard from "./CategoriasCard";

export default {
  data() {
    return {
      categoriasCardList: [
        { title: "Title", imgUrl: "https://keywordimg.com/48x48/random" },
        { title: "Title", imgUrl: "https://keywordimg.com/48x48/random" },
        { title: "Title", imgUrl: "https://keywordimg.com/48x48/random" },
        { title: "Title", imgUrl: "https://keywordimg.com/48x48/random" },
        { title: "Title", imgUrl: "https://keywordimg.com/48x48/random" },
        { title: "Title", imgUrl: "https://keywordimg.com/48x48/random" }
      ]
    };
  },
  components: {
    appCategoriasCard: CategoriasCard
  }
};
</script>

<style lang="scss" scoped>
.categorias__container {
  padding: 2rem 0;
}

h2 {
  text-transform: uppercase;
  font-style: italic;
}

.btn-line {
  border: solid 1px #e6162d;
  color: #e6162d;
}

//
.categorias__populares-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-color: #3d3d3d;
  gap: 1px;
  margin: 2rem 0;
}

.categoria-card {
  padding: 1rem;
  background-color: #222;
}

.categoria-card__title {
  color: #fff;
  font-size: 1rem;
  padding-top: 0.5rem;
}
</style>
