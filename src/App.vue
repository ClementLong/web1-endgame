<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {}
</script>

<style lang="scss">
body, html {
  height: 100%;
  width: 100%;
}
body, html, div, h1, h2, p {
  margin: 0;
  padding: 0;
}
#app {
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
}
</style>
