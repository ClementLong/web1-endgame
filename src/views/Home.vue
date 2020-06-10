<template>
  <div class="home">
    <HelloWorld msg="Les coraux, la vie se meurt" />
<<<<<<< Updated upstream
    <StartButton msg="commencer" />
    <StartArticle dive="hello" use="comme ça" />
=======
    <!-- <IntroductionTitle />
    <ProgressBar />
    <NextChapterButton msg="PASSEZ AU CHAPITRE SUIVANT" />
    <DisclaimerArticle
      text="Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié."
    />
    <StartArticle
      dive="Pour une immersion totale à travers ce webdocumentaire, il est préférable de porter un casque audio."
      use="Utilisez simplement votre doigt pour naviguer."
    />
    <PopUpArticle
      title="Animal, minéral ou végétal?"
      text="Les coraux sont constitués de milliers de petits organismes appelés polybes, principalement formé d’une bouche et 
        d’un estomac.
        Le squelette des polypes est constitué à 
        l’exterieur de ses tissus et se compose de carbonate 
        de calcium tout comme la roche calcaire.
        Le corail est également composé de micro algues
        qui vivent dans les cellules des polypes.
        Il est donc à la fois animal, minéral et végétale!"
    />
    <AssosArticle
      title="Envie d’oeuvrer pour l’avenir  des coraux ?"
      text="Clique sur l’association de ton choix !"
    />
    <ChapterTitleAndReturn
      currentChapter="01"
      chapter="07"
      title="Mais que ce passe t-il ?"
      reviewChapter="revoir le chapitre précédent"
    />
    <Controls />
    <StartButton msg="COMMENCER" />-->
    <!-- <Quizz
      question="Qu’apporte l’écosystème recifal à son environnement ?"
      responseA="Un joli spot pour faire des photos super instagrammable !"
      responseB="Un plateau de fruits de mer"
      responseC="Un habitât, et une protection à ses habitants"
      responseD="Un plateau de fruits de mer"
    />-->
>>>>>>> Stashed changes
  </div>
</template>
<script>
// @ is an alias to /src
<<<<<<< Updated upstream
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
=======
//import DisclaimerArticle from "@/components/Frame-disclaimer_article.vue";
import HelloWorld from "@/components/HelloWorld.vue";
// import IntroductionTitle from "@/components/IntroductionTitle.vue";
// import ProgressBar from "@/components/ProgressBar.vue";
// import NextChapterButton from "@/components/next-chapter_button.vue";
// import StartArticle from "@/components/Frame-start_article.vue";
// import PopUpArticle from "@/components/partials/Pop-up_article.vue";
// import AssosArticle from "@/components/Frame-assos_article.vue";
// import ChapterTitleAndReturn from "@/components/ChapterTitleAndReturn.vue";
// import Controls from "@/components/Controls.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
// import NextChapterButton from "@/components/next-chapter_button.vue";
// import StartButton from "@/components/start_button.vue";
// import Quizz from "@/components/Quizz.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
    // IntroductionTitle,
    // ProgressBar,
    // Controls,
    // DisclaimerArticle,
    // StartArticle,
    // PopUpArticle,
    // AssosArticle,
    // ChapterTitleAndReturn,
    // NextChapterButton,
    // StartButton
    // Quizz
  }
};
>>>>>>> Stashed changes
</script>
