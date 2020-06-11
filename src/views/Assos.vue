<template>
<body>
  <section class="container__top">
    <Header />
    <ProgressBar value="100" />
    <router-link class="previousChapter" to="/chap6">
      <ChapterTitleAndReturn
        currentChapter="07"
        chapter="07"
        title="Soutenez les associations"
        reviewChapter="revoir le chapitre précédent"
      />
    </router-link>
  </section>
</body>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ChapterTitleAndReturn from "@/components/ChapterTitleAndReturn.vue";

export default {
  name: "Chapitre7",
  components: {
    Header,
    ProgressBar,
    ChapterTitleAndReturn
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

header {
  display: flex;
}
</style>