import { defineStore } from "pinia";
import axiosInstance from "./axiosInstance";

export const useUserStore = defineStore("user", {
  state: () => ({
    response: null,
    username: null,
    password: null,
    password2: null,
    loggedAs: null,
    sessionCounter: 0,
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
        return axiosInstance
          .post("http://localhost:3000/users/login", {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            // console.log(res.data);
            this.response = res.data.body;
            this.code = res.data.code;
            if (res.code === 0) {
              this.loggedAs = this.username;
              this.sessionCounter = res.data.sessionCounter;
            }
          });
        // console.log(this.response);
      } catch (error) {
        this.error = error;
      } finally {
        this.checkUserData();
        this.startTimeout();
        this.loading = false;
      }
    },
    async register() {
      this.loading = true;
      try {
        return axiosInstance
          .post("http://localhost:3000/users/register", {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            // console.log(res.data);
            this.response = res.data.body;
            this.code = res.data.code;
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
    async checkUserData() {
      return axiosInstance
        .get("/users/userdata")
        .then((res) => {
          // console.log("USER DATA", res);
          this.loggedAs = res.data.user;
          this.sessionCounter = res.data.sessionCounter;
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
});
