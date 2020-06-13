<template>
  <div class="karanga" id="karanga">

    <ArticleImg :title="title" :description="description" />

  </div>
</template>

<script>
export default {
  data() {
    return {
      // img: require("../assets/img/backgroung-maoris3.png"),
      title: "karanga",
      description:
        "Un Karanga (appel, invocation) est un élément du protocole culturel du peuple maori d'Aotearoa en Nouvelle-Zélande. C'est un échange d'appels qui fait partie du powhiri, une cérémonie d'accueil maorie. Elle a lieu lorsqu'un groupe de visiteurs se déplace sur le marae ou dans la zone de réunion officielle. Le Karanga est effectué presque exclusivement par des femmes et en langue maorie, et est initié par le tangata whenua ou des hôtes, et répondu par les visiteurs.",


      scrollTop: 0


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
  height: 100vh;
}
</style>
