<template>
  <div class="articleImg">
    <div class="articleImg__container">
      <h1 class="articleImg__title">{{ title }}</h1>
      <p class="articleImg__description">{{ description }}</p>
    </div>
    <!-- <img :src="img" alt="" class="articleImg__img" /> -->
    <div class="articleImg__img"></div>
    <div class="articleImg__filter"></div>

    <!-- <div v-if="filter" class="articleImg__filter">{{ filter }}</div> -->
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    description: String
    // filter: String //voir avec Bastien si on passe le filtre en props ou en css
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.articleImg {
  &__container {
    @include flexbox(column, center, center);
    height: 80vh;
    position: absolute;
    z-index: 1;
  }
  &__title {
    color: white;
    font-family: "CinzelDecorative";
    margin-bottom: 100px;
    font-size: 24px;
    text-transform: uppercase;

    @include large {
      font-size: 28px;
    }

    @include extraLarge {
      font-size: 38px;
    }
  }
  &__description {
    font-family: "Roboto";

    font-size: 16px;
    color: $white;
    line-height: 24px;
    text-align: center;
    padding-right: 10px;
    padding-left: 10px;

    @include medium {
      font-size: 18px;
      line-height: 27px;
      padding-right: 14px;
      padding-left: 14px;
    }
    @include large {
      font-size: 22px;
      line-height: 33px;
      padding-right: 110px;
      padding-left: 110px;
      padding-right: 20px;
      padding-left: 20px;
    }
    @include extraLarge {
      font-size: 24px;
      line-height: 36px;
      padding-right: 160px;
      padding-left: 160px;
    }
  }

  &__filter {

    position: absolute;
    background-color: $filterColor;
    width: 100vw;
    height: 100vh;
    // z-index: -1;
    top: 0;
  }

}
</style>
