<template>
  <div class="largeInformations">
    <div class="largeInformations__img">
      <img :src="img" alt="" />
    </div>
    <div class="largeInformations__contenair">
      <div class="largeInformations__title">
        <h1>{{ title }}</h1>
      </div>

      <div class="">
        <p
          class="largeInformations__description largeInformations__description--first"
        >
          {{ descriptionFirst }}
        </p>
      </div>

      <div class="largeInformations__position">
        <p
          class="largeInformations__description largeInformations__description--second"
        >
          {{ descriptionSecond }}
        </p>
      </div>
      <div class="">
        <p
          class="largeInformations__description largeInformations__description--tirdh"
        >
          {{ descriptionThird }}
        </p>
      </div>

      <div class="largeInformations__position">
        <p
          class="largeInformations__description largeInformations__description--fourth"
        >
          {{ descriptionFourth }}
        </p>
      </div>

      <div class="largeInformations__titleSecond ">
        <h2>{{ SecondTitle }}</h2>
      </div>
    </div>
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
    SecondTitle: String,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.largeInformations {
  width: 80vw;
  height: 100vh;
  position: absolute;
  right: 0;

  &__img {
    @include backgroundImg(no-repeat, cover, top center);
    width: 80vw;
    height: 80vh;
    right: 0;
    top: 0;
    z-index: -1;
    position: absolute;
  }
  // background-image: url(../assets/img/backgroundTatouage4.svg);
  // @include backgroundImg(no-repeat, cover, top center);
  // width: 80vw;
  // height: 200vh;

  &__title {
    margin-top: 60px;
  }

  &__title,
  &__titleSecond {
    text-align: center;
    font-size: 36px;
    line-height: 49px;
    color: #ffffff;
    font-family: "CinzelDecorative";
  }

  &__description {
    max-width: 562px;
    margin-left: 20px;
    margin-right: 20px;
    font-family: "Roboto";
    text-align: justify;
    font-size: 24px;
    color: #ffffff;

    &--first {
      margin-top: 80px;
    }

    &--second,
    &--tirdh,
    &--fourth {
      margin-top: 200px;
    }
  }
}

.largeInformations__position {
  display: flex;
  justify-content: flex-end;
}
</style>
