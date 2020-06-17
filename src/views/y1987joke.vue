<template>
  <div class="template background1">
    <Template link='/1987fact' />
    <h1 class="title" id="at">At the time</h1>
    <div id="blockGhetto">
      <img id="ghetto" src="../img/ghettoblaster.png"/>
      <h2 class="DMfont" id="rap">RAP</h2>
      <img id="blockGhetto__arrow" src="../img/misc/arrow.png" />
    </div>
    <img id="et" src="../img/et.png"/>
    <div id="blockVan">
      <img id="van" src="../img/vanhalen.png"/>
      <h2 class="DMfont" id="rock">ROCK</h2>
      <img id="blockVan__arrow" src="../img/misc/arrow.png" />
    </div>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1987joke',
    components: {
        Template
    }
}
</script>

<style lang="scss">
#at {
  position: relative;
  font-size: 48px;
  top: 5vh;
}
    #blockGhetto {
      position: absolute;
      left: 8vw;
      top: 25vh;
      #ghetto {
        width: 25vw;
      }
      #rap {
        position: relative;
        bottom: 55vh;
        left: 25vw;
        font-size: 56px;
        transform: rotate(15deg);
        color: gray;
      }
      #blockGhetto__arrow {
        position: relative;
        width: 13vw;
        bottom: 60vh;
        left: 18vw;
      }
    }
    #et {
      position: absolute;
      left: 47vw;
      top: 38vh;
    }
    #blockVan {
      position: absolute;
      right: 10vw;
      top: 25vh;
      #van {
        width: 25vw;
      }
      #blockVan__arrow {
        width: 12vw;
        transform: rotate(40deg);
        position: relative;
        left: 8vw;
        overflow: hidden;
        bottom: 8vh;
      }
      #rock {
        font-size: 56px;
        color: gray;
        position: relative;
        left: 20vw;
        width: 10vw;
        transform: rotate(30deg);
        top: 5vh;
      }
    }
</style>