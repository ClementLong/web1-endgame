<template>
  <div class="template background1">
    <Template link='/1989clip'/>
    <div class ="container text_container title">
      <h1 class = "year">1989</h1>
      <h2 class = "text">Anthrax and Public Enemy hits the Billboard</h2>
    </div>
    <img src="../img/publicenemyanthrax.png" class ="img img_rapper">
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1989home',
    components: {
        Template
    }
}
</script>

<style lang="scss">

.container {
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  text-align:start;
  margin-left: 40%;
  width:60%;
  h1, h2 {
    margin-top: 20px;
    width:100%;
  }
}
.img {
  position:absolute;
  top:52.8vh;
  width:40%;
}
</style>