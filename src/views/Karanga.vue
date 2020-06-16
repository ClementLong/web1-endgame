<template>
  <div class="karanga" id="karanga">
    <Muted />
    <ArticleImg :title="title" :description="description" />
    <TimeLine />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "karanga",
      description:
        "Le Karanga, qui signifie appeler, invoquer, est une des étapes de la cérémonie du powhiri. C'est un échange d'appels chantés presque exclusivement par les femmes dans la langue maorie, le Reo Maori. Il a lieu lorsqu'un groupe de visiteurs se déplace sur le marae ou dans la zone de réunion officielle, dans le but de rendre hommage aux morts et de se référer à la raison de la réunion des groupes.",

      scrollTop: 1
    };
  },
  mounted() {
    window.scrollTo(0, 1);
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      this.scrollTop = event.target.scrollingElement.scrollTop;

      var maxScrolldown =
        event.target.scrollingElement.scrollHeight -
        event.target.scrollingElement.clientHeight;
      //console.log(maxScrolldown)
      //console.log(event.target.scrollingElement.scrollTop)
      if (this.scrollTop >= maxScrolldown) {
        window.location.href = "http://localhost:8080/hongi";
      }
      if (this.scrollTop < 1) {
        window.location.href = "http://localhost:8080/wero";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.karanga {
  background-image: url(../assets/img/backgroundKaranga.png);
  @include backgroundImg(no-repeat, cover, top center);
  width: 100vw;
  height: 101vh;
}
</style>
