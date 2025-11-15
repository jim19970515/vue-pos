<template>
  <div class="h-screen w-screen flex flex-col">
    <HomeHeader />
    <main class="flex flex-row h-full">
      <SideBar />
      <section class="bg-gray-300 flex-1 p-4">
        <router-view />
      </section>
    </main>
  </div>
</template>
<script setup lang="ts">
import HomeHeader from "@/components/homeHeader.vue";
import SideBar from "@/components/sideBar.vue";
</script>
