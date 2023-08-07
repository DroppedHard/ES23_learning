<template>
  <SignupForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignupForm from "./SignupForm.vue";

export default defineComponent({
  components: { SignupForm },
});
</script>

<style>
body {
  background-color: #eee;
}
</style>
