<template>
  <div class="intro">
    <ArticleVideo :video="video" />
    <div class="intro__wrapper">
      <h1 class="intro__title">{{ title }} {{ name }}</h1>
      <p class="intro__subtitle">{{ subtitle }} {{ name }}</p>
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
      video: require("@/assets/video/firstpage.mp4"),
      name: this.$route.params.name,
      title: "Haero mai",
      subtitle: "bienvenue"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.intro {
  &__wrapper {
    height: 80vh;
    @include flexbox(column, center, center);
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

  &__title {
    text-transform: uppercase;
    @include extraLarge {
      font-size: 24px;
    }
  }

  &__subtitle {
    font-size: 8px;
    @include medium {
      font-size: 8px;
    }
    @include large {
      font-size: 14px;
    }
    @include extraLarge {
      font-size: 16px;
    }
  }

  &__message {
    margin-top: 60px;
  }

  &__container {
    @include flexbox(column, center, center);
    margin-top: 50px;

    @include medium {
      @include flexbox(row, center, center);
    }
    @include large {
      margin-top: 60px;
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
    margin-top: 50px;

    @include medium {
      width: 192px;
      height: 40px;
      margin-top: 48px;
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
