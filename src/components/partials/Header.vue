<template>
  <div>
    <img src="../../img/Logo.svg" alt />
    <router-link class="btn" to="/secondPage">Famillias</router-link>
  </div>
</template>

<script>
export default {
  name: "naver"
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
  height: 5vh;
  display: flex;
  justify-self: flex-start;
  align-items: flex-start;
  img {
    padding: 10px;
  }
}

.btn {
  cursor: pointer;
  padding: 15px 40px;
  border-radius: 16px;
  border: 3px solid #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  font-family: aileronsregular;
  font-size: 36px;
  line-height: 29px;
}
</style>
