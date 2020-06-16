<template>
  <div class="template background2">
    <Template link='/late90s' />
    <div class="title">
      <h2>Nu Metal starter pack</h2>
    </div>
    <div class="guitar">
      <img class="guitar__img" src="../img/90s/guitar.png" />
      <div class="guitar__legend legend">7 strings guitar</div>
    </div>
    <div class="turntable">
      <img class="turntable__img" src="../img/90s/turntable.png" />
      <div class="turntable__legend legend">Turntable</div>
    </div>
    <div class="addidas">
      <img class="addidas__img" src="../img/90s/addidas.png" />
      <div class="addidas__legend legend">Addidas Tracksuit</div>
    </div>
    <div class="dreadlocks">
      <img class="dreadlocks__img" src="../img/90s/dreadlocks.png" />
      <div class="dreadlocks__legend legend">Dreadlocks</div>
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
  }

  .turntable {
    position: absolute;
    left: 30%;
    top: 30%;
  }

  .addidas {
    position: absolute;
    left: 55%;
    top: 20%;
  }

  .dreadlocks {
    position: absolute;
    left: 80%;
    top: 10%;
  }
</style>