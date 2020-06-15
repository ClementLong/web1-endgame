<template>
  <div class="timeLine">
    <div class="timeLine__container" id="container">
      <div class="timeLine__stroke"></div>

      <img
        src="../assets/icon/timeLineIconMobile.svg"
        alt="icon personnage maori"
        class="timeLine__icon timeLine__icon--mobile"
      />
      <img
        src="../assets/icon/timeLineIconMedium.svg"
        alt="icon personnage maori"
        class="timeLine__icon timeLine__icon--medium"
      />
      <img
        src="../assets/icon/timeLineIconDesktop.svg"
        alt="icon pirogue avec des maoris"
        class="timeLine__icon timeLine__icon--desktop"
      />

      <div
        class="timeLine__wrapper"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <div class="timeLine__containerImg" v-if="hover">
          <img
            src="../assets/img/wero.svg"
            alt="titre de l'étape wero version mobile"
            class="timeLine__hover timeLine__hover--mobile timeLine__hover--wero"
          />
          <img
            src="../assets/img/weroDesktop.svg"
            alt=" titre de l'étape wero version desktop"
            class="timeLine__hover timeLine__hover--desktop timeLine__hover--wero"
          />

          <img
            src="../assets/img/karanga.svg"
            alt="titre de l'étape karanga version mobile"
            class="timeLine__hover timeLine__hover--mobile timeLine__hover--karanga"
          />
          <img
            src="../assets/img/karangaDesktop.svg"
            alt="titre de l'étape karanga version desktop"
            class="timeLine__hover timeLine__hover--desktop timeLine__hover--karanga"
          />

          <img
            src="../assets/img/hongi.svg"
            alt="titre de l'étape hongi version mobile"
            class="timeLine__hover timeLine__hover--mobile timeLine__hover--hongi"
          />
          <img
            src="../assets/img/hongiDesktop.svg"
            alt="titre de l'étape hongi version desktop"
            class="timeLine__hover timeLine__hover--desktop timeLine__hover--hongi"
          />

          <img
            src="../assets/img/haka.svg"
            alt="titre de l'étape haka version mobile"
            class="timeLine__hover timeLine__hover--mobile timeLine__hover--haka"
          />
          <img
            src="../assets/img/hakaDesktop.svg"
            alt="titre de l'étape haka version desktop"
            class="timeLine__hover timeLine__hover--desktop timeLine__hover--haka"
          />

          <img
            src="../assets/img/hangi.svg"
            alt="titre de l'étape hangi version mobile"
            class="timeLine__hover timeLine__hover--mobile timeLine__hover--hangi"
          />
          <img
            src="../assets/img/hangiDesktop.svg"
            alt="titre de l'étape hangi version desktop"
            class="timeLine__hover timeLine__hover--desktop timeLine__hover--hangi"
          />
        </div>

        <div class="timeLine__containerBall">
          <router-link to="/wero">
            <button class="timeLine__ball timeLine__ball--wero"></button
          ></router-link>

          <router-link to="/karanga"
            ><button class="timeLine__ball timeLine__ball--karanga"></button
          ></router-link>

          <router-link to="/hongi"
            ><button class="timeLine__ball timeLine__ball--hongi"></button
          ></router-link>

          <router-link to="/haka"
            ><button class="timeLine__ball timeLine__ball--haka"></button
          ></router-link>

          <router-link to="/hangi"
            ><button class="timeLine__ball timeLine__ball--hangi"></button
          ></router-link>
        </div>
      </div>
    </div>
    <div class="timeLine__filter"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.timeLine {
  // height: 100vh;
  // width: 100vw;

  &__containt {
    height: 100px;
    @include flexbox(column, center, center);
  }

  &__container {
    position: absolute;
    bottom: 40px;
  }

  &__stroke {
    width: 100vw;
    height: 2px;
    background-color: $white;
    position: relative;
    bottom: 0;
  }

  &__icon {
    position: absolute;
    bottom: 0;

    &--mobile {
      left: 0;
      @include medium {
        display: none;
      }
    }

    &--medium {
      display: none;
      @include medium {
        display: block;
      }
      @include large {
        display: none;
      }
    }

    &--desktop {
      display: none;
      @include large {
        display: block;
        bottom: -8px;
      }
    }
  }

  &__containerBall {
    @include flexbox(row, space-around, center);
    width: 100vw;
    bottom: 0;
  }

  &__wrapper {
    position: absolute;
    z-index: 2;
    bottom: -9px;
    @include medium {
      bottom: -18px;
    }
    @include large {
      bottom: -22px;
    }
  }

  &__containerImg {
    width: 100vw;
    @include flexbox(row, space-around, baseline);
  }

  &__hover--mobile {
    @include large {
      display: none;
    }
  }
  &__hover--desktop {
    display: none;
    @include large {
      display: block;
    }
  }

  &__hover--wero {
    margin-left: 12px;
    @include large {
      margin-left: 8px;
    }
  }

  &__hover--karanga {
    margin-right: 7px;
    @include large {
      margin-left: 7px;
    }
  }

  &__hover--haka {
    margin-right: 18px;
    @include large {
      margin: 0;
    }
  }

  &__hover--hongi {
    margin-right: 20px;
    @include large {
      margin-right: 34px;
    }
    @include large {
      margin: 0;
    }
  }

  &__hover--hangi {
    margin-right: 10px;
    @include large {
      margin: 0;
    }
  }

  &__ball {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    &--wero {
      background-color: #9f1f21;
    }
    &--karanga {
      background-color: #72867b;
    }
    &--hongi {
      background-color: #b45f3f;
    }
    &--haka {
      background-color: #627442;
    }
    &--hangi {
      background-color: #416c72;
    }
    @include medium {
      width: 28px;
      height: 28px;
    }

    @include large {
      width: 32px;
      height: 32px;
    }

    @include extraLarge {
      width: 38px;
      height: 38px;
    }
  }

  // &__filter {
  //   background-color: $filterColor;
  //   width: 100vw;
  //   height: 100vh;
  //   z-index: -1;
  // }
}
</style>
