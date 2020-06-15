<template>
  <div class="hongi">
    <ArticleImg
      :title="title"
      :description="description"
      :img="img"
    ></ArticleImg>
    <div class="hongi__filter"></div>
    <timeLine />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // img: require("../assets/img/backgroundHongi.svg"),
      title: "Le hongi",
      description:
        "Le hongi est le salut traditionnel maori, l’origine de ce geste remonterait à la création de l'humanité.",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.hongi {
  background-image: url("../assets/img/BackgroundTatouage6.svg");
  @include backgroundImg(no-repeat, cover, top center);
  width: 100vw;
  height: 100vh;

  &__filter {
    background-color: $filterColor;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
}
</style>
