<template>
  <div class="container vraiFaux">
    <div class="vraiFaux__containerState">
      <p class="vraiFaux__state">{{ state }}</p>
      <div class="vraiFaux__bar"></div>
    </div>
    <p class="vraiFaux__answer">{{ answer }}</p>
  </div>
</template>

<script>
export default {
  name: "VraiFaux",
  props: {
    state: String,
    answer: String
  }
};
</script>

<style scoped lang="scss">
.container {
  //margin: 0 auto;
  width: 250px;
  height: 250px;
  padding: 16px;
  color: $white;
  transition: 250ms;
  transform: translateX(-500vw);
  @include background-boxes;
}

// ajouter cette classe au container parent pour voir apparaitre la div depuis un translateX.
.isVisible {
  transform: none;
}

.vraiFaux {
  &__containerState {
    margin-bottom: 16px;
    @include flexbox(row, space-between, center);
  }

  &__state {
    font: bold rem(24px) $montserrat;
    text-transform: uppercase;
  }

  &__bar {
    width: 35vw;
    max-width: 115px;
    height: 2px;
    background-color: $yellow;
  }

  &__answer {
    font: normal rem(14px) / 1.25 $montserrat;
    text-align: justify;
  }
}
</style>