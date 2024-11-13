<script setup>
    import router from '@/router';
</script>
<template>
    <div class="border-b border-secondary dark:border-gray-700 dark:bg-gray-900 bg-secondary">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-white dark:text-gray-400">
            <li class="me-2" >
                <router-link :to="{name:'order'}" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-500 dark:hover:text-gray-300 dark:hover:border-gray-300 group">
                    <svg class="w-4 h-4 me-2 text-white group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>全部訂單
                </router-link>
            </li>
            <li class="me-2" @click="goUnpaid">
                <router-link :to="{name:'unpaid'}" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-500 dark:hover:text-gray-300 dark:hover:border-gray-300 group">
                    <svg class="w-4 h-4 me-2 text-white group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>未付款
                </router-link>
            </li>
            <li class="me-2">
                <router-link :to="{name:'paid'}" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-500 dark:hover:text-gray-300 dark:hover:border-gray-300 group">
                    <i class="ri-verified-badge-fill text-md me-2 text-white group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"></i>
                    已付款 / 已完成
                </router-link>
            </li>
        </ul>
    </div>
</template>