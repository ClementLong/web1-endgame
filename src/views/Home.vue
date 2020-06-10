<template>
  <div class="home">
    <!-- <HelloWorld msg="Les coraux, la vie se meurt" /> -->
	<IntroductionTitle />
	<ProgressBar />
    <!-- <NextChapterButton msg="PASSEZ AU CHAPITRE SUIVANT" /> 
    <DisclaimerArticle
      text="Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC.
    Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation.
    Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié."/>
    <StartArticle dive="Pour une immersion totale à travers ce webdocumentaire, 
    il est préférable de porter un casque audio."
    use="Utilisez simplement votre doigt pour naviguer."/>
    <PopUpArticle title="Animal, minéral ou végétal?"
    text="Les coraux sont constitués de milliers de 
      petits organismes appelés polybes, 
      principalement formé d’une bouche et 
      d’un estomac.

      Le squelette des polypes est constitué à 
      l’exterieur de ses tissus et se compose de carbonate 
      de calcium tout comme la roche calcaire.
      Le corail est également composé de micro algues
      qui vivent dans les cellules des polypes.
      Il est donc à la fois animal, minéral et végétale!"/>
    <AssosArticle title="Envie d’oeuvrer pour l’avenir  des coraux ?"
      text="Clique sur l’association de ton choix !"/>
    />-->
    <!-- <ChapterTitleAndReturn
      currentChapter="01"
      chapter="07"
      title="Mais que ce passe t-il ?"
      reviewChapter="revoir le chapitre précédent"
    />-->
    <!-- <Controls /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import DisclaimerArticle from "@/components/Frame-disclaimer_article.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import IntroductionTitle from "@/components/IntroductionTitle.vue";
import ProgressBar from "@/components/ProgressBar.vue";
// import NextChapterButton from "@/components/next-chapter_button.vue";
// import StartArticle from "@/components/Frame-start_article.vue";
// import PopUpArticle from "@/components/partials/Pop-up_article.vue";
// import AssosArticle from "@/components/Frame-assos_article.vue";
// import ChapterTitleAndReturn from "@/components/ChapterTitleAndReturn.vue";
// import Controls from "@/components/Controls.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
	IntroductionTitle,
	ProgressBar,
    // Controls,
    // NextChapterButton,
    // DisclaimerArticle,
    // StartArticle,
    // PopUpArticle,
    // AssosArticle,
    // ChapterTitleAndReturn
  }
};
</script>
