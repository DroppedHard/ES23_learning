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
    <ResponseCard v-if="response" :message="response" />
  </div>
</template>

<script>
import FormInput from "@/components/FormInput.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import ResponseCard from "@/components/ResponseCard.vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const userStore = useUserStore();
    userStore.$reset();
    const router = useRouter();
    const { username, password, password2, response, code } =
      storeToRefs(userStore);

    const submitForm = async (e) => {
      e.preventDefault();
      if (password.value === password2.value) {
        userStore.register().then(() => {
          // console.log(res);
          if (code.value === 0) {
            response.value = null;
            router.push({ name: "login" });
          }
        });
      } else {
        response.value = "Passwords do not match";
        userStore.startTimeout();
      }
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
