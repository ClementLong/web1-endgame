<template>
  <div class="template background3">
    <Template link='/1999context2' />
    <div class="title">
      <h2>Impact of Nu Metal in mainstream medias</h2>
    </div>
    <div class="crossover">
      <img class="crossover__img" src="../img/Late90s/crossover.png" />
      <img class="crossover__arrow" src="../img/misc/arrow.png" />
      <div class="crossover__legend legend">First Crossover Tour featuring Korn, Limp Bizkit, Rammstein and Icecube</div>
    </div>
    <div class="finger">
      <div class="finger__legend legend">The band showing their middle finger</div>
      <img class="finger__arrow" src="../img/misc/arrow.png" />
      <img class="finger__img" src="../img/Late90s/finger.png" />
    </div>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1999context1',
    components: {
        Template
    }
}
</script>

<style lang="scss">
.crossover {
  position: absolute;
  left: 5%;
  top: 20%;

  &__arrow {
    position: absolute;
    transform: rotate(20deg);
    width: 150px;
    bottom: -70px;
    left: 80%;
  }

  &__legend {
    position: absolute;
    margin-left: 120%;
    bottom: 0;
    width: 250px;
  }
}

.finger {
  position: absolute;
  right: 10%;
  top: 40%;

  &__legend {
    margin-bottom: 50px;
    margin-left: 40%;
    width: 300px;
  }

  &__arrow {
    position: absolute;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1) rotate(-110deg);
    width: 120px;
    top: 40px;
    left: 30px;
  }
}
</style>