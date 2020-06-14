<template>
  <div class="largeInformations">
    <div classe="largeInformations__infos">
      <h1 class="largeInformations__title">{{ title }}</h1>

      <div>
        <p
          class="largeInformations__description largeInformations__description--first"
        >
          {{ descriptionFirst }}
        </p>
      </div>

      <div>
        <p
          class="largeInformations__description largeInformations__description--second"
        >
          {{ descriptionSecond }}
        </p>
      </div>
      <div>
        <p
          class="largeInformations__description largeInformations__description--tirdh"
        >
          {{ descriptionThird }}
        </p>
      </div>

      <div>
        <p
          class="largeInformations__description largeInformations__description--fourth"
        >
          {{ descriptionFourth }}
        </p>
      </div>
    </div>
    <img :src="img" alt="" class="largeInformations__img" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    descriptionFirst: String,
    descriptionSecond: String,
    descriptionThird: String,
    descriptionFourth: String,
    filter: String,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.largeInformations {
  &__title {
    font-size: 36px;
    line-height: 49px;
    color: #ffffff;
    font-family: "CinzelDecorative";
  }

  &__description {
    width: 562px;
    font-family: "Roboto";
    font-size: 24px;
    color: #ffffff;
  }
  &__img {
    left: 0;
    top: 0;
    z-index: -1;
    position: absolute;
  }
  &__infos {
    display: flex;
    position: relative;
  }
  &__title {
    color: #ffffff;
    font-family: "CinzelDecorative";
    font-size: 36px;
  }
}
</style>
