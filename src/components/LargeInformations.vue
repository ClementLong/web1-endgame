<template>
  <div class="largeInformations">
    <div class="largeInformations__filter">
      <h1 class="largeInformations__title">{{ title }}</h1>
      <p
        class="largeInformations__description largeInformations__description--first"
      >
        {{ descriptionFirst }}
      </p>
      <p
        class="largeInformations__description largeInformations__description--second"
      >
        {{ descriptionSecond }}
      </p>
      <p
        class="largeInformations__description largeInformations__description--tirdh"
      >
        {{ descriptionThird }}
      </p>
      <p
        class="largeInformations__description largeInformations__description--fourth"
      >
        {{ descriptionFourth }}
      </p>
      <img src{{img}} alt="" class="largeInformations__img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LargeInformations",
  props: {
    title: String,
    descriptionFirst: String,
    descriptionSecond: String,
    descriptionThird: String,
    descriptionFourth: String,
    img: String
  }
};
</script>

<style lang="scss" scoped>
.LargeInformations {
  &__title {
    font-size: 36px;
    line-height: 49px;
    color: #ffffff;
    font-family: "CinzelDecorative regular";
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

  // &__img {
  // }

  // &__icon {
  // }
}
</style>
