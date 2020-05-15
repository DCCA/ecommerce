<template>
  <div class="single-product__container">
    <div class="main__container">
      <img :src="product.imagesUrl" class="product-image" />
    </div>
    <div class="side__container">
      <div class="information__container">
        <div class="information-block__title">
          <h1 class="product-title">{{product.name}}</h1>
          <p>Publicado em {{product.createdAt}}</p>
        </div>
        <div class="information-block__price">
          <p class="product-description">{{product.description}}</p>
          <router-link class="link-more-information" to="/">+ VER DESCRIÇÃO COMPLETA</router-link>
          <p class="price">R$ {{product.price}}</p>
        </div>
        <div class="selectors-block__color-quantity">
          <div class="color-selector flex items-center">
            <p class="color-selector-title">Cor</p>
            <div class="flex items-center">
              <div class="color"></div>
              <div class="color"></div>
            </div>
          </div>
          <div class="quantity-selector items-center">
            <p>Qtd.</p>
            <div class="flex items-center">
              <button class="btn-quatity" @click="decreaseQuantity">-</button>
              <p>{{productQuantity}}</p>
              <button class="btn-quatity" @click="increaseQuantity">+</button>
            </div>
          </div>
        </div>
        <button class="btn-buy">COMPRAR</button>
        <form class="frete-block__form flex items-center justify-between">
          <label for="cep">Calculo do Frete</label>
          <div class="input-container">
            <input name="cep" type="text" placeholder="CEP" class="cep-input" />
            <input type="submit" value="OK" />
          </div>
        </form>
      </div>
    </div>
    <div class="specs-block__container">
      <div class="underline"></div>
      <h2>Especificacoes</h2>
      <div class="spec-block">
        <p class="title">Quadro</p>
        <p class="spec">{{product.quadro}}</p>
      </div>
      <div class="spec-block">
        <p class="title">Aro</p>
        <p class="spec">{{product.aro}}</p>
      </div>
      <div class="spec-block">
        <p class="title">Pneu</p>
        <p class="spec">{{product.pneu}}</p>
      </div>
      <div class="spec-block">
        <p class="title">Pedaleira</p>
        <p class="spec">{{product.pedaleira}}</p>
      </div>
      <div class="spec-block">
        <p class="title">Corrente</p>
        <p class="spec">{{product.corrente}}</p>
      </div>
      <div class="spec-block">
        <p class="title">Engrenagens</p>
        <p class="spec">{{product.engrenagens}}</p>
      </div>
      <div class="spec-block">
        <p class="title">Guidao</p>
        <p class="spec">{{product.guidao}}</p>
      </div>
      <div class="spec-block">
        <p class="title">Haste</p>
        <p class="spec">{{product.haste}}</p>
      </div>
      <div class="spec-block">
        <p class="title">Freios</p>
        <p class="spec">{{product.freios}}</p>
      </div>
    </div>
    <div class="ask-block__container">
      <h2>Perguntas</h2>
      <div class="underline"></div>
      <p>Converse com o vendedor</p>
      <div class="chat__wrapper">
        <textarea name="chat" id cols="30" rows="10" class="chat-area"></textarea>
        <input type="text" placeholder="Escrever uma pergunta" />
        <input type="submit" value="ENVIAR" />
      </div>
    </div>
    <app-related-product></app-related-product>
    <app-subscribe></app-subscribe>
  </div>
</template>

<script>
import Subscribe from "../components/Home/Subscribe";
import RelatedProduct from "../components/SingleProduct/RelatedProduct.vue";

