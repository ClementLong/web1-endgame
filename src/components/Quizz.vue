<template>
  <div class="container quizz">
    <p class="quizz__question">{{ question }}</p>
    <button id="resA" class="quizz__response">{{ responseA }}</button>
    <button id="resB" class="quizz__response">{{ responseB }}</button>
    <button id="resC" class="quizz__response">{{ responseC }}</button>
    <button id="resD" class="quizz__response">{{ responseD }}</button>
  </div>
</template>

<script>
export default {
  name: "Quizz",
  props: {
    question: String,
    responseA: String,
    responseB: String,
    responseC: String,
    responseD: String
  }
};
</script>

<style scoped lang="scss">
.container {
  //margin: 0 auto;
  width: 80vw;
  height: 350px;
  max-width: 475px;
  max-height: 475px;
  @include flexbox(column, space-evenly, center);

  @include tablet-up {
    height: 475px;
  }
}

.quizz {
  &__question {
    margin: 24px 0 16px 0;
    width: 100%;
    font-size: rem(16px);
    font-family: $montserrat;
    font-weight: 600;
    line-height: 1.5;
    color: $yellow;

    @include tablet-up {
      font-size: rem(24px);
    }
  }

  &__response {
    width: 100%;
    height: 48px;
    padding: 8px 16px;
    color: $white;
    font-size: rem(12px);
    font-weight: 400;
    line-height: 1.25;
    border: none;
    @include background-boxes;

    &:focus {
      border: 1px solid $yellow;
      transition: 250ms;
      color: $yellow;
    }

    @include tablet-up {
      font-size: rem(16px);
      height: 56px;
    }
  }
}
</style>