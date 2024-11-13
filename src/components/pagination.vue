<script setup>
  import { useOrderStore } from '@/stores/stores';

  const orderStore = useOrderStore()

  const nextPage = () =>{
    console.log(orderStore.current_page)
  }
</script>
<template>
  <nav aria-label="Page navigation example" class="w-full flex justify-end pt-auto">
    <ul class="inline-flex -space-x-px text-base h-10">
      <li @click="orderStore.getOrders(orderStore.current_page-1)">
        <button @click="orderStore.getOrders(orderStore.current_page - 1)" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-white bg-primary border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">上一頁</button>
      </li>
      <li v-for="page in orderStore.pagination.total_pages" :key="page" @click="orderStore.getOrders(page)">
        <span  class="flex items-center justify-center px-4 h-10 leading-tight text-white bg-primary border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white " :class="orderStore.current_page === page?['dark:bg-gray-900','odd:text-white','bg-secondary']:''">{{ page }}</span>
      </li>
      <li @click="orderStore.getOrders(orderStore.current_page+1)">
        <button @click="nextPage" class="flex items-center justify-center px-4 h-10 leading-tight text-white bg-primary border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">下一頁</button>
      </li>
    </ul>
  </nav>
</template>