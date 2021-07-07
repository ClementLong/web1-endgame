<template>
  <div>
    <router-link to="/secondpage"><img src="@/img/Logo.svg" alt /></router-link>
  </div>
</template>

<script>
export default {
  name: "headr"
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
  align-self: flex-start;
  img {
    padding: 10px;
    display: flex;
  }
}
</style>

