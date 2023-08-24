import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    response: null,
    username: null,
    password: null,
    password2: null,
    loggedAs: null,
    loading: false,
    error: null,
  }),
  // getters: {
  //     getProducts: (state) => {
  //         return (authorId) => state.products.filter((product) => post.user)
  //     }
  // }
  actions: {
    update(field, value) {
      this[field] = value;
      // console.log(field, value, this[field]);
    },
    async login() {
      this.loading = true;
      try {
        this.response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        }).then((res) => res.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async register() {
      console.log(this.username, this.password);
    },
  },
});
