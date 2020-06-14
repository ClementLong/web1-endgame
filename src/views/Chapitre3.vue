<template>
  <body>
    <section class="container__top">
      <Header />
      <ProgressBar value="40" />
      <router-link class="previousChapter" to="/chap2">
        <ChapterTitleAndReturn
          currentChapter="03"
          chapter="07"
          :title="data.title"
          reviewChapter="revoir le chapitre précédent"
        />
      </router-link>
    </section>
    <section class="container__bottom">
      <router-link class="nextChapter" to="/chap4">
        <NextChapterButton msg="PASSER AU CHAPITRE SUIVANT" />
      </router-link>
    </section>
    <video :src="data.video" autoplay loop>
      Votre navigateur ne supporte pas la vidéo.
    </video>
  </body>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ChapterTitleAndReturn from "@/components/ChapterTitleAndReturn.vue";
import NextChapterButton from "@/components/next-chapter_button.vue";
import axios from "axios";


export default {
  name: "Chapitre3",
  components: {
    Header,
    ProgressBar,
    ChapterTitleAndReturn,
    NextChapterButton,
  },
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    axios
      .get("http://167.71.55.113/api/page/6")
      .then((response) => (this.data = response.data.data));
      document.querySelector('video').play();
  },
};
</script>
<style scoped lang="scss">

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
