<template>
  <div class="articleImg">
    <h1 class="articleImg__title">{{ title }}</h1>
    <p class="articleImg__description">{{ description }}</p>
    <img class="articleImg__img" :src="img" />
    <div v-if="filter" class="articleImg__filter">{{ filter }}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    description: String,
    filter: String,
  },
};
</script>

<style lang="scss" scoped>
.articleImg {
  &__title {
    font-size: 36px;
    line-height: 49px;
    color: #ffffff;
    font-family: "CinzelDecorative";
    margin-top: 100px;
    margin-bottom: 100px;
  }
  &__description {
    font-family: "Roboto";
    font-size: 24px;
    color: #ffffff;
  }
  &__img {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  &__filter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
  }
}
</style>
