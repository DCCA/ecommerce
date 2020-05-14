<template>
  <div class="blog-card__container">
    <div
      class="blog-card__image"
      v-bind:style="{ backgroundImage: 'url(' + 'https://keywordimg.com/640x480/celebrate' + ')' }"
    ></div>
    <div class="blog-card__details">
      <h3>{{blogCardData.title}}</h3>
      <p
        class="details"
      >Bacon ipsum dolor amet meatball filet mignon boudin corned beef chislic venison. Pork loin short loin shankle sirloin frankfurter jowl bresaola.</p>
      <a :href="blogCardData.imageUrl">+ ler materia completa</a>
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
.blog-card__container {
  padding: 0 1rem;
}

.blog-card__image {
  border-radius: 5px;
  height: 13rem;
  width: 100%;
  background-size: cover;
  background-position: center;
}

.blog-card__details {
  padding: 1rem;
  text-align: left;
  h3 {
    font-size: 1.5rem;
    color: #414150;
    font-weight: bold;
    padding: 1rem 0 0.8rem;
  }
  a {
    text-transform: uppercase;
    color: #e6162d;
    letter-spacing: 1.3px;
    &:link {
      text-decoration: none;
    }
  }
  .details {
    display: none;
    @include desktop {
      display: block;
      padding-bottom: 1rem;
    }
  }
}
</style>