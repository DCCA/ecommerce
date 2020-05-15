<template>
  <div class="subscribe__container">
    <h2>
      <span class="bold">se inscreva e receba nossas novidades</span>
    </h2>
    <p>Tudo sobre sua bike, eventos dicas e lancamentos</p>
    <form class="subscribe__form">
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="email" placeholder="E-mail" />
      <input type="submit" value="Cadastrar" class="btn-line subscribe__submit-btn-mobile" />
      <button type="submit" value="Cadastrar" class="subscribe__submit-btn-desktop">
        <img src="../../assets/paperplane.svg" alt />
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.subscribe__container {
  padding: 3rem 0;
  background-color: #e6162d;
  color: white;
  p {
    font-size: 1rem;
    @include desktop {
      font-size: 1.2rem;
      text-align: center;
    }
  }
  @include desktop {
    margin: 0 5% -3rem;
    border-radius: 0.5rem;
    z-index: 1;
  }
}

h2 {
  text-transform: uppercase;
  font-style: italic;
  padding-bottom: 1rem;
  color: white;
  font-size: 1.1rem;
  letter-spacing: normal;
  @include desktop {
    font-size: 1.6rem;
    text-align: center;
  }
}

.subscribe__form {
  display: flex;
  flex-direction: column;
  padding: 2rem 8%;
  input[type="text"] {
    border-radius: 6px;
    border: none;
    padding: 1rem;
    margin: 0.5rem 0;
    @include desktop {
      margin: 0 1rem;
    }
  }
  input[type="submit"] {
    width: 80%;
    align-self: center;
    margin: 1rem 0;
  }
  @include desktop {
    flex-direction: row;
    input {
      width: 50%;
      margin: 0 2%;
    }
  }
}

.subscribe__submit-btn-mobile {
  @include desktop {
    display: none;
  }
}

.subscribe__submit-btn-desktop {
  display: none;
  @include desktop {
    display: block;
    margin-left: -5%;
    background-color: transparent;
    border: none;
  }
}
</style>
