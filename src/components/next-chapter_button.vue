<template>
  <div class="click">
    <p>{{msg}}</p>
    <img src="../assets/ux-kit/next-chapter/Vector.svg" alt="return" />

    <!-- <svg
        width="21"
        height="23"
        viewBox="0 0 21 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6099 11.3379L2.37647 2.25059L13.7807 11.5057L2.37772 20.7505L10.6098 11.6737L10.7621 11.5058L10.6099 11.3379ZM16.8647 11.3379L8.63125 2.25059L20.0355 11.5057L8.63251 20.7505L16.8646 11.6737L17.0168 11.5058L16.8647 11.3379Z"
          fill="white"
          stroke="white"
          stroke-width="0.5"
        />
    </svg>-->
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
  cursor: pointer;
  position: absolute;
  overflow: hidden;
  bottom: 30px;
  right: 0;
  padding: 0 16px 0 16px;
  margin: 8px 0 8px 0;
  width: 250px;
  height: 48px;
  border-width: 0.5px 0 0.5px 0.5px;
  border-style: solid;
  border-color: $white;
  @include background-boxes;
  border-radius: 8px 0 0 8px;
  @include flexbox(row, space-between, center);

  @include tablet-up {
    width: 350px;
    height: 80px;
  }

  &:hover {
    font-weight: 500;
    color: $yellow;
    @include scale-animation-light;
  }

  p {
    font-size: rem(11px);
    text-transform: uppercase;
    color: $white;
    @include tablet-up {
      font-size: rem(16px);
    }
  }
  img {
    width: 25px;

    @include tablet-up {
      width: 32px;
    }
  }
}
</style>