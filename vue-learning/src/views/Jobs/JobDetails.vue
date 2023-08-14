<template>
  <h1>Job {{ id }} details</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["id"],
  // data() {
  //     return {
  //         id: this.$route.params.id,
  //     };
  // },
});
</script>

<style scoped></style>
