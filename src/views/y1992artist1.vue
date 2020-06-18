<template>
  <div class="template background2">
    <Template link='/1992clip' />
    <div class="tom">
      <div class="tom__legend legend">Tom Morello, the "DJ Guitarist" from RATM</div>
      <img class="tom__img" src="../img/90s/TOM.png" />
      <img class="tom__arrow" src="../img/misc/arrow.png" />
    </div>
    <div class="dod">
      <img class="dod__img" src="../img/90s/DOD-WHAMMYDT-Large 1.png" />
      <img class="dod__arrow" src="../img/misc/arrow.png" />
      <div class="dod__legend legend">The main ingredient of his sound</div>
    </div>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1992artist1',
    components: {
        Template
    }
}
</script>

<style lang="scss">

.tom {
  position: absolute;
  left: 5%;
  bottom: 0%;
  width: 40%;

  &__legend {
    margin-left: 25%;
  }

  &__arrow {
    position: absolute;
    transform: rotate(-30deg);
    width: 120px;
    top: 100px;
    left: 40%;
  }

  &__img {
    max-width:100%;
    max-height:100%;
  }
}

.dod {
  position: absolute;
  right: 5%;
  top: 10%;
  width: 35%;
  height: 70%;;

  &__img {
    max-width:100%;
    max-height:100%;
  }

  &__arrow {
    position: absolute;
    transform: rotate(80deg);
    width: 150px;
    bottom: 70px;
    left: 70px;
  }

  &__legend {
    position: absolute;
    bottom: 0;
    margin-left: 200px;
  }
}

</style>