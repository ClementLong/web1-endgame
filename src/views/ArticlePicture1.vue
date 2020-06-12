<template>
  <div>
    <ArticlePicture title="Salut" text="test" />
    <router-link :to = "{name: 'Chapitre1Quizz1'}">
      <StartButton class="quizzButton" msg="répondre au quizz" />
    </router-link>
  </div>
</template>

<script>
import ArticlePicture from "@/components/partials/ArticlePicture.vue";
import StartButton from "@/components/start_button.vue";
export default {
  components: {
    ArticlePicture,
    StartButton
  }
}
</script>

<style>
  .quizzButton {
    position: absolute;
    bottom: 200px;
    left: 150px;
  }
</style>