<template>
  <div class="button">
    <button>{{ button_text }}</button>
  </div>
</template>

<script>
export default {
  name: "button",
  props: {
    button_text: String
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
