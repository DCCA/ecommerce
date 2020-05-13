<template>
  <div class="subscribe__container">
    <h2>
      <span class="bold">se inscreva e receba nossas novidades</span>
    </h2>
    <p>Tudo sobre sua bike, eventos dicas e lancamentos</p>
    <form class="subscribe__form">
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="email" placeholder="E-mail" />
    </form>
    <button class="btn-line">Cadastrar</button>
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
  }
}

h2 {
  text-transform: uppercase;
  font-style: italic;
  padding-bottom: 1rem;
  color: white;
  font-size: 1.1rem;
  letter-spacing: normal;
}

.subscribe__form {
  display: flex;
  flex-direction: column;
  padding: 2rem 8%;
  input {
    border-radius: 6px;
    border: none;
    padding: 1rem;
    margin: 0.5rem 0;
  }
}
</style>
