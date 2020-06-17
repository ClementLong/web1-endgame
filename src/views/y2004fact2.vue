<template>
  <div class="template background4">
    <Template link='/2008home' />

    <div class="fact2_2004__textBlock">
      <p class="fact2_2004__textBlock__text1 legend">“When you hear it, <br> it just sounds <br> right.”</p>
      <h1 class="fact2_2004__textBlock__text2 title">- Jay-Z to MTV</h1>
    </div>
    <div class="fact2_2004__imageBlock">
      <img class="fact2_2004__imageBlock__image1" src="../img/2000s/jayzconcert.png" alt="">
      <img class="fact2_2004__imageBlock__arrow" src="../img/misc/roundArrow.svg" alt="">
      <p class="fact2_2004__imageBlock__text1 legend">Jay-Z impressed by Linkin Park singer vocals</p>
    </div>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y2004fact2',
    components: {
        Template
    }
}
</script>

<style lang="scss">

  .fact2_2004__textBlock{

    position: absolute;
    font-size: 48px;
    top: 20vh;
    left: 5vw;
  }
  .fact2_2004__imageBlock {

    position: absolute;
    right: 5vw;
    top: 20vh;

    .fact2_2004__imageBlock__image1{

      position: relative;
      width: 40vw;
    }

    .fact2_2004__imageBlock__arrow{

      position: relative;
      top: 10vh
    }

    .fact2_2004__imageBlock__text1{

      position: relative;
      text-align: right;
      right: 5vw;
      top: 5vh;
      font-size: 24px;

    }

  }

</style>