<template>
<body>
  <section class="container_top">
    <Header />
    <ProgressBar />
  </section>
  <div class="display_button">
    <ChapterTitleAndReturn />
    <NextChapterButton />
  </div>
</body>
</template>

<script>
import Header from "@/components/partials/Chapitre.vue";
export default {
  name: "Chapter",
  components: {
    Header
  },
  data() {
    return {
      "chapitre-0": {
        currentChapter: "00",
        chapter: "07",
        value: 10,
        title: "Bienvenue dans la mer de Corail",
        reviewChapter: "Revoir l'introduction",
        redirectionPageTo: "/intro",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/chap1"
      },
      "chapitre-1": {
        currentChapter: "01",
        chapter: "07",
        value: 25,
        title: "Qu'est-ce qu'un corail?",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap0",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/chap2"
      },
      "chapitre-2": {
        currentChapter: "02",
        chapter: "07",
        value: 35,
        title: "Quel est leur rôle?",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap1",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/chap3"
      },
      "chapitre-3": {
        currentChapter: "03",
        chapter: "07",
        value: 50,
        title: "Mais que se passe t-il ?",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap2",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/chap4"
      },
      "chapitre-4": {
        currentChapter: "04",
        chapter: "07",
        value: 60,
        title: "Le blanchissement devient régulier",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap3",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/chap5"
      },
      "chapitre-5": {
        currentChapter: "05",
        chapter: "07",
        value: 75,
        title: "Aujourd’hui, 50% sont déjà morts",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap4",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/chap6"
      },
      "chapitre-6": {
        currentChapter: "06",
        chapter: "07",
        value: 90,
        title: "Il est encore temps d'agir",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap5",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/assos"
      }
    };
  }
};
</script>

<style>
</style>