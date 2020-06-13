<template>
  <div class="timeLineHover">
    <div class="timeLineHover__container">
      <div class="timeLineHover__stroke"></div>

      <!-- <img :src="icon" alt="" class="timeLineHover__icon" /> -->

      <div class="timeLineHover__wrapper">
        <div class="timeLineHover__containerImg">
          <img
            src="../assets/img/weroDesktop.svg"
            alt=""
            class="timeLineHover__hover timeLineHover__hover--wero"
          />
          <img
            src="../assets/img/karangaDesktop.svg"
            alt=""
            class="timeLineHover__hover timeLineHover__hover--karanga"
          />
          <img
            src="../assets/img/hongiDesktop.svg"
            alt=""
            class="timeLineHover__hover"
          />
          <img
            src="../assets/img/hakaDesktop.svg"
            alt=""
            class="timeLineHover__hover"
          />
          <img
            src="../assets/img/hangiDesktop.svg"
            alt=""
            class="timeLineHover__hover"
          />
        </div>

        <div class="timeLineHover__containerBall">
          <button
            data-target="1"
            class="timeLineHover__ball timeLineHover__ball--wero"
          ></button>

          <button
            data-target="2"
            class="timeLineHover__ball timeLineHover__ball--karanga"
          ></button>

          <button
            data-target="3"
            class="timeLineHover__ball timeLineHover__ball--hongi"
          ></button>

          <button
            data-target="4"
            class="timeLineHover__ball timeLineHover__ball--hakka"
          ></button>

          <button
            data-target="5"
            class="timeLineHover__ball timeLineHover__ball--hangi"
          ></button>
        </div>
      </div>
    </div>
    <div class="timeLineHover__filter"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.timeLineHover {
  height: 100vh;
  width: 100vw;

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

  &__hover--wero {
    margin-left: 8px;
  }

  &__hover--karanga {
    margin-left: 7px;
  }

  &__ball {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    &:nth-child(1) {
      background-color: #9f1f21;
    }
    &:nth-child(2) {
      background-color: #72867b;
    }
    &:nth-child(3) {
      background-color: #b45f3f;
    }
    &:nth-child(4) {
      background-color: #627442;
    }
    &:nth-child(5) {
      background-color: #416c72;
    }
    @include medium {
      width: 34px;
      height: 34px;
    }

    @include large {
      width: 48px;
      height: 48px;
    }
  }

  &__filter {
    background-color: $filterColor;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
}
</style>
