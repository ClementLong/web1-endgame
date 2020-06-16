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
      title: "Hongi",
      description:
        "Le hongi est le salut traditionnel maori, l’origine de ce geste remonterait à la création de l'humanité. À la création de la première femme, Hine ahu one ' femme faite de terre ', par le dieu créateur Tane, celui-ci l'aurait fabriquée avec de la glaise avant de lui insuffler la vie par les narines. D'où cet échange de souffle appelé ' ha ', ou le souffle de la vie.Aujourd’hui, cette pratique est utilisée par des membres du gouvernement ou de la famille royale lors de rencontres officielles.",
    };
  },
  mounted() {
    window.scrollTo(0, 1);
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      this.scrollTop = event.target.scrollingElement.scrollTop;
      var maxScrolldown =
        event.target.scrollingElement.scrollHeight -
        event.target.scrollingElement.clientHeight;
      //console.log(maxScrolldown)
      //console.log(event.target.scrollingElement.scrollTop)
      if (this.scrollTop >= maxScrolldown) {
        window.location.href = "http://localhost:8080/Haka";
      }
      if (this.scrollTop < 1) {
        window.location.href = "http://localhost:8080/Karanga";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.hongi {
  background-image: url("../assets/img/BackgroundTatouage6.svg");
  @include backgroundImg(no-repeat, cover, top center);
  width: 100vw;

  height: 101vh;

  &__filter {
    background-color: $filterColor;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
}
</style>
