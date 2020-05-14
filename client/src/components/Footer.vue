<template>
  <footer>
    <div class="footer__content-container">
      <ul class="footer__social-list mobile">
        <li>
          <i class="fab fa-facebook-square"></i>
        </li>
        <li>
          <i class="fab fa-twitter"></i>
        </li>
        <li>
          <i class="fab fa-instagram"></i>
        </li>
        <li>
          <i class="fab fa-youtube"></i>
        </li>
      </ul>
      <app-acordion-menu title="categorias" :listItem="categoriasLinks"></app-acordion-menu>
      <app-acordion-menu title="minha Conta" :listItem="minhaAreaLinks"></app-acordion-menu>
      <app-acordion-menu title="institucional" :listItem="institucionalLinks"></app-acordion-menu>
      <div class="footer__info-containers formas-de-pagamento__container">
        <h3 class="footer-titles">Formas de Pagamento</h3>
        <div class="footer__card-flags-container">
          <img src="../assets/visa.svg" alt="visa" />
          <img src="../assets/diners-club.svg" alt="diners" />
          <img src="../assets/amex.svg" alt="amex" />
          <img src="../assets/discover.svg" alt="discover" />
          <img src="../assets/mastercard.svg" alt="mastercard" />
        </div>
      </div>
      <div class="footer__info-containers">
        <h3 class="footer-titles">Seguranca</h3>
        <img class="footer-icons" src="../assets/ebit.png" alt="ebit" />
      </div>
    </div>
    <div class="footer__copyright-container">
      <p>Orbital | 2018 - Todos os direitos reservados.</p>
      <ul class="footer__social-list desktop">
        <li>
          <i class="fab fa-facebook-square"></i>
        </li>
        <li>
          <i class="fab fa-twitter"></i>
        </li>
        <li>
          <i class="fab fa-instagram"></i>
        </li>
        <li>
          <i class="fab fa-youtube"></i>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import AcordionMenu from "./AcordionMenu.vue";

export default {
  data() {
    return {
      isActive: false,
      categoriasLinks: [
        { linkName: "Capacetes" },
        { linkName: "Freios" },
        { linkName: "Rodas" },
        { linkName: "Pedais" },
        { linkName: "Sapatilhas" },
        { linkName: "Acessorios" }
      ],
      minhaAreaLinks: [
        { linkName: "Meus Pedidos" },
        { linkName: "Minha Area" }
      ],
      institucionalLinks: [
        { linkName: "Quem Somos" },
        { linkName: "Duvidas" },
        { linkName: "Termos" },
        { linkName: "Politica de Privacidade" }
      ]
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  components: {
    appAcordionMenu: AcordionMenu
  }
};
</script>

<style lang="scss" scoped>
footer {
  grid-column: 1 / 4;
  background-color: #222;
  color: #8c8c8c;
  @include desktop {
    grid-column: 1 / 13;
    padding-top: 5rem;
  }
  h3 {
    letter-spacing: 0.2rem;
  }
}

.formas-de-pagamento__container {
  padding-top: 1rem;
  @include desktop {
    padding-top: 0;
  }
}

.footer__content-container {
  @include desktop {
    display: flex;
  }
}

.footer-titles {
  text-transform: uppercase;
  text-align: left;
  font-size: 0.8rem;
  padding-bottom: 1rem;
}

.footer__card-flags-container {
  display: flex;
  img {
    padding-right: 1rem;
  }
}

.footer__info-containers {
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  .footer-icons {
    width: 4rem;
  }
}

.footer__content-container {
  padding: 1.4rem 1.5rem 0;
  @include desktop {
    padding: 0 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
.footer__social-list {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  li {
    padding: 0 1rem;
    @include desktop {
      padding: 0 0.5rem;
    }
  }
  i {
    font-size: 1.2rem;
    color: #fff;
  }
  @include desktop {
    position: absolute;
    right: 0;
  }
}

.footer__copyright-container {
  padding: 1rem;
  border-top: solid 1px #393939;
  @include desktop {
    // width: 90%;
    display: flex;
    margin: 0 5%;
    position: relative;
    justify-content: center;
  }
}

.mobile {
  @include desktop {
    display: none;
  }
}

.desktop {
  display: none;
  @include desktop {
    display: flex;
  }
}
</style>
