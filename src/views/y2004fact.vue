<template>
  <div class="template background4">
    <Template link='/2004clip' />

    <h1 class="fact1_2004__title title">Nothing to prove</h1>

    <div class="fact1_2004__linkinText">

      
      <h1 class="fact1_2004__linkinText__title title">Linkin Park</h1>
      <p class="fact1_2004__linkinText__text1 legend">11 awards <br>70 million records sold <br>#19 artists of the decade</p>
      <img class="fact1_2004__linkinText__arrow" src="../img/misc/arrow.png" alt="">

    </div>

    <img class="fact1_2004__image1" src="../img/2000s/bromancejay-zchester.png" alt="jay-z and chester">

    <div class="fact1_2004__jayztext">

      <img class="fact1_2004__jayztext__arrow" src="../img/misc/arrow.png" alt="">
      <h1 class="fact1_2004__jayztext__title title">Jay-Z</h1>
      <p class="fact1_2004__jayztext__text1 legend">22 Grammy Award <br>50 million albums sold <br>14 albums on Billboard 200</p>

    </div>

  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y2004fact',
    components: {
        Template
    }
}
</script>

<style lang="scss">

.fact1_2004__image1 {
  position: absolute;
  width: 40vw;
  right: 30vw;
  bottom:0;

}

.fact1_2004__title {

  position: relative;
  top: 5vh;
  font-size: 48px;
}

.fact1_2004__linkinText {
  position: absolute;
  left: 4vw;
  top: 20vh;
  
  .fact1_2004__linkinText__title{
    
    text-align: left;
    font-size: 44px;
  }
  .fact1_2004__linkinText__text1{

    font-size: 38px;
  }
  .fact1_2004__linkinText__arrow {
    position: relative;
    -webkit-transform: scaleX(-1);
      transform: scaleX(-1) rotate(-30deg);
    top: 10vh;
    left: 20vw;
    width: 10vw;

  }
}

.fact1_2004__jayztext {
  position: absolute;
  right: 4vw;
  bottom: 10vh;
  

  .fact1_2004__jayztext__title{
    text-align: right;
    font-size: 44px;
  }
  .fact1_2004__jayztext__text1{
    text-align: right;
    font-size: 38px;
  }
  .fact1_2004__jayztext__arrow{
    position: relative;
    -webkit-transform: scaleX(-1);
      transform: scaleX(-1) rotate(165deg);
      width: 10vw;
  }
}



</style>