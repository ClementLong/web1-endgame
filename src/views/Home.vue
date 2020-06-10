<template>
  <div class="home">
    <HelloWorld msg="Les coraux, la vie se meurt" />
    <StartButton msg="commencer" />
    <StartArticle dive="hello" use="comme ça" />
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import StartButton from "@/components/start_button.vue";
import StartArticle from "@/components/Frame-start_article.vue";

export default {
    name: "Home",
    components: {
      HelloWorld,
      StartButton,
      StartArticle
    }
  };
</script>
