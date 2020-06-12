<template>
  <div class="karanga" id="karanga">
    <article-img :title="msg" :description="msg2" :img="img"></article-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../assets/img/backgroung-maoris3.png"),
      msg2:
        "Un Karanga (appel, invocation) est un élément du protocole culturel du peuple maori d'Aotearoa en Nouvelle-Zélande. C'est un échange d'appels qui fait partie du powhiri, une cérémonie d'accueil maorie. Elle a lieu lorsqu'un groupe de visiteurs se déplace sur le marae ou dans la zone de réunion officielle. Le Karanga est effectué presque exclusivement par des femmes et en langue maorie, et est initié par le tangata whenua ou des hôtes, et répondu par les visiteurs.",
      msg: "KARANGA",
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

<style lang="scss" scoped></style>
