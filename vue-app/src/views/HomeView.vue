<template>
  <div>
    <h1>Home</h1>
    <ProductOverview
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import ProductOverview from "@/components/ProductOverview.vue";

export default {
  setup() {
    const productStore = useProductStore();
    const { products } = storeToRefs(productStore);
    productStore.fetchProducts();
    // console.log(products);
    return { products };
  },
  components: {
    ProductOverview,
  },
};
</script>
<style lang="scss"></style>
