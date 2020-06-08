<template>
  <div class="home">
    <HelloWorld msg="Les coraux, la vie se meurt" />
    <ChapterTitleAndReturn
      currentChapter="01"
      chapter="07"
      title="Mais que ce passe t-il ?"
      reviewChapter="revoir le chapitre précédent"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ChapterTitleAndReturn from "@/components/ChapterTitleAndReturn.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ChapterTitleAndReturn
  }
};
</script>
