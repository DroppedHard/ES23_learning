<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
  <div id="card-holder"></div>
</template>
<script>
import NavBar from "./components/NavBar.vue";

export default {
  setup() {
    return {};
  },
  components: {
    NavBar,
  },
};
</script>
<style lang="scss"></style>
