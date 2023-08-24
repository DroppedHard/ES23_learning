<template>
  <div>
    <h1>Create an account</h1>
    <form @submit="submitForm">
      <FormInput
        inputType="text"
        labelText="Username"
        isRequired="true"
        piniaField="username"
      />
      <FormInput
        inputType="password"
        labelText="Password"
        isRequired="true"
        piniaField="password"
      />
      <FormInput
        inputType="password"
        labelText="Repeat password"
        isRequired="true"
        piniaField="password2"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const userStore = useUserStore();
    const { username, password, password2 } = storeToRefs(userStore);

    const submitForm = (e) => {
      e.preventDefault();
      console.log(username.value, password.value, password2.value);
      if (password.value === password2.value) {
        userStore.register();
      }
    };
    return { username, password, submitForm };
  },
  components: {
    FormInput,
  },
};
</script>

<style lang="scss"></style>
