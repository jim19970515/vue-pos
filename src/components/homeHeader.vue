<template>
  <div>
    <header class="h-fit w-full bg-primary h-fit w-full py-2 px-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
          <img src="/src/assets/posLogo.png" class="object-cover h-8 sm:h-20" alt="" />
          <h1 class="text-3xl text-white font-bold">心心Pos</h1>
        </div>
        <h2 class="text-lg sm:text-2xl text-white font-medium text-center sm:block hidden">
          {{ currentTime }}
        </h2>
      </div>
    </header>
  </div>
</template>
<script setup lang="ts">
import { useCurrentTime } from "@/composables/useCurrentTime";
const currentTime = useCurrentTime("YYYY/MM/DD HH:mm");
</script>
