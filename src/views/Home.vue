<template>
  <div class="home">
    <HelloWorld msg="Les coraux, la vie se meurt" />
    <DisclaimerArticle
      text="Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC.
    Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation.
    Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié."
    />
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
import DisclaimerArticle from "@/components/Frame-disclaimer_article.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import ChapterTitleAndReturn from "@/components/ChapterTitleAndReturn.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    DisclaimerArticle,
    ChapterTitleAndReturn
  }
};
</script>
