<template>
  <div class="form">
    <form class="form__form">
      <input
        class="form__nameInput"
        type="text"
        name="name"
        placeholder="Prénom"
        autocomplete="off"
        v-model="name"
      />
      <router-link :to="{ name: 'Intro', params: { name: name } }">
        <button class="form__button">Decouvrir</button>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.form {
  &__form {
    @include flexbox(column, center, center);
    position: relative;
    z-index: 2;
    height: 100vh;
  }
  &__nameInput {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid $white;
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
    font-size: 10px;
    margin-top: 80px;
    width: 150px;
    height: 36px;

    @include medium {
      width: 160px;
      height: 38px;
    }

    @include extraLarge {
      width: 200px;
      height: 50px;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
