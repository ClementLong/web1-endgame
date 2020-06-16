<template>
  <div>
    <Muted />
    <ArticleVideo :video="video" />
    <ArticleImg :title="title" :description="description"></ArticleImg>

    <TimeLine />
  </div>
</template>
<script>
// import contentServices from "@/services/contentService.js";
export default {
  data() {
    return {
      filtered: false,
      hovered: "weroBackgroundFilter",
      title: "wero",
      description:
        "Lors de l’accueil des manuhiri (visiteurs) un des guerriers de la tribu s’avance pour effectuer une danse : le Wero. Cette danse permet au guerrier de confirmer les intentions des manhuri (visiteurs) et de les dissuader de les attaquer. Il dépose ensuite un rautapu (feuille) que le manuhiri (visiteur) ramasse en signe de paix.",
      video: require("@/assets/video/video-wero.mp4")
    };
  },
  // mounted() {
  //   contentServices.getArticles().then(response => {
  //     console.log(response.data.articles);
  //   });
  // },

  mounted() {
    this.myFunction();
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    myFunction: function() {
      var x = document.getElementById("myVideo");
      x.play();
    },
    handleScroll(event) {
      this.scrollTop = event.target.scrollingElement.scrollTop;
      var maxScrolldown =
        event.target.scrollingElement.scrollHeight -
        event.target.scrollingElement.clientHeight;
      if (this.scrollTop >= maxScrolldown) {
        window.location.href = "http://localhost:8080/karanga";
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
