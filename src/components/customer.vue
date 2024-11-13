<script setup>
    import { useCustomerStore } from '@/stores/stores';
    const customerStore = useCustomerStore()
</script>
<template>
    <header class="text-white bg-secondary py-4 px-4 rounded-2xl dark:bg-gray-800">
        <section class="grid grid-cols-3 items-center">
            <div class="col-span-2 space-y-4">
                <div class="text-2xl font-semibold flex items-end">
                    <label for="">姓名 ：</label>
                    <p class="text-3xl">{{customerStore.user.name}}</p>
                </div>
                <div class="text-lg font-medium flex items-end">
                    <label for="">訂單時間 ：</label>
                    <p class="text-2xl">{{ customerStore.create_at }}</p>
                </div>
                <div class="text-lg font-medium flex items-end">
                    <label for="">總金額 ：</label>
                    <p class="text-2xl">＄{{ customerStore.total }}</p>
                </div>
            </div>
            <div class="col-span-1 space-y-4">
            <div class="bg-white text-primary p-2 block ring-4 ring-primary text-xl font-bold rounded-2xl text-center dark:text-gray-800 dark:ring-gray-800">
                <label for="">桌號</label>
                <p class="text-2xl">{{ customerStore.user.address }}</p>
            </div>
            <div class="bg-white text-primary p-2 block ring-4 ring-primary text-lg font-bold rounded-2xl text-center dark:text-gray-800 dark:ring-gray-800">
                <label for="">訂單編號</label>
                <p class="text-2xl">{{customerStore.user.email}}</p>
                </div>
            </div>
        </section>
    </header>
</template>