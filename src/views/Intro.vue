<template>
  <div class="intro">
    <ArticleVideo :video="video" />
    <div class="intro__wrapper">
      <h1 class="intro__title">{{ title }}</h1>
      <p class="intro__message">
        À travers la cérémonie d’accueil du powihiri tu pourras découvrir la
        culture maori.
      </p>
      <div class="intro__container">
        <img
          src="@/assets/icon/moreInformationsIcon.svg"
          alt="symbôle maori"
          class="intro__moreInformationsIcon"
        />
        <p class="intro__explain">
          Clique sur ce symbole pour avoir plus d’informations
        </p>
      </div>
      <router-link to="/wero">
        <button class="intro__button">decouvrir la ceremonie</button>
      </router-link>
    </div>
    <div class="intro__filter"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: require("@/assets/video/firstpage.mp4")
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.intro {
  &__wrapper {
    height: 60vh;
    @include flexbox(column, space-around, center);
    font-family: "robotto";
    font-size: 16px;
    color: $white;
    margin: 10px;
    text-align: center;
    line-height: 24px;
    @include medium {
      font-size: 18px;
    }
    @include large {
      font-size: 22px;
    }
  }

  &__container {
    @include flexbox(column, center, center);
    @include medium {
      @include flexbox(row, center, center);
    }
  }

  &__explain {
    margin-top: 10px;
    @include medium {
      margin-left: 10px;
    }
  }

  &__button {
    background-color: #feedcc;
    border: none;
    text-transform: uppercase;
    font-size: 10px;
    width: 180px;
    height: 36px;

    @include medium {
      font-size: 12px;
      width: 200px;
      height: 40px;
    }

    @include extraLarge {
      width: 230px;
      height: 50px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &__filter {
    background-color: $filterColor;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
  }
}
</style>
