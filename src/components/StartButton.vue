<template>  
  <router-link to="/Intro">
    <button class="start">{{ msg }} </button> 
  </router-link>
</template>

<script>
  export default {
    name: "StartButton",
    props: {
      msg: String
    }
  }
</script>

<style scoped lang="scss">

.start {
  margin-top: 16px;
  padding: 10px;
  padding: 12px 24px;
  border-radius: 40px;
  background-color: $white;
  border : 1px solid $blue;
  color: $blue;
  font-size: $mobileP;
  font-family: $montserrat;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
      cursor: pointer;
      background-color: $blue;
      color: $white;
      border: 1px solid $white;
  }
}
</style>