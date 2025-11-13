import { createApp } from "vue";
import { createPinia } from "pinia";

//vue 生態系
import App from "./App.vue";
import router from "./router";
const pinia = createPinia();

//=================UI套件=================
import ElementPlus from "element-plus";
//element plus icons
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//=================套件=================
//輪播套件
import Swiper from "swiper";
import "swiper/css";
//pdf套件
import jsPDF from "jspdf";

import "animate.css";
import "./assets/main.css";
import VueRouterTransition from "@duannx/vue-router-transition";

const app = createApp(App);

//=================註冊=================
// vue 生態系註冊
app.use(pinia);
app.use(router);
app.use(VueRouterTransition);
//ui 套件註冊
app.use(ElementPlus);
//套件註冊
app.use(jsPDF);

// 註冊 Element Plus Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
