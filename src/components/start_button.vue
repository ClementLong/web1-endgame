<template>  
<button class="start">{{msg}} </button> 
</template>
<script>
export default {
  name: "StartButton",
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.start {
    max-width: 300px;
    padding: 10px;
    margin-top: 16px;
    margin-right: auto;
    margin-left:auto;
    @include tablet-up {
        padding: 10px 24px 10px 24px;
    }
    @include desktop-up {
      padding: 10px 3vw 10px 3vw;
    }
    border-radius: 40px;
    background-color: $white;
    border : 0.5px solid $blue;
    color: $blue;
    font-size: $mobileP;
    font-family: $montserrat;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        background-color: $blue;
        color: $white;
        border: none;
    }
}
</style>