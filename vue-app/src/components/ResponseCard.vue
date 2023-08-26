<template>
  <teleport to="#card-holder">
    <div id="card">
      <p>{{ message }}</p>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style lang="scss"></style>
