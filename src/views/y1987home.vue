<template>
  <div class="template background1">
    <Template link='/1987joke' />
    <h1 class="title" id="date">1987</h1>
    <h2 class="title" id="connection">The First Rap/Rock connection</h2>
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
        position: absolute;
        color: white;
        padding-top: 190px;
        margin-left: 250px;
        font-size: 100px;
    }
    #connection {
        position: absolute;
        color: white;
        margin-left: 250px;
        font-size: 50px;
        top:45vh
    }
    #g4 {
        right: 0;
        position: absolute;
        width: 40vw;
        bottom: 0;
    }
</style>