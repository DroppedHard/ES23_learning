<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/reactionTimer">Reaction game</router-link> |
    <router-link to="/form">Example form</router-link> |
    <router-link :to="{ name: 'JobsPage' }">Jobs</router-link>
  </nav>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.go(-1); // how many steps!!!
    },
    forward() {
      this.$router.go(1); // how many steps!!!
    },
  },
});
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;

    &.router-link-exact-active {
      color: white;
      background-color: crimson;
    }
  }
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: lightgrey;
}
</style>
