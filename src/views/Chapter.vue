<template>
<body>
  <Chapter />
</body>
</template>

<script>
import Chapter from "@/components/partials/Chapitre.vue";

export default {
  name: "Chapter",
  components: {
    Chapter
  },
  data() {
    return {
      data: null
    };
  }
};
</script>
<style scoped lang="scss">
</style>