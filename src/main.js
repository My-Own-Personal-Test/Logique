import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import API from "../axiosConfig";
const app = createApp(App);
app.config.globalProperties.$API = API;
app.use(router);
app.mount("#app");
