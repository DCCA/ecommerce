<template>
  <div class="blog__container">
    <h2>
      blog
      <span class="bold">saiba mais</span>
    </h2>
    <div class="blog__carousel-container">
      <carousel :paginationEnabled="paginationEnabled" perPage="1">
        <slide>
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
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  data() {
    return {
      paginationEnabled: false,
      cards: [
        { title: "Title", publishDate: "20/20/2020", price: "32.900" },
        { title: "Title", publishDate: "20/20/2020", price: "32.900" },
        { title: "Title", publishDate: "20/20/2020", price: "32.900" },
        { title: "Title", publishDate: "20/20/2020", price: "32.900" },
        { title: "Title", publishDate: "20/20/2020", price: "32.900" }
      ]
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style lang="scss" scoped>
.blog__container {
  padding: 2rem 0;
}

.blog__carousel-container {
  padding: 1rem;
  position: relative;
}

h2 {
  text-transform: uppercase;
  font-style: italic;
  padding-bottom: 1rem;
}

.blog-card__container {
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
}
</style>
