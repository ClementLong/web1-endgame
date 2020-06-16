<template>
  <div class="wero" id="wero">
    <ArticleImg :title="msg" :description="msg2" :filter="filter"></ArticleImg>
    <video
      id="myVideo"
      name="test"
      src="../assets/video/video-wero.mp4"
      muted
    ></video>
    <TimeLine />
  </div>
</template>

//
<script>
// export default {
//   data() {
//     return {
//   msg2:
//     "Lors de l’accueil des manuhiri (visiteurs) un des guerriers de la tribu s’avance pour effectuer une danse: Le Wero.Cette danse de guerrier permet au guerrier de confirmer les intentions des manhuri (visiteurs) et de les dissuader de les attaquer.Il dépose ensuite un rautapu (feuille) que le manuhiri (visiteur) ramasse en signe de paix ",
//   msg: "WERO",
//       filter: "filter",
//     };
//   },
// };

export default {
  data() {
    return {
      msg: "WERO",
      //   msg2:
      //     "Lors de l’accueil des manuhiri (visiteurs) un des guerriers de la tribu s’avance pour effectuer une danse: Le Wero.Cette danse de guerrier permet au guerrier de confirmer les intentions des manhuri (visiteurs) et de les dissuader de les attaquer.Il dépose ensuite un rautapu (feuille) que le manuhiri (visiteur) ramasse en signe de paix ",
      filter: "filter",
    };
  },
  mounted() {
    this.myFunction();
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    myFunction: function() {
      var x = document.getElementById("myVideo");
      x.play();
    },
    handleScroll (event) {
      this.scrollTop = event.target.scrollingElement.scrollTop
      var maxScrolldown = event.target.scrollingElement.scrollHeight - event.target.scrollingElement.clientHeight;
      //console.log(this.scrollTop)
      if (this.scrollTop >= maxScrolldown) {
        window.location.href = "karanga";
      }
    },
  },
};
</script>