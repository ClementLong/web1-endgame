<template>
  <div class="header">
    <div class="header__logoHeader">
      <router-link to="/secondpage"><img src="@/img/Logo.svg" alt /></router-link>
        <router-link to="/mammiferes/0/11000"><button>Familles</button></router-link>
    </div>
    <div class="plonge">
      <router-link to="/secondPage">
        <span class="plonge__backButton">Reprendre sa plongée</span>
      </router-link>
      <img src="@/img/plonge.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "headerFamilles"
};
</script>

<style lang="scss" scoped>
.header {
  background: black;
  position: relative;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 750px) {
    align-items: center;
  }
  &__logoHeader {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      padding: 0 50px 0 10px;
      @media (max-width: 750px) {
        width: 10vw;
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

      @media (max-width: 750px) {
        font-size: 18px;
        line-height: 0px;
        border: 1px solid #000;
      }
    }
  }
  .plonge {
    display: flex;
    justify-content: center;
    align-items: center;
    &__backButton {
      font-family: abel;
      font-weight: normal;
      font-size: 36px;
      color: white;
      line-height: 1.5;
      text-decoration: none;
    }
  }
}
</style>