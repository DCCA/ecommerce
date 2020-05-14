<template>
  <div class="blog__container">
    <h2>
      blog
      <span class="bold">saiba mais</span>
    </h2>
    <div class="blog__carousel-container">
      <carousel :paginationEnabled="paginationEnabled" :perPage="+isMobile">
        <slide v-for="(card,index) in blogCardsList" :key="index">
          <app-blog-card :blogCardData="card"></app-blog-card>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import BlogCard from "./BlogCard.vue";

export default {
  data() {
    return {
      windowSize: 0,
      paginationEnabled: false,
      blogCardsList: [
        {
          title: "NewTitle",
          imageUrl: "https://keywordimg.com/640x480/celebrate",
          link: "https://google.com"
        },
        {
          title: "NewTitle",
          imageUrl: "https://keywordimg.com/640x480/celebrate",
          link: "https://google.com"
        },
        {
          title: "NewTitle",
          imageUrl: "https://keywordimg.com/640x480/celebrate",
          link: "https://google.com"
        },
        {
          title: "NewTitle",
          imageUrl: "https://keywordimg.com/640x480/celebrate",
          link: "https://google.com"
        }
      ]
    };
  },
  computed: {
    isMobile() {
      if (this.windowSize < 1200) {
        return "1";
      }
      return "3";
    }
  },
  components: {
    Carousel,
    Slide,
    appBlogCard: BlogCard
  },
  beforeMount() {
    this.windowSize = window.innerWidth;
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
</style>
