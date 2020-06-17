<template>
  <div class="template background4">
    <Template link='/2004fact' />
    <div class="home2004__texts">
      <h1 class="home2004__texts__year title">2004</h1>
      <p class="home2004__texts__text1 title">The last Rap/Rock collaboration ?</p>
    </div>
    <div>
      <img class="home2004__image1" src="../img/2000s/chesterpeintured.png" alt="">
      <img class="home2004__image2" src="../img/2000s/jay-zpeintured.png" alt="">
    </div>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y2004home',
    components: {
        Template
    }
}
</script>

<style lang="scss">

.home2004__image1 {

  z-index: 5;
  position: absolute;
  height: 60vh;
  bottom: 0;
  left: 1vw;

}

.home2004__image2 {
  
  position: absolute;
  height:100vh;
  bottom: 0;
  left: 1vw;

}

.home2004__texts {

  position: absolute;
  top: 20vh;
  left: 37vw;
  z-index: 7;

  .home2004__texts__year {

    font-size: 96px;
    text-align: left;

  }

  .home2004__texts__text1 {

    font-size: 48px;

  }
}

</style>