import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import _axios from "./plugins/axios";

const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$axios = _axios;
app.mount("#app");
