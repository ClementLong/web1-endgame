<template>
  <div class="template background3">
    <Template link='/1999context1' />
    <div class="title">
      <h2>1999</h2>
      <h3>The Pop Side of Nu Metal</h3>
    </div>
    <img class="limpbizkit" src="../img/Late90s/limpbizkit.png" />
    <img class="icecube" src="../img/Late90s/icecube.png" />
    <img class="korn" src="../img/Late90s/korn.png" />
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1999home',
    components: {
        Template
    }
}
</script>

<style lang="scss">
    .limpbizkit {
      position: absolute;
      bottom: 0%;
      right: 0%;
    }

    .icecube {
      position: absolute;
      bottom: 0%;
      left: 0%;
    }

    .korn {
      position: absolute;
      bottom: 0%;
      left: 5%;
    }
</style>