<template>
<div class="header">
    <ProgressBar />
  <NextChapterButton msg="PASSER AU CHAPITRE SUIVANT" />
</div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import NextChapterButton from "@/components/next-chapter_button.vue";
export default {
    components: {
      ProgressBar,
      NextChapterButton
    }
}
</script>
    
<style>

</style>    