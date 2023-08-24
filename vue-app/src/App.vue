<template>
  <nav>
    <h4>{{ usernameShowed }}</h4>
    <div class="links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'login' }">Login</router-link>
      <router-link :to="{ name: 'register' }">Register</router-link>
    </div>
  </nav>
  <router-view />
</template>
<script>
import { useUserStore } from "./stores/user";
import { storeToRefs } from "pinia";
import { computed } from "vue";

export default {
  setup() {
    const userStore = useUserStore();
    const { loggedAs } = storeToRefs(userStore);
    const usernameShowed = computed(() => {
      console.log(loggedAs.value);
      return loggedAs.value ? loggedAs.value : "No account chosen";
    });
    return { usernameShowed };
  },
};
</script>
<style lang="scss"></style>
