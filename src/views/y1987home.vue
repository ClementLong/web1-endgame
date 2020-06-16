<template>
  <div class="template background1">
    <Template link='/1987joke' />
    <h1 id="date">1987</h1>
    <h2 id="connection">The First Rap/Rock connection</h2>
    <img id="g4" src="../img/group4.png" />
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1987home',
    components: {
        Template
    }
}
</script>

<style lang="scss">
    #date {
        color: white;
        padding-top: 190px;
        margin-left: 250px;
        font-size: 100px;
    }
    #connection {
        color: white;
        margin-left: 250px;
        font-size: 50px;
    }
    #g4 {
        margin-left: 980px;
        width: 440px;
        height: 383px;
    }
</style>