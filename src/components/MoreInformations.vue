<template>
  <div class="moreInformations">
    <h1 class="moreInformations__title">{{ title }}</h1>
    <p class="moreInformations__description">{{ description }}</p>
    <img :src="img" alt="" class="moreInformations__img" />
    <img :src="img" alt="" class="moreInformations__icon" />
    <div class="moreInformations__filter"></div>
  </div>
</template>

<script>
export default {
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
    font-family: "CinzelDecorative";
  }

  &__description {
    font-family: "Roboto";
    font-size: 24px;
    color: #ffffff;
  }

  // &__img {
  // }

  // &__icon {
  // }

  &__filter {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
}
</style>
