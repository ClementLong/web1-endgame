<template>
<div class="homepage__video">
    <video id="myVideo" name="test" src="../assets/video/firstpage.mp4" muted>
    </video>
    <div class="homepage__text" id="test">
        <h1>VOYAGE À LA DECOUVERTE DE LA CULTURE MAORI </h1>
    </div>
    <ArticleVideo
        :filter="filter"
    ></ArticleVideo>
</div>
</template>
<script>
export default {
    data() {
        return{
            filter:"filter",
        };
    },
    mounted(){
        this.myFunction()
    },
    methods: {
        myFunction: function () {
            var x = document.getElementById("myVideo");
            var y = document.getElementById("test");

            x.play();
            x.addEventListener("ended", myEnded);
            function myEnded() {
                y.innerHTML = "<h1 class='hello'>Haero Mai François!</h1>";
            }
        }
    },
}

</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.homepage__video, .homepage__video video {
  position: relative;
}
.homepage__video video {
    background-size: cover ;
    background-repeat: no-repeat ;
    background-position: 50%;
}

.homepage__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  font-size: 60px;
  line-height: 49px;
  color: #ffffff;
  font-family: "CinzelDecorative";
}

.hello {
    font-size:36px;
    margin-bottom: 650px;
}
</style>