<template>
  <div class="template background2">
    <Template link='/1992artist1' />
    <div class="title">
      <h1>1992</h1>
      <h2>Rage Against The Machine change the World</h2>
    </div>
    <img class="ratm" src="../img/90s/RATM1.png"/>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1992home',
    components: {
        Template
    }
}
</script>

<style lang="scss">

.title {
  color: white;
  text-align: center;

  h1 {
    font-size: 8em;
  }

  h2 {
    font-size: 4em;
  }
}

.ratm {
  position: absolute;
  right: 0%;
  bottom: 0%;
}

</style>