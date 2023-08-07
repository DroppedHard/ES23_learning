<template>
  <div class="backdrop" @click.self="$emit('close')">
    <div class="modal" :class="themeClass">
      <slot>Default content for a slot</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
.modal.sale {
  background-color: crimson;
  color: white;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    themeClass: String,
  },
});
</script>
