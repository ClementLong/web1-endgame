<template>
  <div class="template background3">
    <Template link='/2000s' />
    <div class="fred-durst">
      <img class="fred-durst__img" src="../img/Late90s/fred-durst.png" />
      <img class="fred-durst__arrow" src="../img/arrow.png" />
      <div class="fred-durst__legend legend">Limp Bizkit singer in the wrestling game WWE Smackdown</div>
    </div>
    <div class="skate">
      <div class="skate__legend legend">Rock and Rap overtakes the skate universe</div>
      <img class="skate__arrow" src="../img/arrow.png" />
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
    position: absolute;
    max-width:100%;
    max-height:100%;
  }

  &__arrow {
    position: absolute;
    transform: rotate(70deg);
    width: 100px;
    bottom: 50px;
  }

  &__legend {
    position: absolute;
    bottom: 0;
    margin-left: 20%;
  }
}

.skate {
  position: absolute;
  right: 5%;
  top: 30%;
  height: 50%;
  width: 30%;

  &__img {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    max-width:100%;
    max-height:100%;
  }

  &__arrow {
    position: absolute;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1) rotate(-70deg);
    width: 100px;
    top: 50px;
  }

  &__legend {
    position: absolute;
    top: 0;
    margin-left: 20%;
  }
}
</style>