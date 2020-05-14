<template>
  <div class="destaques__container">
    <div class="destques__title-container">
      <h2>
        ultimos
        <span class="bold">destaques</span>
      </h2>
      <router-link to="/" class="destaques__ver-mais-desktop">ver mais</router-link>
    </div>
    <div class="destaques__carousel-container">
      <carousel :paginationEnabled="paginationEnabled" :perPage="1">
        <slide v-for="(card, index) in cards" :key="index">
          <app-destaques-card
            :title="card.title"
            :publishDate="card.publishDate"
            :price="card.price"
          ></app-destaques-card>
        </slide>
      </carousel>
    </div>
    <button class="btn-line">Ver Mais</button>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import DestaquesCard from "../Home/DestaquesCard.vue";

export default {
  data() {
    return {
      paginationEnabled: false,
      cards: [
        {
          title: "Title Title Title Title Title Title",
          publishDate: "20/20/2020",
          price: "32.900"
        },
        { title: "Title", publishDate: "20/20/2020", price: "32.900" },
        { title: "Title", publishDate: "20/20/2020", price: "32.900" },
        { title: "Title", publishDate: "20/20/2020", price: "32.900" },
        { title: "Title", publishDate: "20/20/2020", price: "32.900" }
      ]
    };
  },
  components: {
    Carousel,
    Slide,
    appDestaquesCard: DestaquesCard
  }
};
</script>

<style lang="scss" scoped>
.destaques__container {
  padding: 2rem 0;
  @include desktop {
    display: grid;
    grid-template-columns: 20% 70% 10%;
    grid-template-rows: 1fr 1fr;
  }
}

.destques__title-container {
  @include desktop {
    grid-column: 1 /2;
    grid-row: 1 /3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 1rem;
    background-color: white;
    z-index: 2;
  }
}

.destaques__ver-mais-desktop {
  display: none;
  @include desktop {
    display: block;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    align-self: flex-end;
    padding-bottom: 1rem;
    text-transform: uppercase;
    color: #e6162d;
    font-weight: bold;
    border-bottom: 1px solid #e6162d;
    margin-bottom: 2rem;
    &:link {
      text-decoration: none;
    }
  }
}

.destaques__carousel-container {
  padding: 1rem;
  position: relative;
  @include desktop {
    grid-row: 1 /3;
    padding: 1rem 0;
  }
}

h2 {
  text-transform: uppercase;
  font-style: italic;
  font-weight: normal;
  @include desktop {
    width: 90%;
    text-align: right;
    padding: 2rem 0;
    align-self: flex-end;
  }
}

.btn-line {
  border: solid 1px #e6162d;
  color: #e6162d;
  @include desktop {
    display: none;
  }
}

.border {
  border: solid 2px black;
  // margin: 1rem;
}
</style>
