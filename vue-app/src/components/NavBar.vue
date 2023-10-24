<template>
  <nav>
    <h4>
      <component :is="loggedAs ? 'span' : 'a'" :href="loggedAs ? '' : 'login'">
        {{ usernameShowed }} {{ sessionCounter }}</component
      >
    </h4>
    <div class="links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'login' }">Login</router-link>
      <router-link :to="{ name: 'register' }">Register</router-link>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

export default {
  setup() {
    const userStore = useUserStore();
    const { loggedAs, sessionCounter } = storeToRefs(userStore);
    const usernameShowed = computed(() => {
      return loggedAs.value ? loggedAs.value : "Login";
    });

    onMounted(() => {
      userStore.checkUserData();
    });

    return { usernameShowed, loggedAs, sessionCounter };
  },
};
</script>

<style lang="scss" scoped></style>
