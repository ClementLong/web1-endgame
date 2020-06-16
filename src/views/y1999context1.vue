<template>
  <div class="template background3">
    <Template link='/1999context2' />
    <div class="title">
      <h2>Impact of Nu Metal in mainstream medias</h2>
    </div>
    <div class="crossover">
      <img class="crossover__img" src="../img/Late90s/crossover.png" />
      <div class="crossover__legend legend">First Crossover Tour featuring Korn, Limp Bizkit, Rammstein and Icecube</div>
    </div>
    <div class="finger">
      <div class="finger__legend legend">The band showing their middle finger</div>
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
}

.finger {
  position: absolute;
  right: 0%;
  top: 40%;
}
</style>