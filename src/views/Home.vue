<template>
  <div class="template background">
    <Template link='/80s' />
    <div>Mid-80s/Late 80s :</div>
    <div>The First Steps</div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Background from "@/components/Background.vue";
import Template from './template.vue'

export default {
  name: 'Home',
  components: {
    Template
  }
}

</script>

<style scoped lang="scss">

.template {
  width: 100%;
  height: 100%;

}

.background {
  background-image: url("../img/home/background.png");
}

</style>
