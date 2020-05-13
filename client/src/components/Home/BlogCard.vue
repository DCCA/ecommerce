<template>
  <div class="blog-card__container">
    <div
      class="blog-card__image"
      v-bind:style="{ backgroundImage: 'url(' + 'https://keywordimg.com/640x480/celebrate' + ')' }"
    ></div>
    <div class="blog-card__details">
      <h3>Title</h3>
      <a href>+ ler materia completa</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogCardData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>