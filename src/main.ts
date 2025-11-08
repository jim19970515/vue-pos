import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueRouterTransition from "@duannx/vue-router-transition";
import ElementPlus from "element-plus";
import "animate.css";
import "./assets/main.css";
import jsPDF from "jspdf";
import Swal from "sweetalert2";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(ElementPlus, Swal);
app.use(jsPDF);
app.use(router);
app.use(VueRouterTransition);

// 註冊 Element Plus Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
