<template>
  <h1>Home</h1>
  <ul>
    <li v-for="product in products" :key="product.id">
      <b>
        {{ product.title }}
      </b>
      - {{ product.description }}
    </li>
  </ul>
</template>

<script>
// import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const productStore = useProductStore();
    const { products } = storeToRefs(productStore);
    productStore.fetchProducts();
    // console.log(products);
    return { products };
  },
};
</script>
<style lang="scss"></style>
