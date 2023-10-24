import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.withCredentials = true;
createApp(App)
  .use(createPinia())
  .use(VueAxios, axios)
  .use(router)
  .mount("#app");
