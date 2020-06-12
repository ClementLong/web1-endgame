<template>
  <div class="button">
    <button>{{ buttonText }}</button>
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
button {
  background-color: #feedcc;
  border-radius: 2px;
  width: 199px;
  height: 36px;
  color: rgba(54, 58, 61, 0.92);
  font-size: 13px;
  line-height: 15px;
  font-family: "Roboto";
}
</style>
