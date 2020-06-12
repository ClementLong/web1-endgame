<template>
  <div class="articleVideo">
    <div class="articleVideo__filter">
      <h1 class="moreInformations__title">{{ title }}</h1>
      <p class="moreInformations__description">{{ description }}</p>
      <img :src="img" alt="" class="moreInformations__img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "moreInformations",
  props: {
    title: String,
    description: String,
    filter: String,
    img: String
  }
};
</script>

<style lang="scss" scoped>
.moreInformations {
  &__title {
    font-size: 36px;
    line-height: 49px;
    color: #ffffff;
    font-family: "Cinzel Decorative";
  }

  &__description {
    font-family: "Roboto";
    font-size: 24px;
    color: #ffffff;
  }

  &__filter {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  &__img {
  }

  &__icon {
  }
}
</style>
