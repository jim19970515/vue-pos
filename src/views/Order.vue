<script setup lang="ts">
import { ref, reactive } from "vue";
import axios from "axios";
import { useOrderStore, useCustomerStore } from "@/stores/stores";
import api from "@/api";

//store
const OrderStore = useOrderStore();

const getOrderData = async (orderId: string) => {
  const { data } = await api.getOrderId(orderId);
};
</script>
<template>
  <div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">訂單號碼</th>
          <th scope="col" class="px-6 py-3">桌號</th>
          <th scope="col" class="px-6 py-3">姓名</th>
          <th scope="col" class="px-6 py-3">金額</th>
          <th scope="col" class="px-6 py-3">是否結帳</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="order in OrderStore.orders"
          :key="order.id"
          @click="getOrderData(order.id)"
          class="bg-white border-b active:bg-primary active:text-white dark:bg-gray-800 dark:border-gray-700 dark:active:bg-gray-900"
        >
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ order.user.email }}
          </th>
          <td class="px-6 py-4">
            {{ order.user.address }}
          </td>
          <td class="px-6 py-4">
            {{ order.user.name }}
          </td>
          <td class="px-6 py-4">
            {{ order.total }}
          </td>
          <td class="px-6 py-4">
            <p v-if="order.is_paid" class="text-isPay">已付款</p>
            <p v-else class="text-noPay">未付款</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
