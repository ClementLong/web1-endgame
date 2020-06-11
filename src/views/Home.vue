<template>
  <div class="home">
    <HelloWorld msg="Les coraux, la vie se meurt" />
    <StartArticle dive="Pour une immersion totale à travers ce webdocumentaire, 
il est préférable de porter un casque audio." use="Utilisez simplement votre doigt pour naviguer." />
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import StartArticle from "@/components/Frame-start_article.vue";

export default {
    name: "Home",
    components: {
      HelloWorld,
      StartArticle
    }
  };
</script>
