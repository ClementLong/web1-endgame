<template>
  <div class="click">
    <div class="click__inner">
      <button>{{msg}} </button>
      <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6099 11.3379L2.37647 2.25059L13.7807 11.5057L2.37772 20.7505L10.6098 11.6737L10.7621 11.5058L10.6099 11.3379ZM16.8647 11.3379L8.63125 2.25059L20.0355 11.5057L8.63251 20.7505L16.8646 11.6737L17.0168 11.5058L16.8647 11.3379Z" fill="white" stroke="white" stroke-width="0.5"/>
      </svg>
    </div>
  </div>
  
  
</template>

<script>
export default {
  name: "NextChapterButton",
  props: {
    msg: String
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .click {
    width: 40%;
    height: 5%;
    @include background-boxes;
    &__inner {
      @include flexbox(row, center, center);
      & button {
        font-size: 11px;
        color: $white;
        background: none;
        border: none;
      }
    }
  }
</style>