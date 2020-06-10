<template>
    <div class="container">
        <div class="circle rotating"></div>
        <div class="mouse">
            <span class="scroll"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ScrollDown",
}
</script>

<style scoped lang="scss">

$scrollColor: $white;

.container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
}

.circle {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 4px dashed $scrollColor;
  border-radius: 100%;
}

.mouse {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 28px;
  height: 48px;
  border: 4px solid $scrollColor;
  border-radius: 50px;
}

.scroll {
  position: absolute;
  width: 4px;
  height: 12px;
  background-color: $scrollColor;
  border-radius: 50px;
  margin-top: 8px;
  animation: scroll 1.5s infinite;
}

@keyframes scroll {
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(12px);
  }
}

@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.rotating {
  -webkit-animation: rotating 10s linear infinite;
  -moz-animation: rotating 10s linear infinite;
  -ms-animation: rotating 10s linear infinite;
  -o-animation: rotating 10s linear infinite;
  animation: rotating 10s linear infinite;
}

</style>