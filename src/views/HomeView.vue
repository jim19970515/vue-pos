<script setup>
import { ref, onMounted } from "vue";
import { useCustomerStore, useOrderStore } from "@/stores/stores";

import customer from "@/components/customer.vue";
import productTable from "@/components/productTable.vue";
import tabs from "@/components/tabs.vue";
import { useRoute } from "vue-router";
import pagination from "@/components/pagination.vue";
import loading from "@/components/loading.vue";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

//store
const orderStore = useOrderStore();
const customerStore = useCustomerStore();

onMounted(async () => {
  await orderStore.getOrders();
});

dayjs.extend(customParseFormat);
const route = useRoute();
const dark = ref(true);
const darkMode = () => {
  dark.value = !dark.value;
};
const newDate = ref("");
setInterval(() => {
  let now = dayjs().format("YYYY/MM/DD HH:mm");
  newDate.value = now;
}, 1000);
</script>
<template>
  <div class="h-screen w-screen overflow-hidden flex flex-col" :class="dark ? 'dark' : ''">
    <header
      class="flex items-center justify-between w-full overflow-hidden bg-primary dark:bg-gray-900 sm:px-6 text-xl sm:text-3xl text-white py-2 px-4 font-bold"
    >
      <nav class="flex items-center gap-2 sm:gap-4">
        <img src="/src/assets/posLogo.png" class="object-cover h-8 sm:h-20" alt="" />
        <h1>心心Pos</h1>
      </nav>
      <div class="flex items-center gap-6">
        <h2 class="text-lg sm:text-2xl text-white font-medium text-center sm:block hidden">
          {{ newDate }}
        </h2>
        <i v-if="!dark" class="ri-moon-fill" @click="darkMode"></i>
        <i v-else class="ri-sun-line dark:text-white" @click="darkMode"></i>
        <router-link to="/homeView2" class="bg-primary text-white px-4 py-2 rounded-md">新版頁面開發中</router-link>
      </div>
    </header>
    <tabs class="col-span-4 h-fit" />
    <main class="sm:grid sm:grid-cols-4 h-full dark:bg-gray-500">
      <section class="sm:col-span-3 flex flex-col justify-between h-full relative">
        <RouterViewTransition :route-key="route.path" />
        <pagination />
      </section>
      <section class="sm:col-span-1 bg-gray-400 p-4 hidden h-full sm:block dark:bg-gray-600 relative">
        <loading />
        <div class="flex flex-col gap-4 h-full">
          <customer />
          <productTable />
          <p v-if="customerStore.is_paid" class="dark:text-bg-gray-900 dark:bg-gray-400 py-2 text-center rounded-md">
            已付款
          </p>
          <p v-else class="dark:text-white py-2 text-center rounded-md">未付款</p>
          <button
            :class="customerStore.is_paid ? 'hidden' : ''"
            @click="customerStore.checkOut"
            class="bg-secondary w-full text-white py-2 rounded-md dark:bg-gray-800 dark:active:bg-gray-900"
          >
            結帳
          </button>
        </div>
      </section>
    </main>
    <footer
      class="w-full bg-primary self-end sm:h-16 h-12 flex flex-end items-center justify-center text-white px-4 dark:bg-gray-800"
    >
      <span class="text-md">© 2024 心心精緻早午餐™。版權所有。</span>
    </footer>
  </div>
</template>
