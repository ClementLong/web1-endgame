<template>
  <div class="template background4">
    <Template link='/2008fact2' />

    <div class="fact1_2008__texts">
      <p class="fact1_2008__texts__title title">The impact on the artists </p>
      <p class="fact1_2008__texts__text1 legend DMfont"> Juice Wrld called West a "time traveller", saying, he “went damn near to 2015 and came back with 808s & Heartbreak".</p>
      <p class="fact1_2008__texts__text2 legend DMfont">Lil Uzi Vert, said the record 808s & Heartbreak "changed my life".</p>
      <p class="fact1_2008__texts__text3 legend DMfont">Drake cited West as "the most influential person" in shaping his own sound</p>
    </div >

    <div class="fact1_2008__images">
      <img class="fact1_2008__image__image1" src="../img/2000s/childishpeintured.png" alt="childish">
      <img class="fact1_2008__image__image2" src="../img/2000s/drakepeintured.png" alt="drake">
    </div>

  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y2008fact',
    components: {
        Template
    }
}
</script>

<style lang="scss">

.fact1_2008__images {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100vw;
  bottom:0;
  overflow: hidden;


  .fact1_2008__image__image1 {
    position: relative;
    width: 30%;
    height: 30%;
    bottom: 0;
    left: -3vw;
  }

  .fact1_2008__image__image2 {
    position: relative;
    width: 20%;
    height: 20%;
    right: -5vw;
  }
}
.fact1_2008__texts {
  position: relative;
  display: block;
  font-size: 24px;
  z-index: 5;
  line-height: 38px;

  .fact1_2008__texts__text1 {
    position: absolute;
    top: 28vh;
    left: 18vw;
    width: 26vw;
  }

  .fact1_2008__texts__text2 {
    position: absolute;
    left: 33vw;
    top: 52vh;
    width: 25vw;
  }
  
  .fact1_2008__texts__text3 {
    position: absolute;
    top: 76vh;
    left: 57vw;
    width: 26vw;
  }
}

</style>