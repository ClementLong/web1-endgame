<template>
  <div class="hangi">
    <ArticleImg
      :title="title"
      :description="description"
      :img="img"
    ></ArticleImg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // img: require("../assets/img/backgroundHangi.svg"),
      title: "HANGI",
      description:
        " Hangi est un plat traditionnel en Nouvelle-Zélande. Le hangi n’est pas seulement un plat, mais aussi un mode de cuisson ancestral. On trouve ce plat le plus souvent dans la région de Rotorua au Nord de l’île.Le hangi traditionnel consiste à envelopper des paniers d’aliments contenant de la viande (poulet ou autres) et des légumes (patate douce, pomme de terre etc…).",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.hangi {
  background-image: url("../assets/img/backgroundHangi.svg");
  @include backgroundImg(no-repeat, cover, top center);
  width: 100vw;
  height: 100vh;
}
</style>
