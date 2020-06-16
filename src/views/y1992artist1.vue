<template>
  <div class="template background2">
    <Template link='/1994home' />
    <div class="tom">
      <div class="tom__legend legend">Tom Morello, the "DJ Guitarist" from RATM</div>
      <img class="tom__img" src="../img/90s/TOM.png" />
    </div>
    <div class="dod">
      <img class="dod__img" src="../img/90s/DOD-WHAMMYDT-Large 1.png" />
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

  &__legend {
    margin-left: 25%;
  }
}

.dod {
  position: absolute;
  right: 0%;

  &__legend {
    margin-left: 20%;
  }
}

</style>