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
    timeout: null,
    code: null,
  }),
  actions: {
    update(field, value) {
      this[field] = value;
      // console.log(field, value, this[field]);
    },
    async login() {
      this.loading = true;
      try {
        return fetch("http://localhost:3000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            // console.log(res);
            this.response = res.body;
            this.code = res.code;
            return res.code;
          });
        // console.log(this.response);
      } catch (error) {
        this.error = error;
      } finally {
        this.startTimeout();
        this.loading = false;
      }
    },
    async register() {
      this.loading = true;
      try {
        return fetch("http://localhost:3000/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            // console.log(res);
            this.response = res.body;
            this.code = res.code;
            return res.code;
          });
        // console.log(this.response);
      } catch (error) {
        this.error = error;
      } finally {
        this.startTimeout();
        this.loading = false;
      }
    },
    startTimeout() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.response = null;
      }, 3000);
    },
  },
});
