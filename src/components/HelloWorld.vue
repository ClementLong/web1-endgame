<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//@import "@/assets/scss/styles.scss";
//@import "@/assets/scss/global/_variables.scss";

h1 {
  padding: 40px 0 0;
  color: $yellow;
}
</style>
