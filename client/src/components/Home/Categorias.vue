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
    <div class="categorias__carousel">
      <carousel :paginationEnabled="false" :perPage="5">
        <slide v-for="(card, index) in categoriasCardList" :key="index">
          <app-categorias-card :key="index" :cardData="card"></app-categorias-card>
        </slide>
      </carousel>
    </div>
    <button class="btn-line">Ver Mais</button>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import CategoriasCard from "./CategoriasCard";

export default {
  data() {
    return {
      categoriasCardList: [
        { title: "Title", imgUrl: "https://keywordimg.com/100x100/sky" },
        { title: "Title", imgUrl: "https://keywordimg.com/100x100/bicicle" },
        { title: "Title", imgUrl: "https://keywordimg.com/100x100/building" },
        { title: "Title", imgUrl: "https://keywordimg.com/100x100/funny" },
        { title: "Title", imgUrl: "https://keywordimg.com/100x100/ok" },
        { title: "Title", imgUrl: "https://keywordimg.com/100x100/try" }
      ]
    };
  },
  components: {
    appCategoriasCard: CategoriasCard,
    Carousel,
    Slide
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
  @include desktop {
    display: none;
  }
}

.categorias__carousel {
  display: none;
  @include desktop {
    display: block;
    margin: 5rem 0;
  }
}
</style>
