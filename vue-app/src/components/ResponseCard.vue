<template>
  <teleport to="#card-holder">
    <div id="card">
      <p>{{ message }}</p>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    message: { type: String },
  },
};
</script>

<style lang="scss"></style>
