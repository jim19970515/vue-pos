<script setup>
    import {ref} from 'vue'
    import { useCustomerStore } from '@/stores/stores';
    const customerStore = useCustomerStore()
</script>
<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        商品名
                    </th>
                    <th scope="col" class="px-6 py-3">
                        數量
                    </th>
                    <th scope="col" class="px-6 py-3">
                        金額
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in customerStore.products" :key="item.id" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.product.title }}
                    </th>
                    <td class="px-6 py-4">
                        {{ item.qty }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.total }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>