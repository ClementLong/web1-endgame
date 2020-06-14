<template>
  <div class="home">
    <form class="home__form">
      <input
        class="home__nameInput"
        type="text"
        name="name"
        placeholder="Prénom"
        autocomplete="off"
        required
      />

      <router-link to="/intro"
        ><button class="home__button">Découvrir</button></router-link
      >
    </form>
    <div class="home__filter"></div>
    <div class="home__footer">
      <p>
        "Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus
        Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet
        d'une demande de droit d'utilisation. Ce site ne sera en aucun cas
        exploité à des fins commerciales et ne sera pas publié” © 02.06.2020 -
        19.06.2020 GROUPE 8
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/css/styles.scss";

.home {
  background-image: url("../assets/img/backgroundHome.svg");
  @include backgroundImg(no-repeat, cover, top center);
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  &__filter {
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
  }
  &__form {
    @include flexbox(column, center, center);
    position: relative;
    z-index: 2;
    height: 100vh;
  }
  &__nameInput {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid$white;
    outline: none;
    color: $white;

    @include medium {
      font-size: 16px;
    }

    @include extraLarge {
      font-size: 18px;
    }
  }

  &__nameInput::placeholder {
    color: $white;
  }

  &__button {
    background-color: #feedcc;
    border: none;
    text-transform: uppercase;
    margin-top: 80px;
    width: 150px;
    height: 36px;

    @include medium {
      font-size: 14px;
      width: 170px;
      height: 40px;
    }

    @include extraLarge {
      width: 200px;
      height: 50px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &__footer {
    position: absolute;
    padding: 8px;
    z-index: 2;
    width: 100%;
    background-color: black;
    bottom: 0;
    color: $white;
    font-size: 10px;
    line-height: 12px;
  }
}
</style>
