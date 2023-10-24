<template>
  <div :class="product.category_name + ' product-single'">
    <h2>{{ product.title }}</h2>
    <h4>{{ product.category_name }}</h4>
    <h4>{{ product.price }}</h4>
    <p>{{ product.description }}</p>
    <span @click="favourite = !favourite">
      {{ favourite ? "<3" : "X" }}
    </span>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["product"],
  setup() {
    // console.log(props.product);
    const favourite = ref(false);

    return { favourite };
  },
};
</script>

<style lang="scss"></style>
