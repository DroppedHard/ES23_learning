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
import { useRouter } from "vue-router";

export default {
  setup() {
    const userStore = useUserStore();
    // userStore.$reset();
    const router = useRouter();
    const { username, password, response, code } = storeToRefs(userStore);
    response.value = "";
    const submitForm = (e) => {
      e.preventDefault();
      // console.log(username.value, password.value);
      userStore.login().then(() => {
        // console.log(res, code.value);
        if (code.value === 0) {
          response.value = null;
          router.push({ name: "home" });
        }
      });
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
