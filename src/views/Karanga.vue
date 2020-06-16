<template>
  <div class="karanga" id="karanga">
    <ArticleImg :title="title" :description="description" />
    <TimeLine />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // img: require("../assets/img/backgroung-maoris3.png"),
      title: "karanga",
      description:
        "Le Karanga, qui signifie appeler, invoquer, est une des étapes de la cérémonie du powhiri. C'est un échange d'appels chantés presque exclusivement par les femmes dans la langue maorie, le Reo Maori. Il a lieu lorsqu'un groupe de visiteurs se déplace sur le marae ou dans la zone de réunion officielle, dans le but de rendre hommage aux morts et de se référer à la raison de la réunion des groupes.",

      scrollTop: 0,
    };
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.scroll);
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  },
  methods: {
    scroll(event) {
      this.scrollTop = event.target.scrollingElement.scrollTop;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.karanga {
  background-image: url(../assets/img/backgroundKaranga.png);
  @include backgroundImg(no-repeat, cover, top center);
  width: 100vw;
  height: 100vh;
}
</style>
