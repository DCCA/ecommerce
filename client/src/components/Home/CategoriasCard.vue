<template>
  <div class="categoria-card">
    <img :src="cardData.imgUrl" alt />
    <p class="categoria-card__title">{{cardData.title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
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