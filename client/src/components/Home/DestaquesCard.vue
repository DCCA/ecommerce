<template>
  <div class="card">
    <div class="card__image-container">
      <img class="card__images" :src="imageUrl" alt />
    </div>
    <div class="card__details">
      <h3 class="product-title">{{ title }}</h3>
      <div>
        <p class="pub-date">Publicado: {{ publishDate }}</p>
        <p class="price">R$ {{ price }}</p>
      </div>
    </div>
    <div class="card__comprar-container">
      <div class="tech-detail__container">
        <p
          class="tech-detail__description"
        >Bacon ipsum dolor amet meatball filet mignon boudin corned beef chislic venison. Pork loin short loin shankle sirloin frankfurter jowl bresaola.</p>
        <router-link to="/" class="link-see-more">+ VER DESCRIÇÃO COMPLETA</router-link>
      </div>
      <router-link class="btn-line" tag="button" :to="'/product/' + id">Comprar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    publishDate: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.07);
  margin: 1rem;
  @include desktop {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr 1fr;
    padding: 4rem 0;
  }
}

.card__image-container {
  padding: 1rem;
  @include desktop {
    grid-row: 1 /3;
  }
}

.card__images {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  justify-self: center;
}

.card__details {
  text-align: left;
  padding: 1rem;
  @include desktop {
    border-bottom: solid 1px #dedede;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .product-title {
    font-size: 1rem;
    color: #414150;
    line-height: normal;
    @include desktop {
      font-size: 1.8rem;
    }
  }
  p {
    font-size: 0.7rem;
    color: #868686;
    @include desktop {
      font-size: 1rem;
    }
  }
  h3,
  p {
    padding-bottom: 0.6rem;
  }
  h3,
  .price {
    font-weight: bold;
  }
  .price {
    font-size: 1.5rem;
    color: #929aa3;
  }
}

.card__comprar-container {
  display: none;
  @include desktop {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 4rem;
    .btn-line {
      border: solid 1px #e6162d;
      color: #e6162d;
      margin: 0 10%;
    }
  }
  .tech-detail__container {
    padding: 0 1rem 2rem;
    text-align: left;
    .tech-detail__description {
      padding: 0 0 1rem;
      color: #868686;
    }
  }
}
</style>
