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
        " Hangi est un plat traditionnel en Nouvelle-Zélande. Le hangi n’est pas seulement un plat, mais aussi un mode de cuisson ancestral. On trouve ce plat le plus souvent dans la région de Rotorua au Nord de l’île.Le hangi traditionnel consiste à envelopper des paniers d’aliments contenant de la viande (poulet ou autres) et des légumes (patate douce, pomme de terre etc…)."
    };
  },
  mounted () {
    window.scrollTo(0, 1)
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      this.scrollTop = event.target.scrollingElement.scrollTop;
      if (this.scrollTop < 1) {
        window.location.href = "http://localhost:8080/Haka";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.hangi {
  background-image: url("../assets/img/backgroundHangi.svg");
  @include backgroundImg(no-repeat, cover, top center);
  width: 100vw;
  height: 101vh;
}
</style>
