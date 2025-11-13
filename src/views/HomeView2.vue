<template>
  <div class="h-screen w-screen flex flex-col">
    <homeHeader />
    <main class="flex flex-row h-full">
      <sideBar />
      <section class="bg-gray-300 flex-1 p-4">
        <router-view />
      </section>
    </main>
  </div>
</template>
<script setup lang="ts">
import homeHeader from "@/components/homeHeader.vue";
import sideBar from "@/components/sideBar.vue";
</script>