export default {
  data() {
    return {
      product: "",
      productQuantity: 0
    };
  },
  components: {
    appSubscribe: Subscribe,
    appRelatedProduct: RelatedProduct
  },
  methods: {
    increaseQuantity() {
      this.productQuantity++;
    },
    decreaseQuantity() {
      this.productQuantity--;
    }
  },
  computed: {
    thereIsProduct() {
      return this.$store.state.product;
    }
  },
  watch: {
    thereIsProduct(newState) {
      this.product = newState;
      console.log(newState);
    }
  },
  beforeMount() {
    console.log("before mountin");
    const id = this.$route.params.id;
    this.$store
      .dispatch("getProduct", id)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.main__container {
  margin: 0 auto;
  padding: 10% 2rem;
  .product-image {
    height: 400px;
    width: 600px;
  }
}
.single-product__container {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: repeat(5, auto);
  text-align: left;
}

.side__container {
  grid-column: 2 / 3;
  grid-row: 1 / 4;
}

.information__container {
  padding: 15% 2rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-bottom: solid 1px #ededed;
}

.information-block__title {
  padding: 0 0 2rem;
  border-bottom: solid 1px #dedede;
  margin-bottom: 2rem;
  h1 {
    margin: 0 0 0.5rem;
  }
}

.information-block__price {
  .product-description {
    color: #868686;
    padding-bottom: 2rem;
  }
}

.product-description {
  line-height: 1.6rem;
}

.link-more-information {
  text-transform: uppercase;
  color: #e6162d;
  letter-spacing: 1.3px;
  padding-bottom: 1rem;
  &:link {
    text-decoration: none;
  }
}

.price {
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #e6162d;
  font-weight: bold;
}

.selectors-block__color-quantity {
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
}

.quantity-selector {
  display: flex;
}

.btn-quatity {
  border-radius: 10rem;
  border: none;
  margin: 0 0.8rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-align: center;
}

.color {
  height: 2rem;
  width: 2rem;
  margin: 0 0.6rem;
  border-radius: 5rem;
  background-color: black;
}

.color-selector-title {
  padding-right: 1.2rem;
}

.btn-buy {
  background-color: #e6162d;
  color: white;
  border: none;
  border-radius: 5rem;
  font-weight: bold;
  padding: 1.2rem 0;
  letter-spacing: 0.1rem;
}

.frete-block__form {
  padding: 2rem 0;
  input[type="submit"] {
    position: absolute;
    right: 0;
    height: 100%;
    width: 30%;
    background-color: #414150;
    border: none;
    border-radius: 0 5px 5px 0;
    color: white;
    font-weight: bold;
  }
}

.cep-input {
  border-radius: 5px;
  border: solid 1px #e4e4e4;
  padding: 0.8rem 0.8rem;
}

.input-container {
  position: relative;
}

.specs-block__container,
.ask-block__container {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 50% 50%;
  h2 {
    grid-column: 1 / 3;
    text-transform: uppercase;
    font-style: italic;
    color: #e3e3e3;
    font-size: 3.2rem;
    padding: 0 0 0.6rem 1rem;
  }
  .underline {
    border-bottom: 4px solid #e6162d;
    grid-column: 1 /3;
    grid-row: 2;
    align-self: flex-start;
    width: 2rem;
    margin-bottom: 2rem;
  }
}

.spec-block {
  color: #868686;
  .title {
    font-weight: bold;
    padding: 0.4rem 0;
  }
  .spec {
    padding-bottom: 0.8rem;
  }
}

.ask-block__container {
  grid-template-rows: auto auto auto;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  padding: 3rem 2rem 4rem;
  border-bottom: solid 1px #ededed;
  p {
    color: #414150;
    padding: 2.6rem 0 2rem;
  }
}

.chat__wrapper {
  position: relative;
  grid-column: 1 / 3;
  input {
    position: absolute;
    bottom: 0;
  }
  input[type="text"] {
    left: 0;
    width: 100%;
    background-color: #f9f9f9;
    border-radius: 0 0 5px 5px;
    padding: 0.5rem;
    border: solid 1px #dbdbdb;
  }
  input[type="submit"] {
    right: 0;
    width: 20%;
    padding: 0.5rem;
    border: 1px solid;
    border: solid 1px #dbdbdb;
    border-radius: 0 0 5px;
    color: white;
    background-color: #e6162d;
  }
}

.chat-area {
  resize: none;
  border-radius: 5px;
  border: solid 1px #dbdbdb;
  width: 100%;
  height: 100%;
}

.subscribe__container {
  grid-row: 5 / 6;
  grid-column: 1 / 4;
}
</style>