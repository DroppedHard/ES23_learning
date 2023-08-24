<template>
  <label>{{ labelText }}</label>
  <input :type="inputType" :required="isRequired" v-model="field" />
</template>

<script>
import { ref, watch } from "vue";
import { useUserStore } from "@/stores/user";

export default {
  props: ["inputType", "labelText", "piniaField", "isRequired"],
  setup(props) {
    const field = ref("");
    watch(field, (curr, ignore) => {
      void ignore;
      const userStore = useUserStore();
      userStore.update(props.piniaField, curr);
    });
    return { field };
  },
};
</script>

<style lang="scss"></style>
