<template>
<div class="main">
  <Header />
  <ProgressBar />
  <router-link class="nextChapter" to="/chap1">
    <NextChapterButton msg="PASSER AU CHAPITRE SUIVANT" />
  </router-link>
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
    }
}
</script>
    
<style>

</style>    