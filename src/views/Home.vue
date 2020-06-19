<template>
  <div class="template background">
    <Template link='/80s' />
    <img id="traproll" src="../img/home/logo.png" />
    <img id="sub" src="../img/home/subtitle.png" />
    <p class = "command title">press spacebar to navigate</p>
  </div>
</template>

<script>
// @ is an alias to /src
//import Background from "@/components/Background.vue";
import Template from './template.vue'

export default {
  name: 'Home',
  components: {
    Template
  }
}

</script>

<style scoped lang="scss">

.template {
  width: 100%;
  height: 100%;
}
.command {
  margin-top:30vh;
  font-size:30px;
  text-align:center;
  color:white;

}

.background {
  background-image: url("../img/home/background.png");
  margin:0;
  padding:0;
  background-size: cover;
}

#traproll {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
}

#sub {
  display: block;
  margin-top:10%;
  margin-left: auto;
  margin-right: auto;
}

</style>
