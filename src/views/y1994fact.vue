<template>
  <div class="template background2">
    <Template link='/late90s' />
    <div class="title">
      <h2>Nu Metal starter pack</h2>
    </div>
    <div class="guitar">
      <img class="guitar__img" src="../img/90s/guitar.png" />
      <img class="guitar__arrow" src="../img/misc/arrow.png" />
      <div class="guitar__legend legend">7 strings guitar</div>
    </div>
    <div class="turntable">
      <div class="turntable__legend legend">Turntable</div>
      <img class="turntable__arrow" src="../img/misc/arrow.png" />
      <img class="turntable__img" src="../img/90s/turntable.png" />
    </div>
    <div class="addidas">
      <img class="addidas__img" src="../img/90s/addidas.png" />
      <img class="addidas__arrow" src="../img/misc/arrow.png" />
      <div class="addidas__legend legend">Addidas Tracksuit</div>
    </div>
    <div class="dreadlocks">
      <div class="dreadlocks__legend legend">Dreadlocks</div>
      <img class="dreadlocks__arrow" src="../img/misc/arrow.png" />
      <img class="dreadlocks__img" src="../img/90s/dreadlocks.png" />
    </div>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1994fact',
    components: {
        Template
    }
}
</script>

<style lang="scss">
  .guitar {
    position: absolute;
    left: 5%;
    top: 10%;

    &__arrow {
      position: absolute;
      transform: rotate(80deg);
      width: 120px;
      bottom: 60px;
      left: 0;
    }

    &__legend {
      margin-top: 50px;
      margin-left: 30%;
    }
  }

  .turntable {
    position: absolute;
    left: 30%;
    top: 30%;

    &__arrow {
      position: absolute;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1) rotate(-90deg);
      width: 100px;
      top: 40px;
      left: 10px;
    }

    &__legend {
      margin-left: 100px;
      margin-bottom: 50px;
    }
  }

  .addidas {
    position: absolute;
    left: 55%;
    top: 20%;

    &__arrow {
      position: absolute;
      transform: rotate(140deg);
      width: 100px;
      bottom: 60px;
      left: 0;
    }

    &__legend {
      margin-top: 30px;
    }
  }

  .dreadlocks {
    position: absolute;
    left: 80%;
    top: 30%;

    &__legend {
      margin-bottom: 70px;
    }

    &__arrow {
      position: absolute;
      transform: rotate(-60deg);
      width: 100px;
      top: 60px;
      right: -30px;
    }
  }
</style>