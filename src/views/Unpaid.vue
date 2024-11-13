<script setup>
    import {ref,reactive} from 'vue'
    import axios from 'axios';
    import { useOrderStore,useCustomerStore } from '@/stores/stores';

    const OrderStore = useOrderStore()
    const customerStore = useCustomerStore()
</script>
<template>
    <div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 ">
                        訂單號碼
                    </th>
                    <th scope="col" class="px-6 py-3">
                        桌號
                    </th>
                    <th scope="col" class="px-6 py-3">
                        姓名
                    </th>
                    <th scope="col" class="px-6 py-3">
                        金額
                    </th>
                    <th scope="col" class="px-6 py-3">
                        是否結帳
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in OrderStore.unPaidOrders" :key="item.id" @click="customerStore.showOrder(item.id)" class="bg-white border-b active:bg-primary active:text-white dark:bg-gray-800 dark:border-gray-700 dark:active:bg-gray-900">
                    <th scope="row" class="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.user.email}}
                    </th>
                    <td class="px-6 py-4">
                        {{item.user.address}}
                    </td>
                    <td class="px-6 py-4">
                        {{item.user.name}}
                    </td>
                    <td class="px-6 py-4">
                        {{item.total}}
                    </td>
                    <td class="px-6 py-4">
                        <p v-if="item.is_paid" class="text-isPay">已付款</p>
                        <p v-else class="text-noPay">未付款</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>