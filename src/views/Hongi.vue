<template>
  <div class="hongi">
    <div class="hongiContenair">
      <ArticleImg
        :title="title"
        :description="description"
        :img="img"
      ></ArticleImg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../assets/img/backgroundHongi.svg"),
      title: "HONGI",
      description:
        "Le hongi est le salut traditionnel maori, l’origine de ce geste remonterait à la création de l'humanité.",
    };
  },
};
</script>

<style lang="scss" scoped>
// .hongiContenair {
//   width: 100vw;
//   height: 100vh;
//   background-image: url("../assets/img/backgroundHongi.svg");
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: top center;
// }
</style>
