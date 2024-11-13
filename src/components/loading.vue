<script setup>
    import {isLoading} from '../utils/loading'
</script>
<template>
    <div v-if="isLoading" class="absolute top-0 left-0 h-full w-full bg-white dark:bg-gray-600 opacity-50">
        <img src="/src//assets/loading.gif" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 dark:hidden backdrop-blur-3xl" alt="">
        <img src="/src//assets/dark-loading.gif" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden dark:block" alt="">
    </div>
</template>