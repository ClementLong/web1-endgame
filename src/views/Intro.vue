<template>
<div class="main">
  <Header />
  <ProgressBar />
  <router-link class="nextChapter" to="/chap1">
    <NextChapterButton msg="PASSER AU CHAPITRE SUIVANT" />
  </router-link>
  <!-- Pour tester il faut mettre un fichier "video.mp4" dans le dossier public -->
  <video src="video.mp4" autoplay loop> 
    Votre navigateur ne supporte pas la vidéo. 
  </video>
</div>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import NextChapterButton from "@/components/next-chapter_button.vue";

export default {
  components: {
    Header,
    ProgressBar,
    NextChapterButton
  },
}
</script>
    
<style scoped lang="scss">

.main {
  max-width: 100vw;
  max-height: 100vh;
}

header {
  display: flex;
}

video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

</style>    