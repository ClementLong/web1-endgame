<template>
  <div class="moreInformations">
    <img :src="img" alt="" class="moreInformations__img" />
    <h1 class="moreInformations__title">{{ title }}</h1>
    <p class="moreInformations__description">{{ description }}</p>
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
    img: String,
  },
};
</script>

<style lang="scss" scoped>
.moreInformations {
  &__title {
    font-size: 36px;
    line-height: 49px;
    color: white;
    font-family: "CinzelDecorative";
    display: inline-block;
    margin-left: 60px;
    margin-top: 109px;
  }

  &__description {
    font-family: "Roboto";
    font-size: 24px;
    color: white;
    display: block;
    margin-top: 10vh;
    margin-left: 45vw;
    margin-right: 10vw;
    text-align: left;
  }

  &__img {
    display: inline;
    left: 0;
    height: 100%;
    top: 0%;
    position: absolute;
  }

  &__icon {
    margin-top: 210px;
  }

  &__filter {
    background-color: #353535;
    width: 100vw;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
}

</style>