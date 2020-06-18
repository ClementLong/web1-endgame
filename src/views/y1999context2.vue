<template>
  <div class="template background3">
    <Template link='/1999clip' />
    <div class="fred-durst">
      <img class="fred-durst__img" src="../img/Late90s/fred-durst.png" />
      <img class="fred-durst__arrow" src="../img/misc/arrow.png" />
      <div class="fred-durst__legend legend">Limp Bizkit singer in the wrestling game WWE Smackdown</div>
    </div>
    <div class="skate">
      <div class="skate__legend legend">Rock and Rap overtakes the skate universe</div>
      <img class="skate__arrow" src="../img/misc/arrow.png" />
      <img class="skate__img" src="../img/Late90s/skate.png" />
    </div>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1999context2',
    components: {
        Template
    }
}
</script>

<style lang="scss">
.fred-durst {
  position: absolute;
  left: 5%;
  top: 20%;
  height: 50%;
  width: 30%;

  &__img {
    max-width:100%;
    max-height:100%;
  }

  &__arrow {
    position: absolute;
    transform: rotate(70deg);
    width: 120px;
    bottom: 40px;
    left: 10px;
  }

  &__legend {
    margin-top: 50px;
    bottom: 0;
    margin-left: 30%;
  }
}

.skate {
  position: absolute;
  right: 5%;
  top: 30%;
  height: 50%;
  width: 30%;

  &__img {
    max-width:100%;
    max-height:100%;

  }

  &__arrow {
    position: absolute;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1) rotate(-70deg);
    width: 100px;
    top: 70px;
    left: -80px;
  }

  &__legend {
    margin-bottom: 50px;
  }
}
</style>