<template>
  <div class="hangi">
    <ArticleImg
      :title="title"
      :description="description"
      :img="img"
    ></ArticleImg>
    <TimeLine />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // img: require("../assets/img/backgroundHangi.svg"),
      title: "HANGI",
      description:
        " Le hangi traditionnel consiste à envelopper des paniers d’aliments contenant de la viande et des légumes (patate douce, maïs, carotte…) et de les cuire dans un trou creusé dans le sol au fond duquel sont déposées des pierres volcaniques chauffées. On trouve ce plat le plus souvent dans la région de Rotorua au Nord de l’île..",
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
