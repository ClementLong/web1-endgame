<template>
  <div class="template background1">
    <Template link='/1987home' />
    <div class="title">
      <h1>Mid 80s/Late 80s</h1>
      <h1>The First Steps</h1>
    </div>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: '80s',
    components: {
        Template
    }
}
</script>

<style lang="scss">
    .template {
        width: 100%;
        height: 100%;
        margin:0;
        padding:0;
        background-size: cover;
        background-color: black;
    }
    .background1 {
        background-image: url('../img/backgrounds/background80s.png');
    }
    #mid {
        text-align: center;
        padding-top: 250px;
    }
</style>