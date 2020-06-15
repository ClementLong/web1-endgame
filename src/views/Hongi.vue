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
      var maxScrolldown = event.target.scrollingElement.scrollHeight - event.target.scrollingElement.clientHeight;
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
  background-image: url("../assets/img/backgroundHongi.svg");
  @include backgroundImg(no-repeat, cover, top center);
  width: 100vw;
  height: 101vh;
}
</style>