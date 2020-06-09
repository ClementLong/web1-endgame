<template>
  <div class="home">
    <HelloWorld msg="Les coraux, la vie se meurt" />
    <NextChapterButton msg="PASSEZ AU CHAPITRE SUIVANT" /> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NextChapterButton from "@/components/next-chapter_button.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    NextChapterButton
  }
};
</script>
