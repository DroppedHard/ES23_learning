import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => {
    return {
      products: [],
      product: {
        title: "",
        category_name: "",
        min_price: 0,
        max_price: Infinity,
      },
      loading: false,
      error: null,
    };
  },
  // getters: {
  //     getProducts: (state) => {
  //         return (authorId) => state.products.filter((product) => post.user)
  //     }
  // }
  actions: {
    async fetchProducts() {
      this.products = [];
      this.loading = true;
      try {
        this.products = await fetch("http://localhost:3000/products").then(
          (res) =>
            res.json().then((res) => {
              return res.data;
            })
        );
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
        // console.log(this.products);
      }
    },
  },
});
