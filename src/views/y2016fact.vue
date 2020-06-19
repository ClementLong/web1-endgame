<template>
  <div class="template background5">
    <Template link='/2016clip' />
    <div class="fact1_2016__texts">
      <p class="fact1_2016__texts__text1 legend">Lil Uzi Vert doing“Sign of the horns”, 
originally created by Dio,
from the metal band Black Sabbath</p>
      <p class="fact1_2016__texts__text2 legend">Trippie Redd wearing a Sweat-Shirt from
the german metal band Rammstein  </p>
    </div >
    <div class="fact1_2016__images">
      <img class="fact1_2016__image__image1" src="../img/2010s/liluzivert.png" alt="lil uzi vert">
      <img class="fact1_2016__image__image2" src="../img/2010s/trippiereddpeintured.png" alt="trippieredd">
    </div>

  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y2016fact',
    components: {
        Template
    }
}
</script>

<style lang="scss">
.container {
    margin-left: 15%;
}
.fact1_2016__images {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100vw;
  bottom:0;
  overflow: hidden;


  .fact1_2016__image__image1 {
    position: relative;
    width: 25%;
    bottom: 0;
    left: -3vw;
  }

  .fact1_2016__image__image2 {
    position: relative;
    width: 20%;
    height: 20%;
  }
}
.fact1_2016__texts {
  position: relative;
  display: block;
  font-size: 24px;
  z-index: 5;
  line-height: 38px;

  .fact1_2016__texts__title{
    position: relative;
    top: 5vh;
    font-size: 48px;
  }

  .fact1_2016__texts__text1 {
    position: absolute;
    top: 28vh;
    left: 18vw;
    width: 46vw;
  }

  .fact1_2016__texts__text2 {
    position: absolute;
    left: 33vw;
    top: 52vh;
    width: 45vw;
  }
}
</style>