<template>
  <div class="template background4">
    <Template link='/2004home' />
    <p class="early2000__title title">Early 00s/Late 00s : <br>The farewells</p>

  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: '2000s',
    components: {
        Template
    }
}
</script>

<style lang="scss">
    .background4 {
        background-image: url('../img/backgrounds/backgroundearly00s.png');
    }

  .early2000__title {
    position: relative;
    font-size: 130px;
    top: 30vh;
  }

</style>