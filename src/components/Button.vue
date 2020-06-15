<template>
  <div class="button">
    <button class="button__btn">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.btn {
  background-color: #feedcc;
  border: none;
  text-transform: uppercase;
  font-size: 10px;
  margin-top: 80px;
  width: 150px;
  height: 36px;

  @include medium {
    font-size: 12px;
    width: 170px;
    height: 40px;
  }

  @include extraLarge {
    width: 200px;
    height: 50px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
