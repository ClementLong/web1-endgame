<template>
  <div class="haka">
    <Muted />
    <ArticleVideo :video="video" />
    <ArticleImg :title="title" :description="description" />
    <TimeLine />
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: require("@/assets/video/video.mp4"),
      title: "haka",
      description:
        "Le haka est une danse chantée, il s’agit d’un rituel pratiqué par les Maoris lors de conflits, visant à impressionner les adversaires. cette danse complexe est une expression de la passion, de la vigueur et de l'identité de ce peuple. Les Maoris l'ont rendu mondialement célèbre par l'intermédiaire de l'équipe de rugby à XV de Nouvelle-Zélande, les All Blacks, qui l'interprètent avant leurs matchs depuis 1905.",
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
      if (this.scrollTop >= maxScrolldown) {
        window.location.href = "http://localhost:8080/Hangi";
      }
      if (this.scrollTop < 1) {
        window.location.href = "http://localhost:8080/Hongi";
      }
    },
  },
};
</script>
