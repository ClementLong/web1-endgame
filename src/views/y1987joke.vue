<template>
  <div class="template background1">
    <Template link='/1987fact' />
    <h1 id="at">At the time</h1>
    <img id="ghetto" src="../img/ghettoblaster.png"/>
    <img id="et" src="../img/et.png"/>
    <img id="van" src="../img/vanhalen.png"/>
    <h2 id="rap">RAP</h2>
    <h2 id="rock">ROCK</h2>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1987joke',
    components: {
        Template
    }
}
</script>

<style lang="scss">
    #at {
        margin-left: auto;
        margin-right: auto;
        width: 6em;
        color: white;
        padding-top: 50px;
        font-size: 45px;
    }
    #ghetto {
      margin-left: 230px;
      padding-top: 50px;
      width: 310px;
      height: 300px;
    }
    #et {
      margin-left: 182px;
      padding-bottom: 100px;
    }
    #van {
      margin-left: 170px;
      width: 400px;
      height: 300px;
    }
    #rap {
      color: white;
      margin-left: 350px;
      font-size: 40px;
      padding-top: 40px;
    }
    #rock {
      color: white;
      margin-left: 1100px;
      font-size: 40px;
    }
</style>