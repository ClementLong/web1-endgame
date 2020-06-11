<template>
  <div class="karanga karanga--blend">
    <Title head="karanga" filter=" " :Source="Source" />
  </div>
</template>
<script>
import Title from "@/components/title.vue";
export default {
  name: "karanga",
  components: {
    Title,
  },
  data() {
    return {
      Source: [],
    };
  },
};
</script>
<style lang="scss" scoped></style>
