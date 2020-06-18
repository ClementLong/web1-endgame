<template>
  <div class="template background5">
    <Template link='/2016home' />
    <p class="early2010__title title">2010/Today : <br>The Wasted Youth</p>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: '2010s',
    components: {
        Template
    }
}
</script>

<style lang="scss">
    .background5 {
        background-image: url(../img/backgrounds/background2010.png);
    }

  .early2010__title {
    position: relative;
    font-size: 130px;
    top: 30vh;
  }

</style>