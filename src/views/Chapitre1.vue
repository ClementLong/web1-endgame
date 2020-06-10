<template>
  <section class="chapitre1">
    <section class="container__top">
      <Header />
      <ProgressBar value="12.5" />
      <ChapterTitleAndReturn
        currentChapter="01"
        chapter="07"
        title="Qu’est-ce qu’un corail ?"
        reviewChapter="revoir le chapitre précédent"
      />
    </section>
    <section class="container__bottom">
      <NextChapterButton msg="passer au chapitre suivant" />
    </section>
  </section>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ChapterTitleAndReturn from "@/components/ChapterTitleAndReturn.vue";
import NextChapterButton from "@/components/next-chapter_button.vue";

export default {
  name: "Chapitre1",
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

.container__top {
  @include flexbox(column, center, inherit);
}
</style>