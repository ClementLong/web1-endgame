<template>
  <div class="largeInformations">
    <div class="largeInformations__img"></div>
    <!-- <div class="largeInformations__img">
      <img :src="img" alt="" />
    </div> -->
    <div class="largeInformations__contenair">
      <div classe="largeInformations__infos">
        <div class="largeInformations__title">
          <h1>{{ title }}</h1>
        </div>

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
    filter: String,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.largeInformations {
  background-image: url(../assets/img/backgroundTatouage4.svg);
  @include backgroundImg(no-repeat, cover, top center);
  width: 80vw;
  height: 200vh;
  right: 0;
  top: 0;
  z-index: -1;
  position: absolute;

  &__contenair {
    width: 80vw;
    height: 100vh;
    position: absolute;
    right: 0;
  }

  text-align: justify;

  &__img {
    // background-image: url(../assets/img/backgroundTatouage4.svg);
    // @include backgroundImg(no-repeat, cover, top center);
    // width: 80vw;
    // height: 100vh;
    // right: 0;
    // top: 0;
    // z-index: -1;
    // position: absolute;
  }

  &__info {
  }

  // @include flexbox(column, center, center);
  // display: flex;
  // justify-content: column;
  // flex-direction: center;
  // align-items: center;

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

    &--first {
      margin-top: 80px;
    }

    &--second {
      margin-top: 200px;
    }

    &--tirdh {
      margin-top: 200px;
    }

    &--fourth {
      margin-top: 200px;
    }
  }

  &__infos {
    text-align: justify;
    // display: flex;
    position: relative;
  }
  &__title {
    color: #ffffff;
    font-family: "CinzelDecorative";
    font-size: 36px;
  }
}
</style>
