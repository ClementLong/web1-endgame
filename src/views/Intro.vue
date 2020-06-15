<template>
  <div class="homepage__video">
    <video
      id="myVideo"
      name="test"
      src="../assets/video/firstpage.mp4"
      muted
    ></video>
    <div class="homepage__text" id="test">
      <h1>VOYAGE À LA DECOUVERTE DE LA CULTURE MAORI</h1>
    </div>
    <ArticleVideo :filter="filter"></ArticleVideo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filter: "filter",
    };
  },
  mounted() {
    this.myFunction();
  },
  methods: {
    myFunction: function() {
      var x = document.getElementById("myVideo");
      var y = document.getElementById("test");

      x.play();
      x.addEventListener("ended", myEnded);
      function myEnded() {
        y.innerHTML =
          "<h1 style='font-size:36px;margin-bottom: 10px;'>HAERO MAI FRANÇOIS!</h1><p style='font-size:20px;'>Bienvenue Francois!</p><p style='font-size:26px';>Bienvenue Francois dans ce voyage exceptionnel!</p><p style='font-size:26px;'>À travers la cérémonie d’accueil du powihiri tu pourras découvrir la culture maori.</p> <img src='../assets/img/group.png'><p style='font-size:19px;display:flex;flex-direction:row-reverse;'>Clique sur ce symbole pour avoir plus d’informations</p><button style='width:199px;height:36px;background-color:#FEEDCC;border:1px solid #FEEDCC;cursor:pointer;'>Découvrir la cérémonie</button>";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.homepage__video,
.homepage__video video {
  position: relative;
}
.homepage__video video {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

.homepage__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 60px;
  line-height: 49px;
  color: #ffffff;
  font-family: "CinzelDecorative";
}

.hello {
  font-size: 36px;
  margin-bottom: 650px;
}
</style>
