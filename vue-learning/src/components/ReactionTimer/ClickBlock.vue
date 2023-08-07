<template>
  <div :class="{ ready: clickable }">
    <h1>{{ clickable ? "Click" : "wait..." }}</h1>
  </div>
</template>
<style scoped lang="scss">
div {
  border-radius: 100px;
  background-color: red;
  padding: 50px;
  width: 100px;
  height: 100px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

div.ready {
  background-color: greenyellow;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    clickable: Boolean,
  },
});
</script>
