<template>
  <div>
    <img src="../../img/Logo.svg" alt />
    <router-link class="btn" to="/mammiferes">
      <button>Familles</button>
    </router-link>
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
  height: 10vh;
  display: flex;
  justify-self: flex-start;
  align-items: flex-start;
  @media (max-width: 750px) {
    align-items: center;
  }
  img {
    padding: 10px 100px 0 10px;
    @media (max-width: 750px) {
      width: 10vw;
    }
  }
}

button {
  cursor: pointer;
  padding: 15px 40px;
  border-radius: 16px;
  border: 3px solid #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #025b83;
  font-family: aileronsregular;
  font-size: 36px;
  line-height: 29px;
  margin-top: 10px;
  @media (max-width: 750px) {
    font-size: 18px;
    line-height: 0px;
    border: 1px solid #000;
  }
}
</style>
