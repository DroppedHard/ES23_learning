<template>
  <div>
    <h1>Login</h1>
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
      <button>Submit</button>
    </form>
    <ResponseCard v-if="response" :message="response" />
  </div>
</template>

<script>
import FormInput from "@/components/FormInput.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import ResponseCard from "@/components/ResponseCard.vue";

export default {
  setup() {
    const userStore = useUserStore();
    const { username, password, response } = storeToRefs(userStore);

    const submitForm = (e) => {
      e.preventDefault();
      // console.log(username.value, password.value);
      userStore.login();
      // console.log(response.value);
    };
    return { username, password, submitForm, response };
  },
  components: {
    FormInput,
    ResponseCard,
  },
};
</script>

<style lang="scss"></style>
