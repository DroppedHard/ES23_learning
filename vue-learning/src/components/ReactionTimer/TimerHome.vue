<template>
  <h1>Reaction timer</h1>
  <button @click="startGame" :disable="isClickable">Start</button>
  <ClickBlock v-if="showBlock" :clickable="isClickable" @click="stopGame" />
  <ResultsComponent v-if="result >= 0">
    <p>{{ result }}ms</p>
  </ResultsComponent>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ResultsComponent from "./ResultsComponent.vue";
import ClickBlock from "./ClickBlock.vue";

export default defineComponent({
  name: "ReactionTimer",
  data() {
    return {
      isClickable: false,
      showBlock: false,
      start: new Date(),
      end: new Date(),
      time: 0,
      result: -1,
    };
  },
  components: { ResultsComponent, ClickBlock },
  methods: {
    startGame() {
      this.showBlock = true;
      this.result = -1;
      this.time = Math.random() * 6 + 3;
      // console.log("Starting game", this.time);
      setTimeout(() => {
        this.isClickable = true;
      }, this.time * 1000);
      this.start = new Date();
    },
    stopGame() {
      this.end = new Date();
      this.result = Math.round(
        this.end.getTime() - this.start.getTime() - this.time * 1000
      );
      this.isClickable = false;
      this.showBlock = false;
    },
  },
});
</script>
<style lang="scss"></style>
