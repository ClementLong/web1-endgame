<template>
  <div class="wero" id="wero">
    <ArticleVideo :video="video" />
    <ArticleImg :title="title" :description="description"></ArticleImg>
    <TimeLine />
  </div>
</template>

<script>
import contentServices from "@/services/contentService.js";
export default {
  data() {
    return {
      title: "wero",
      description:
        "Lors de l’accueil des manuhiri (visiteurs) un des guerriers de la tribu s’avance pour effectuer une danse Le Wero Cette danse permet au guerrier de confirmer les intentions des manhuri (visiteurs) et de les dissuader de les attaquer. Il dépose ensuite un rautapu (feuille) que le manuhiri (visiteur) ramasse en signe de paix",
      video: require("@/assets/video/video-wero.mp4")
    };
  },
  mounted() {
    contentServices.getArticle().then(response => {
      console.log(response);
    });
  }
};
</script>

<style lang="scss" scoped></style>
