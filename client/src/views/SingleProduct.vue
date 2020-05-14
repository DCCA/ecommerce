<template>
  <div class="single-product__container">
    <div class="main__container">
      <p>imagem</p>
    </div>
    <div class="side__container">
      <div class="information__container">
        <h1 class="product-title">Title</h1>
        <p>Date</p>
        <p>Description</p>
        <router-link to="/">link</router-link>
        <p>R$ Preco</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.single-product__container {
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 2rem 0;
  text-align: left;
}
</style>