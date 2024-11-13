import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueRouterTransition from '@duannx/vue-router-transition'
import 'animate.css';


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(VueRouterTransition)

app.mount('#app')