<template>
  <div class="hongi">
    <ArticleImg
      :title="title"
      :description="description"
      :img="img"
    ></ArticleImg>
    <timeLine />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // img: require("../assets/img/backgroundHongi.svg"),
      title: "HONGI",
      description:
        "Le hongi est le salut traditionnel maori, l’origine de ce geste remonterait à la création de l'humanité.",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.hongi {
  background-image: url("../assets/img/backgroundHongi.svg");
  @include backgroundImg(no-repeat, cover, top center);
  width: 100vw;
  height: 100vh;
}
</style>
