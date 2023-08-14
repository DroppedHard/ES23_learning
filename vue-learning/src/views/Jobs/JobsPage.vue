<template>
  <div>
    <h1>Jobs:</h1>
    <router-link
      :to="{ name: 'JobDetails', params: { id: job.id } }"
      v-for="job in jobs"
      :key="job.id"
      class="job"
    >
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      jobs: [
        { title: "UX Designer", id: 1, details: "Create your own app design" },
        { title: "Web Developer", id: 2, details: "Develop yor own web pages" },
        {
          title: "Vue Developer",
          id: 3,
          details: "Learn Vue - a great and light framework",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.job {
  h2 {
    background-color: lightgray;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }

  h2:hover {
    background-color: #ddd;
  }

  text-decoration: none;
}
</style>
