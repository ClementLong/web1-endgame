<template>  
  <button class="start">{{ msg }} </button> 
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
  max-width: 300px;
  padding: 10px;
  margin: 5%;
  padding: 12px 24px;
  border-radius: 40px;
  background-color: $white;
  border : 1px solid $blue;
  color: $blue;
  font-size: $mobileP;
  font-family: $montserrat;
  font-weight: bold;

  &:hover {
      cursor: pointer;
      background-color: $blue;
      color: $white;
      border: 1px solid $white;
  }
}
</style>