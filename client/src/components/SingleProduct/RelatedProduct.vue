<template>
  <div class="related-product__container">
    <div class="related-product__title-container items-center">
      <h2 class="tc">
        produtos
        <span class="bold">relacionados</span>
      </h2>
    </div>
    <carousel :paginationEnabled="false" :perPage="4">
      <slide v-for="(index) in 10" :key="index">
        <div class="related-product__card flex flex-column items-center">
          <img class="product-image" src="https://via.placeholder.com/150" alt />
          <h3 class="product-title">Title</h3>
          <p class="product-price">R$ 90,00</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style lang="scss" scoped>
.related-product__container {
  grid-column: 1 / 3;
  grid-row: 4/5;
  padding: 2rem;
}

.related-product__title-container {
  text-transform: uppercase;
  padding-bottom: 3rem;
}

// card
.related-product__card {
  // border: solid black 1px;
  margin: 15% 10%;
  padding: 10%;
  border-radius: 5px;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.07);
  text-align: left;
}

.product-image {
  padding-bottom: 1rem;
}

.product-title {
  font-size: 1.2rem;
  text-transform: uppercase;
  padding-bottom: 1rem;
  width: 100%;
}

.product-price {
  width: 100%;
  font-weight: bold;
  color: #e6162d;
}
</style>