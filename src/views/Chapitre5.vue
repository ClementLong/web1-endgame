<template>
<body>
  <section class="container__top">
    <Header />
    <ProgressBar value="70" />
    <router-link class="previousChapter" to="/chap4">
      <ChapterTitleAndReturn
        currentChapter="05"
        chapter="07"
        title="93% des coraux ont blanchis"
        reviewChapter="revoir le chapitre précédent"
      />
    </router-link>
  </section>
  <section class="container__bottom">
    <router-link class="nextChapter" to="/chap6">
        <NextChapterButton msg="PASSER AU CHAPITRE SUIVANT" />
  </router-link>
  </section>
</body>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ChapterTitleAndReturn from "@/components/ChapterTitleAndReturn.vue";
import NextChapterButton from "@/components/next-chapter_button.vue";

export default {
  name: "Chapitre5",
  components: {
    Header,
    ProgressBar,
    ChapterTitleAndReturn,
    NextChapterButton
  }
};
</script>
<style scoped lang="scss">
body {
  position: relative;
  @include format_vw-vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-image: url(../assets/img/background-temporaire-chap1.png);
}
</style>